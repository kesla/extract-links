var url = require('url')

  , trumpet = require('trumpet')

  , extractLinks = function (callback) {

      var tr = trumpet()
        , hrefs = []

      tr.selectAll('a[href]', function (elm) {
        elm.getAttribute('href', function (href) {
          hrefs.push(href)
        })
      })

      tr.once('end', function () {
        callback(null, hrefs)
      })

      return tr
    }

module.exports = extractLinks