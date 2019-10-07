module.exports = function(bundler) {
    bundler.addAssetType('.litscss', require.resolve('./LitSCSSAsset'))
}