'use strict';

const path = require('path');
const Command = require('common-bin');

class MainCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: egg-neutrino [command] [options]';

    // load directory
    this.load(path.join(__dirname, 'lib/cmd'));
  }
}

module.exports = MainCommand;
