/*                 _       _           
                 | |     | |          
  _ __   ___   __| |_   _| |_   _ ___ 
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @nodulus open source | ©Roi ben haim  ®2016    
 */


/// <reference path="../typings/main.d.ts" />


const config = require("@nodulus/config").config;
const consts = require("@nodulus/config").consts;
const dal = require("@nodulus/data");
const users = require("@nodulus/users");


import { credentials, setupRequest } from '../_shim';

const core = require("@nodulus/core");
const router = core.Router();
const util = require('util');
const fs = require("fs-extra");
var path = require('path');
const Joi = require('joi');
const _ = require('ramda');

var setupSchema = Joi.object().keys({
    language: Joi.string().required(),
    theme: Joi.string().required(),
    database: Joi.object().required(),
    credentials: Joi.object().required()
});


router.post("/setup", function (req: any, res: any) {
    var setupConfig = req.body as setupRequest;
    Joi.validate(setupConfig, setupSchema, function (err: any, value: any) {
        if (err) {
            return res.status(400).json(_.map((error: any) => error.message, err.details));
        }


        config["database"] = setupConfig["database"];
        if (config["database"].diskdb)
            fs.ensureDirSync(config["database"].diskdb.host);

        config.persistConfiguration();


        var userObj = {
            Email: setupConfig.credentials.email,
            Password: setupConfig.credentials.password

        }
        //register the default user    
        users.register(userObj, function () {
            var setupConfigPath = path.join(process.cwd(), "nodulus.json");
            fs.writeFileSync(setupConfigPath, JSON.stringify({ active: new Date() }), 'utf8');
            res.status(200).json(setupConfig);
        });
    });
});

module.exports = router;