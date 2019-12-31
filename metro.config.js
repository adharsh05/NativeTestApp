/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *   //// Minimal Optimisation:    ———  Inline require /////////
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
