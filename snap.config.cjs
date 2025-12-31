// react-snap configuration for robust SSG pre-rendering
module.exports = {
  source: "dist",
  destination: "dist",
  // Routes to pre-render with static HTML
  include: [
    "/",
    "/servicos",
    "/contacto",
    "/portfolio",
    "/sobre"
  ],
  // Minify HTML output
  minifyHtml: {
    collapseWhitespace: true,
    removeComments: true,
  },
  // Puppeteer configuration for CI/CD
  puppeteerArgs: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-accelerated-2d-canvas",
    "--disable-gpu"
  ],
  puppeteerExecutablePath: undefined,
  // Skip external requests for faster builds
  skipThirdPartyRequests: true,
  // Don't crawl, just render specified routes
  crawl: false,
  // Viewport for rendering
  viewport: {
    width: 1200,
    height: 800,
  },
  // Use headless Chrome
  headless: true,
  // Don't inline CSS (can cause issues)
  inlineCss: false,
  // Clean up blob URLs
  removeBlobs: true,
  // Fix webpack chunk issues
  fixWebpackChunksIssue: true,
  // Wait for React to finish rendering
  waitFor: 250,
  // Ensure external scripts load
  externalServer: false,
  // Save each route as index.html in subfolder
  saveAs: "html",
};
