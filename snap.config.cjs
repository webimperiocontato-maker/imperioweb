// react-snap configuration for SSG pre-rendering
// Generates static HTML files with real content
module.exports = {
  source: "dist",
  destination: "dist",
  include: [
    "/",
    "/servicos",
    "/contacto",
    "/portfolio",
    "/sobre"
  ],
  // Puppeteer args for CI environments (Ubuntu runners)
  puppeteerArgs: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu"
  ],
  // Don't crawl, render only specified routes
  crawl: false,
  // Wait for React to render
  waitFor: 1000,
  // Skip external requests
  skipThirdPartyRequests: true,
  // Don't inline CSS
  inlineCss: false,
  // Clean up
  removeBlobs: true,
  // Headless mode
  headless: true
};
