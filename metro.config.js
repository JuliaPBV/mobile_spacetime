const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro');

// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

module.exports = (() => {

  const { transformer, resolver } = config

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  }
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  }

  return config
})()

//MODULO MUITO IMPORTANTE PARA O NATIVEWIND
module.exports = withNativeWind(config, { input: './styles/global.css' });
