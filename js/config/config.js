var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var configs = {
  development: {
    isSSL: false,
    apiServer: 'localhost:3000',
  },

  staging: {
    isSSL: true,
    apiServer: 'staging.solebtc.com/api'
  },

  production: {
    isSSL: true,
    apiServer: 'solebtc.com/api'
  }
};

export const config = configs[env];
