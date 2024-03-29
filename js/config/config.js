var configs = {
  local: {
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

export const config = configs[process.env.CONF || 'local'];
