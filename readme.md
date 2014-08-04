# html-links

Extract links from a stream of html

[![NPM](https://nodei.co/npm/html-links.png?downloads&stars)](https://nodei.co/npm/html-links/)

[![NPM](https://nodei.co/npm-dl/html-links.png)](https://nodei.co/npm/html-links/)

## Installation

```
npm install html-links
```

## Example

### Input

```javascript
var stream = new require('stream').PassThrough

  , extractLinks = require('./extract-links')('http://google.com', function (err, links) {
    console.log('links', links)
  })

extractLinks.write('<a href="relative">Relative link!</a>')
extractLinks.write('<a href="http://yahoo.com">Absolute link!</a>')
extractLinks.write('<a>empty</a>')
extractLinks.write('<a href="mailto:mail@also.works">Mail me</a>')
extractLinks.end()
```

### Output

```
links [ 'http://google.com/relative',
  'http://yahoo.com/',
  'mailto:mail@also.works' ]
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
