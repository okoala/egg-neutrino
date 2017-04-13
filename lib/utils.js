'use strict';

const { pathOr, defaultTo } = require('ramda');

// getNodeEnv :: String command -> String? env -> String
exports.getNodeEnv = (command = 'start', env) => defaultTo({
  build: 'production',
  start: 'development',
  test: 'test',
}[command] || 'development', env);

exports.getEnvConfig = (config, env) => {
  const useMiddleware = pathOr([], [ 'neutrino', 'use' ], config);
  const useOptions = pathOr({}, [ 'neutrino', 'options' ], config);
  const nodeEnv = exports.getNodeEnv(env);

  const middleware = [ ...new Set(useMiddleware) ];
  const options = Object.assign(useOptions, {
    config: pathOr({}, [ 'neutrino', 'config' ], config),
    args: { env: nodeEnv },
  });

  return {
    middleware,
    options,
  };
};
