var test = require('tape')

var minExpression = require('src/stringify/minExpression')

test('minExpression', function (t) {
  t.equal(minExpression({ MIN: 'num' }), 'MIN(num)', 'MIN(num)')

  t.end()
})
