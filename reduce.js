function countWords(inputWords) {
  return inputWords.reduce(function(result, currentValue) {
    if (result[currentValue])
      result[currentValue]++
    else
      result[currentValue] = 1
    return result
  }, {})
}

module.exports = countWords

/*
  Official solution was much nicer:
  function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }

    module.exports = countWords
*/
