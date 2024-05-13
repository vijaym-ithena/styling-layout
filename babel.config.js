module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',
        '@babel/plugin-proposal-export-namespace-from',
        'react-native-reanimated/plugin',
      ],
    },
  },
};
