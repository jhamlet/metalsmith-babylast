Metalsmith Babylast
===================

[Babylon]:    https://github.com/babel/babel/blob/master/packages/babylon/README.md
[Metalsmith]: http://www.metalsmith.io/

> Add a [Babylon](Babylon) AST to each [Metalsmith](Metalsmith) file object.


Installation
------------

~~~
% npm install metalsmith-babylast
~~~


Usage
-----


~~~js
var metalsmith = require('metalsmith');
var babylast   = require('metalsmith-babylast');

metalsmith(__dirname).
    use(babylast({
        tests:   [ /\.jsx?$/ ]
        plugins: [ 'jsx', 'flow', 'decorators' ]
    })).
    // Now every metalsmith file object has a 'ast' property with the Babylon
    // generated ast as its value
    build(function (error) {
        if (error) {
            throw error;
        }
        console.log('done');
    });
~~~


API
---

### babylast([options]) : Function

#### options: Object

* `sourceType`: String - The type of source file, `'script'` or `'module'`.
  Default `'module'`.
* `tests`: RegExp[] - One, or more, Regular Expressions used to determine
  which files to include an ast for. Default `[ /\.js$/ ]`.
* `plugins`: String[] - Which Babylon plugins to turn on. Default `[ 'jsx' ]`.
* `property`: String - The property name to use when adding the ast to the
  metalsmith file object. Default `'ast'`.

See [Babylon](Babylon) for other values for the `options` object.


Report an Issue
---------------

* [Bugs](http://github.com/jhamlet/metalsmith-babylast/issues)
* Contact the author: <jerry@hamletink.com>


License
-------

> Copyright (c) 2015 Jerry Hamlet <jerry@hamletink.com>
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> The Software shall be used for Good, not Evil.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.
> 
