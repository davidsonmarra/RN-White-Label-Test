const {BRAND} = require('./env.wl2.json');
const brandPath = `./src/brands/${BRAND}`;

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          imageScale: ['@2x', '@3x'],
          imageTypes: ['.png', '.gif', '.jpg', '.jpeg'],
          alias: {
            '@': './src',
            '@genericComponents': './src/components',
            '@components': `${brandPath}/components`,
            '@assets': `${brandPath}/assets`,
          },
        },
      ],
      [
        'inline-dotenv',
        {
          path: '.env',
          unsafe: true,
        },
      ],
    ],
  };
};
