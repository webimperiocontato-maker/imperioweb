#!/usr/bin/env node
/**
 * Verification script for pre-rendered HTML
 * Checks that dist/ contains real content in the body (not just #root)
 * 
 * Usage: node scripts/verify-prerender.js
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

// Routes that must have pre-rendered HTML
const REQUIRED_ROUTES = [
  { path: 'index.html', name: 'Home (/)' },
  { path: 'servicos/index.html', name: 'Serviços (/servicos)' },
  { path: 'contacto/index.html', name: 'Contacto (/contacto)' },
];

// Content that should exist in pre-rendered HTML
const REQUIRED_CONTENT = [
  { pattern: /<h1[^>]*>/i, name: 'H1 tag' },
  { pattern: /Império\s*Web/i, name: 'Brand name' },
  { pattern: /(WhatsApp|Pedir Orçamento|Get a Quote|Contacto)/i, name: 'CTA text' },
  { pattern: /<a[^>]*href/i, name: 'Links' },
];

// Content that indicates empty SPA (should NOT exist alone in body)
const SPA_SHELL_PATTERNS = [
  { pattern: /<div id="root"><\/div>/i, name: 'Empty #root div' },
];

let hasErrors = false;

console.log('\n🔍 Verifying pre-rendered HTML...\n');
console.log(`📁 Checking dist directory: ${DIST_DIR}\n`);

// Check if dist exists
if (!fs.existsSync(DIST_DIR)) {
  console.error('❌ ERROR: dist/ directory not found. Run npm run build first.\n');
  process.exit(1);
}

// Check each required route
REQUIRED_ROUTES.forEach(route => {
  const filePath = path.join(DIST_DIR, route.path);
  
  console.log(`\n📄 Checking ${route.name}...`);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.error(`   ❌ File not found: ${route.path}`);
    hasErrors = true;
    return;
  }
  
  console.log(`   ✅ File exists: ${route.path}`);
  
  // Read file content
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract body content
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : '';
  
  // Check for empty SPA shell
  SPA_SHELL_PATTERNS.forEach(check => {
    if (check.pattern.test(bodyContent) && bodyContent.trim().length < 200) {
      console.error(`   ❌ ${check.name} - Body appears to be empty SPA shell`);
      hasErrors = true;
    }
  });
  
  // Check for required content
  REQUIRED_CONTENT.forEach(check => {
    if (check.pattern.test(bodyContent)) {
      console.log(`   ✅ Has ${check.name}`);
    } else {
      console.error(`   ❌ Missing ${check.name}`);
      hasErrors = true;
    }
  });
  
  // Show body content size
  console.log(`   📊 Body content size: ${bodyContent.length} characters`);
  
  if (bodyContent.length < 1000) {
    console.warn(`   ⚠️  Warning: Body content seems small. May not be fully pre-rendered.`);
  }
});

// Check for additional files
console.log('\n\n📂 Checking additional pre-rendered routes...');
const additionalRoutes = ['portfolio/index.html', 'sobre/index.html'];
additionalRoutes.forEach(route => {
  const filePath = path.join(DIST_DIR, route);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const bodyContent = bodyMatch ? bodyMatch[1] : '';
    if (bodyContent.length > 1000) {
      console.log(`   ✅ ${route} - Pre-rendered (${bodyContent.length} chars)`);
    } else {
      console.log(`   ⚠️  ${route} - May not be fully pre-rendered (${bodyContent.length} chars)`);
    }
  } else {
    console.log(`   ⏭️  ${route} - Not found (optional)`);
  }
});

// Final result
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.error('\n❌ VERIFICATION FAILED');
  console.error('   Pre-rendering is not working correctly.');
  console.error('   The HTML files do not contain real content in the body.\n');
  console.error('   To fix this:');
  console.error('   1. Ensure react-snap is installed: npm install react-snap');
  console.error('   2. Run build with postbuild: npm run build');
  console.error('   3. Check snap.config.cjs configuration\n');
  process.exit(1);
} else {
  console.log('\n✅ VERIFICATION PASSED');
  console.log('   All required routes have pre-rendered HTML with real content.');
  console.log('   view-source should show H1, text, and CTAs in the body.\n');
  console.log('   Next steps:');
  console.log('   1. Deploy to GitHub Pages');
  console.log('   2. Test with: view-source:https://imperioweb.eu/');
  console.log('   3. Test with JavaScript disabled\n');
  process.exit(0);
}
