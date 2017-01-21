module.exports={
	"name": "nodulus",
	"url": "",
	"port": "4000",
	"appRoot": "/",
	"enableSockets": true,
	"database": {
		"diskdb": {
			"host": "data"
		}
	},
	"defaultPage": "../client/index.html",
	"websocket": {
		"enable": true
	},
	"logs": {
		"transports": [
			{
				"type": "winston.transports.File",
				"name": "info-file",
				"filename": "./logs/filelog-info.log",
				"level": "info"
			},
			{
				"type": "winston.transports.File",
				"name": "error-file",
				"filename": "./logs/filelog-error.log",
				"level": "error"
			},
			{
				"type": "winston.transports.File",
				"name": "warn-file",
				"filename": "./logs/filelog-warn.log",
				"level": "warn"
			},
			{
				"type": "winston.transports.Console",
				"name": "debug-file",
				"level": "debug"
			}
		]
	}
}