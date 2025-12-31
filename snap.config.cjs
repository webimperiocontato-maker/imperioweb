// react-snap configuration
module.exports = {
  source: "dist",
  destination: "dist",
  include: ["/", "/servicos", "/contacto", "/portfolio", "/sobre"],
  minifyHtml: {
    collapseWhitespace: true,
    removeComments: true,
  },
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  puppeteerExecutablePath: undefined,
  skipThirdPartyRequests: false,
  crawl: false,
  viewport: {
    width: 1200,
    height: 800,
  },
  headless: true,
  inlineCss: false,
  removeBlobs: true,
  fixWebpackChunksIssue: true,
};
