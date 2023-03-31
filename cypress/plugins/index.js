const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript"),
  };

  on("before:browser:launch", (browser = {}, launchOptions) => {
    if (
      browser.name === "chrome" ||
      browser.name === "firefox" ||
      browser.name === "edge:canary"
    ) {
      launchOptions.args.push("--incognito");

      return launchOptions;
    }
  });
  return config;
};
