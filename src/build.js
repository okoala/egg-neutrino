'use strict';

const { build } = require('neutrino');
const { defaultTo } = require('ramda');
const ora = require('ora');

module.exports = (middleware, options, eggInstance, done) => {
  const spinner = ora('Building project').start();

  return build(middleware, options)
    .fork(
      errors => {
        spinner.fail('Building project failed');
        errors.forEach(err => {
          eggInstance.logger.error(err.stack || err);
          err.details && eggInstance.logger.error(err.details);
        });
      },
      stats => {
        spinner.succeed('Building project completed');

        const options = defaultTo({
          colors: true,
          chunks: false,
          children: false,
        }, stats.compilation.compiler.options.stats);

        eggInstance.logger.info(stats.toString(options));

        done();
      }
    );
};
