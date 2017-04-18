'use strict';

// egg default port
const defaultPort = 7001;

exports.neutrino = {
  config: {
    devServer: {
      proxy: {
        '/api': {
          target: `http://127.0.0.1:${defaultPort}`,
          secure: false,
        },
      },
    },
  },
};
