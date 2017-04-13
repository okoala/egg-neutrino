'use strict';

const Command = require('common-bin');
const mm = require('egg-mock');
const { getEnvConfig } = require('../utils');
const build = require('../../src/build');

class BuildCommand extends Command {
  get description() {
    return 'neutrino build';
  }

  * run() {
    const app = mm.app({
      baseDir: __dirname,
    });
    const config = app.config;
    const { middleware, options } = getEnvConfig(config, app.config.env);

    build(middleware, options, app, () => {});
  }
}

module.exports = BuildCommand;
