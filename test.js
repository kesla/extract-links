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
            , 'http://example.com/foo/bar/', 'http://google.com/', 'bing#bong'
            , '#omg'
          ]
      )
      t.end()
    }))
})

test('with base url', function (t) {
  fs.createReadStream(__dirname + '/test.html')
    .pipe(links('http://example.com', function (err, hrefs) {
      t.deepEqual(
          hrefs
        , [
              'http://example.com/beep/boop', 'http://example.com/foo/bar'
            , 'http://example.com/hello/world', 'http://example.com/foo/bar/'
            , 'http://google.com/', 'http://example.com/bing#bong', 'http://example.com/#omg'
          ]
      )
      t.end()
    }))
})

test('with ignored hashed and base url', function (t) {
  fs.createReadStream(__dirname + '/test.html')
    .pipe(links({ baseUri: 'http://example.com', ignoreHashes: true }, function (err, hrefs) {
      t.deepEqual(
          hrefs
        , [
              'http://example.com/beep/boop', 'http://example.com/foo/bar'
            , 'http://example.com/hello/world', 'http://example.com/foo/bar/'
            , 'http://google.com/', 'http://example.com/bing', 'http://example.com/'
          ]
      )
      t.end()
    }))
})

test('with ')
