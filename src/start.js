'use strict';

const { start } = require('neutrino');
const ora = require('ora');

module.exports = (middleware, options, app) => {

  const spinner = ora('Building project').start();

  return start(middleware, options)
    .fork(
      errors => {
        spinner.fail('Building project failed');
        errors.forEach(err => {
          app.logger.error(err.stack || err);
          err.details && app.logger.error(err.details);
        });
      },
      compiler => {
        if (!compiler.options.devServer) {
          return spinner.succeed('Build completed');
        }

        const { devServer } = compiler.options;
        const protocol = devServer.https ? 'https' : 'http';
        const { host, port } = devServer;

        spinner.succeed(`Development server running on: ${protocol}://${host}:${port}`);

        const building = ora('Waiting for initial build to finish').start();

        compiler.plugin('done', () => building.succeed('Build completed'));
        compiler.plugin('compile', () => {
          building.text = 'Source changed, re-compiling';
          building.start();
        });
      }
    );
};
