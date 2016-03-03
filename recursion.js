/*
 * arr:   An Array to reduce over
 * fn:    Function to use as the reduction step. Like regular Array#reduce,
 *        this function must be passed previousValue, currentValue, index and the array we're iterating over.
 * init:  Initial value of the reduction. Unlike Array#reduce, this value is required
 *        (and you may assume it will always be supplied).
 */
function reduce(arr, fn, init) {
  function processElement(result, index) {
    if (index > arr.length -1) return result

    return processElement(fn(result, arr[index], index, arr), index + 1)
  }

  return processElement(init, 0);
}

module.exports = reduce
