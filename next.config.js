const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const nextConfig = {
  webpack(config) {
    // Check if localEnv is defined
    if (localEnv && typeof localEnv === 'object') {
      // If localEnv is defined and it's an object, proceed with adding EnvironmentPlugin
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    } else {
      // If localEnv is undefined or not an object, log an error
      console.error('Error loading environment variables from .env file:', localEnv);
    }
    return config;
  },
};

module.exports = nextConfig;
