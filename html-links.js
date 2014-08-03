var url = require('url')

  , trumpet = require('trumpet')

  , htmlLinks = function (opts, callback) {

      if (typeof (opts) === 'string') {
        opts = { baseUri: opts }
      }

      if (!callback) {
        callback = opts
        opts = {}
      }

      var tr = trumpet()
        , hrefs = []

      tr.selectAll('a[href]', function (elm) {
        elm.getAttribute('href', function (href) {
          hrefs.push(href)
        })
      })

      tr.once('end', function () {
        hrefs = hrefs.map(url.format)

        if (opts.baseUri) {
          hrefs = hrefs.map(function (href) {
            return url.resolve(opts.baseUri, href)
          })
        }

        if (opts.ignoreHashes) {
          hrefs = hrefs.map(function (href) {
            return href.replace(/#.*/, '')
          })
        }

        callback(null, hrefs)
      })

      return tr
    }

module.exports = htmlLinks