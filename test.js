var fs = require('fs')

  , test = require('tape')

  , links = require('./extract-links')

test('default', function (t) {
  fs.createReadStream(__dirname + '/test.html')
    .pipe(links(function (err, hrefs) {
      t.deepEqual(
          hrefs
        , [
              'beep/boop', '/foo/bar', 'http://example.com/hello/world'
            , 'http://example.com/foo/bar/', 'http://google.com', 'bing#bong'
            , '#omg'
          ]
      )
      t.end()
    }))
})
