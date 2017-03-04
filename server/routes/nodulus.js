"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = require("@nodulus/config").config;
var consts = require("@nodulus/config").consts;
var dal = require("@nodulus/data");
var users = require("@nodulus/users");
var core = require("@nodulus/core");
var router = core.Router();
var util = require('util');
var fs = require("fs-extra");
var path = require('path');
var Joi = require('joi');
var _ = require('ramda');
var setupSchema = Joi.object().keys({
    language: Joi.string().required(),
    theme: Joi.string().required(),
    database: Joi.object().required(),
    credentials: Joi.object().required()
});
router.post("/setup", function (req, res) {
    var setupConfig = req.body;
    Joi.validate(setupConfig, setupSchema, function (err, value) {
        if (err) {
            return res.status(400).json(_.map(function (error) { return error.message; }, err.details));
        }
        config["database"] = setupConfig["database"];
        if (config["database"].diskdb)
            fs.ensureDirSync(config["database"].diskdb.host);
        config.persistConfiguration();
        var userObj = {
            Email: setupConfig.credentials.email,
            Password: setupConfig.credentials.password
        };
        users.register(userObj, function () {
            var setupConfigPath = path.join(process.cwd(), "nodulus.json");
            fs.writeFileSync(setupConfigPath, JSON.stringify({ active: new Date() }), 'utf8');
            res.status(200).json(setupConfig);
        });
    });
});
module.exports = router;
//# sourceMappingURL=nodulus.js.map