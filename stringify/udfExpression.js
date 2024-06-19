var aliasExpression = require('./aliasExpression')
var isString = require('../util/isString')

/**
 * Stringify MAX expression
 *
 * @param {Object} json
 *
 * @returns {String} result
 */

function maxExpression(json, key) {
  var result = ''
  var UDF = json[key]

  if (isString(UDF)) {
    result = `${key}(${UDF})`
  } else {
    result = `${key}(${UDF.join(', ')})`
  }

  return result + aliasExpression(json)
}

module.exports = maxExpression
