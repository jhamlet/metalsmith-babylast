/*globals describe, it, afterEach*/
describe('metalsmith-babylast', () => {

    require('should');

    const metalsmith = require('metalsmith');
    const babylast   = require('../');
    const del        = require('del');

    afterEach((done) => {
        del(__dirname + '/build').
            then(function () { done(); });
    });

    const make = () => {
        return metalsmith(__dirname).
            source('./src').
            use(babylast()).
            destination('./build');
    };

    it('should include asts for each javascript file', (done) => {
        make().
            use((files, metalsmith, done) => {
                Object.
                    keys(files).
                    filter((filepath) => ( /\.js$/.test(filepath) )).
                    forEach((filepath) => {
                        const obj = files[filepath];
                        obj.should.hasOwnProperty('ast');
                    });

                done();
            }).
            build(done);
    });
});
