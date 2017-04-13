'use strict';

const { getEnvConfig } = require('./lib/utils');
const start = require('./src/start');

module.exports = agent => {
  const done = agent.readyCallback('egg-neutrino');
  const config = agent.config;
  const { middleware, options } = getEnvConfig(config, agent.config.env);

  start(middleware, options, agent, done);

};
