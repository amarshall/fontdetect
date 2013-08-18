(function() {
  // var tests = window.__karma__.files.filter(function(file) {
    // return window.__karma__.files.hasOwnProperty(file)
  // }).filter(function(file) {
    // return /Spec\.js$/.test(file)
  // })
  var tests = []
  for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
      if (/_spec\.js$/.test(file)) {
        tests.push(file);
      }
    }
  }

  requirejs.config({
    baseUrl: '/base/lib',
    paths: {
      chai: '../node_modules/chai/chai',
    },
    deps: tests,
    callback: window.__karma__.start,
  })
})()
