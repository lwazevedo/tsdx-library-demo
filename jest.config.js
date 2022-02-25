module.exports = {
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!p-map).+\\.(js|jsx)$',
    '[/\\\\]node_modules[/\\\\](?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map|base64-js|js-sha256).+\\.(js|jsx)$',
  ],
};
