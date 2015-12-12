var defaults = require('lodash/object/defaults');
var babylon  = require('babylon');

var DEFAULTS = {
    sourceType: 'module',
    tests:      [ /\.js$/ ],
    plugins:    [ 'jsx' ],
    property:   'ast'
};

/**
 * @module metalsmith-babylast
 * @function
 * @param {Object}   [opts]
 * @param {RegExp[]} [opts.tests=[/\.js$/]]
 * @param {String}   [opts.sourceType='module']
 * @param {String[]} [opts.plugins=['jsx']]
 * @param {String}   [opts.property='ast']
 * @returns {Function}
 */
module.exports = function babylast (opts) {
    opts = defaults(opts || {}, DEFAULTS);

    return function (files, metalsmith, done) {
        Object.
            keys(files).
            filter(function (filepath) {
                var tests =
                        Array.isArray(opts.tests) ?
                            opts.tests :
                            [opts.tests];

                return tests.
                    some( function (test) { return test.test(filepath); });
            }).
            forEach(function (filepath) {
                var obj = files[filepath];
                obj[opts.property] =
                    babylon.parse(obj.contents.toString('utf8'), opts);
            });

        done();
    };
};
