#!/usr/bin/env node
/**
 * SSG Verification Script for Pre-rendered HTML
 * 
 * This script validates that the build output contains real HTML content,
 * not just an empty SPA shell. It fails the build if pre-rendering didn't work.
 * 
 * Usage: 
 *   npm run verify:ssg
 *   node scripts/verify-prerender.js
 * 
 * Exit codes:
 *   0 = All checks passed
 *   1 = Verification failed (build should not be deployed)
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

// Routes that MUST have pre-rendered HTML with real content
const REQUIRED_ROUTES = [
  { path: 'index.html', name: 'Home (/)', minBodySize: 5000 },
  { path: 'servicos/index.html', name: 'Serviços (/servicos)', minBodySize: 3000 },
  { path: 'contacto/index.html', name: 'Contacto (/contacto)', minBodySize: 2000 },
];

// Optional routes (won't fail build if missing, but will warn)
const OPTIONAL_ROUTES = [
  { path: 'portfolio/index.html', name: 'Portfolio (/portfolio)', minBodySize: 2000 },
  { path: 'sobre/index.html', name: 'Sobre (/sobre)', minBodySize: 2000 },
];

// Content that MUST exist in pre-rendered HTML
const REQUIRED_CONTENT = [
  { pattern: /<h1[^>]*>[^<]+<\/h1>/i, name: 'H1 tag with content' },
  { pattern: /Império\s*Web/i, name: 'Brand name "Império Web"' },
  { pattern: /(WhatsApp|Pedir\s*(Orçamento|Proposta)|Get\s*a\s*Quote|Contacto|Contact)/i, name: 'CTA text' },
  { pattern: /<a[^>]*href=["'][^"']+["'][^>]*>/i, name: 'Links with href' },
  { pattern: /<p[^>]*>[^<]{20,}<\/p>/i, name: 'Paragraph with real text (20+ chars)' },
];

// Patterns that indicate FAILED pre-rendering
const FAILURE_PATTERNS = [
  { pattern: /<div\s+id=["']root["']\s*><\/div>/i, name: 'Empty #root div (SPA shell)' },
  { pattern: /<body[^>]*>\s*<div\s+id=["']root["']\s*>\s*<\/div>\s*<script/i, name: 'Body with only script tag' },
];

let hasErrors = false;
let warningCount = 0;

console.log('\n' + '='.repeat(60));
console.log('🔍 SSG VERIFICATION - Checking Pre-rendered HTML');
console.log('='.repeat(60));
console.log(`\n📁 Dist directory: ${DIST_DIR}\n`);

// Check if dist exists
if (!fs.existsSync(DIST_DIR)) {
  console.error('❌ FATAL: dist/ directory not found.');
  console.error('   Run "npm run build" first.\n');
  process.exit(1);
}

/**
 * Verify a single route
 */
function verifyRoute(route, isRequired = true) {
  const filePath = path.join(DIST_DIR, route.path);
  const prefix = isRequired ? '📄' : '📂';
  
  console.log(`\n${prefix} Checking ${route.name}...`);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    if (isRequired) {
      console.error(`   ❌ FAIL: File not found: ${route.path}`);
      hasErrors = true;
    } else {
      console.log(`   ⏭️  SKIP: File not found (optional)`);
    }
    return;
  }
  
  console.log(`   ✅ File exists: ${route.path}`);
  
  // Read file content
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileSize = content.length;
  
  // Extract body content
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : '';
  const bodySize = bodyContent.length;
  
  console.log(`   📊 File size: ${fileSize} bytes | Body size: ${bodySize} chars`);
  
  // Check for failure patterns (empty SPA shell)
  let hasSPAShell = false;
  FAILURE_PATTERNS.forEach(check => {
    if (check.pattern.test(content)) {
      // Only fail if body is very small (indicating empty shell)
      if (bodySize < 500) {
        console.error(`   ❌ FAIL: ${check.name}`);
        hasErrors = true;
        hasSPAShell = true;
      }
    }
  });
  
  if (hasSPAShell) {
    console.error(`   ❌ Pre-rendering FAILED for this route`);
    return;
  }
  
  // Check minimum body size
  if (bodySize < route.minBodySize) {
    console.error(`   ❌ FAIL: Body too small (${bodySize} < ${route.minBodySize} chars)`);
    if (isRequired) hasErrors = true;
    else warningCount++;
  } else {
    console.log(`   ✅ Body size OK (${bodySize} >= ${route.minBodySize} chars)`);
  }
  
  // Check for required content
  let contentChecks = 0;
  REQUIRED_CONTENT.forEach(check => {
    if (check.pattern.test(bodyContent)) {
      console.log(`   ✅ Has ${check.name}`);
      contentChecks++;
    } else {
      if (isRequired) {
        console.error(`   ❌ MISSING: ${check.name}`);
        hasErrors = true;
      } else {
        console.log(`   ⚠️  Missing ${check.name}`);
        warningCount++;
      }
    }
  });
  
  // Summary for this route
  if (!hasErrors || !isRequired) {
    console.log(`   ✅ Content checks: ${contentChecks}/${REQUIRED_CONTENT.length} passed`);
  }
}

// Verify required routes
console.log('\n' + '-'.repeat(60));
console.log('REQUIRED ROUTES (build fails if these don\'t pass)');
console.log('-'.repeat(60));

REQUIRED_ROUTES.forEach(route => verifyRoute(route, true));

// Verify optional routes
console.log('\n' + '-'.repeat(60));
console.log('OPTIONAL ROUTES (warnings only)');
console.log('-'.repeat(60));

OPTIONAL_ROUTES.forEach(route => verifyRoute(route, false));

// Check for 404.html fallback
console.log('\n' + '-'.repeat(60));
console.log('FALLBACK FILES');
console.log('-'.repeat(60));

const fallback404 = path.join(DIST_DIR, '404.html');
if (fs.existsSync(fallback404)) {
  console.log('\n✅ 404.html exists (SPA fallback for GitHub Pages)');
} else {
  console.log('\n⚠️  404.html not found (recommended for GitHub Pages)');
  warningCount++;
}

// Final result
console.log('\n' + '='.repeat(60));
console.log('VERIFICATION RESULT');
console.log('='.repeat(60));

if (hasErrors) {
  console.error('\n❌ VERIFICATION FAILED\n');
  console.error('Pre-rendering is NOT working correctly.');
  console.error('The HTML files do not contain real content in the body.');
  console.error('\nDO NOT DEPLOY this build - view-source will show empty #root.\n');
  console.error('To fix this:');
  console.error('  1. Ensure react-snap is installed: npm install react-snap');
  console.error('  2. Add postbuild script to package.json: "postbuild": "react-snap"');
  console.error('  3. Run: npm run build');
  console.error('  4. Check snap.config.cjs configuration');
  console.error('  5. Run this script again: npm run verify:ssg\n');
  process.exit(1);
} else {
  console.log('\n✅ VERIFICATION PASSED\n');
  console.log('All required routes have pre-rendered HTML with real content.');
  if (warningCount > 0) {
    console.log(`⚠️  ${warningCount} warning(s) - review optional routes above.`);
  }
  console.log('\nAfter deployment, verify with:');
  console.log('  1. view-source:https://imperioweb.eu/');
  console.log('  2. view-source:https://imperioweb.eu/servicos');
  console.log('  3. view-source:https://imperioweb.eu/contacto');
  console.log('  4. Disable JavaScript and reload the site\n');
  process.exit(0);
}
