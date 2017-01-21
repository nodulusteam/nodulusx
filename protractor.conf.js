var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  framework: 'jasmine',
  baseUrl: 'http://localhost:4200',
  specs: ['./e2e/**/*.e2e-spec.ts'],
  directConnect: true,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
}





// // // // Protractor configuration file, see link for more information
// // // // https://github.com/angular/protractor/blob/master/lib/config.ts

// // // /*global jasmine */
// // // var SpecReporter = require('jasmine-spec-reporter');

// // // exports.config = {
// // //   allScriptsTimeout: 11000,
// // //   specs: [
// // //     './e2e/**/*.e2e-spec.ts'
// // //   ],
// // //   // capabilities: {
// // //   //   'browserName': 'chrome'
// // //   // },
// // //   directConnect: false,
// // //   //baseUrl: 'http://localhost:4200/',
// // //   framework: 'custom',
// // //   // jasmineNodeOpts: {
// // //   //   showColors: true,
// // //   //   defaultTimeoutInterval: 30000,
// // //   //   print: function() {}
// // //   // },
// // //   useAllAngular2AppRoots: true,
// // //   beforeLaunch: function() {
// // //     require('ts-node').register({
// // //       project: 'e2e'
// // //     });
// // //   },
// // //   onPrepare: function() {
// // //     jasmine.getEnv().addReporter(new SpecReporter());
// // //   }
// // // };
