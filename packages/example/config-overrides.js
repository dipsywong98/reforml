const rewireYAML = require('react-app-rewire-yaml');
module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  config = rewireYAML(config, env)
  return config
}
