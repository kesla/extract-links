var stream = new require('stream').PassThrough

  , extractLinks = require('./extract-links')(function (err, links) {
    console.log('links', links)
  })

extractLinks.write('<a href="relative">Relative link!</a>')
extractLinks.write('<a href="http://yahoo.com">Absolute link!</a>')
extractLinks.write('<a>empty</a>')
extractLinks.write('<a href="mailto:mail@also.works">Mail me</a>')
extractLinks.end()