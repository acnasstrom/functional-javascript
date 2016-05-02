module.exports = function(namespace) {
  // Since we're not using any scoped variables in the function, a reference to "this" is not needed (first argument)
  // Second (and any following) argument will be prepended to the console.log arguments
  return console.log.bind(undefined, namespace)
}
