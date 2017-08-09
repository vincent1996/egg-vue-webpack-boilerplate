const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../base');
class ClientDevBuilder extends WebpackBaseBuilder(VueWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setDevMode();
    this.setHotLoad(true);
    this.setDevTool(false);
    this.setCssExtract(false);
    this.setManifest(true);
    this.setBuildConfig(true);
  }
}
module.exports = new ClientDevBuilder().create();
