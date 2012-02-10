var sample_data = require('../sample-data');
var io = require('socket.io');
var expose = require('express-expose');
var app;

module.exports = {
	
	init : function(application) {
		app = application;
		console.log("Init Devices");
	},
	
	listAll : function(req, res) {
		
		var sio = io.listen(app);
		var devices = sample_data.devices;
		
		sio.sockets.on('connection', function (socket) {
			socket.emit('handshake');
			socket.on('handshake_accept', function (data) {
				console.log(data);
		  });
		});
		
		
		//app.expose(require('../view_helpers/device-grapher.js'),'device_grapher');
		app.expose(devices,'devices');
		res.render('devices/list-all', {
			locals : {
				scale : sample_data.scale,
				devices : sample_data.devices
			}
		});
		
	}
	
};