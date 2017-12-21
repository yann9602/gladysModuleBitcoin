var command = require('./lib/bitcoin-command.js');
var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');

module.exports = function(sails) {

	return {
		command: command,
		install: install,
		uninstall: uninstall
	};
};
