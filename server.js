"use strict";
var nodeMajor = +process.versions.node.split('.')[0];
if (nodeMajor < 4) {
	console.error('node < 4  is not supported!');
	process.exit(1);
} else {
	if (nodeMajor < 6) {
		console.info('Loading Babel transpiler for Oldish node!');
		require('babel-register')();
	}
}
var prompt = require('prompt');
console.info('Welcome to Simple REST Server!');
console.info('FINAL-SPRINT by Saar Sabin, Guy Lilian and Shahar Haramati C.');
console.info('Notice: Only Mongo based server also has websocket support');
console.info('***** REDIRECING TO  MongoDB server');
require('./server-full');