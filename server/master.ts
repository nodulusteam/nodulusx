/// <reference path="./typings/main.d.ts" />
"use strict";
/// <reference path="./typings/nodulus/nodulus.d.ts" />
/*                 _       _
                 | |     | |
  _ __   ___   __| |_   _| |_   _ ___
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @nodulus open source | ©Roi ben haim  ®2016
*/

var argv: any={};
process.argv.slice(2).forEach(function (item) {
    var s = item.split('=');
    argv[s[0]] = s[1];
});


console.log('argv');
console.log(argv);

var cp = require('child_process');
var path = require('path');

var child = cp.fork(path.join(__dirname, 'app.js'), [], {
    execArgv: ["--debug=9999"],
    env: argv
});

child.on('close', function (code: any) {
    console.log('closing code: ' + code);
});

child.on('message', function (m: any) {
    if (m === 'update nodulus') {
        console.log(m);
        child.kill("SIGINT");
        // Receive results from child process
        var checkUtil = require("@nodulus/update").check;
        var updateUtil = require("@nodulus/update").update;
        var c = new checkUtil();
        c.checkUpdates().then((upgraded: boolean) => {
            console.log(upgraded);
            if (upgraded) {
                var n = new updateUtil();
                n.installUpdates(upgraded).then(function (output: any) {
                    console.log(output);

                    child = cp.fork(path.join(__dirname, 'app.js'), [], {
                        execArgv: ["--debug=9999"]
                    });
                    console.log(output);
                });
            }
        });
    }


});
