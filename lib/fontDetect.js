;(function(root, factory) {
  'use strict'
  var hasAMD = function() { return typeof define === 'function' && define.amd; }
  hasAMD() ? define(['FontRuler'], factory) : root.fontDetect = factory()
})(this, function(FontRuler) {
  'use strict'

  var ruler = new FontRuler()

  var controls = function() {
    var controlFonts = ['serif', 'sans-serif', 'monospace']
    return controlFonts.map(function(fontName) {
      return [fontName, ruler.width(fontName)]
    })
  }()

  var testFont = function(fontName) {
    return controls.some(function(control) {
      var controlFontName = control[0]
      var controlFontWidth = control[1]
      var fontNameWithFallback = fontName + ', ' + controlFontName
      var width = ruler.width(fontNameWithFallback)

      return width !== controlFontWidth
    })
  }

  var fontDetectAsync = function fontDetectAsync(fontName, callback) {
    var fontExists = testFont(fontName)
    var callAgain = function() { fontDetect(fontName, callback) }
    fontExists ? callback() : setTimeout(callback, 50)
    return fontExists
  }

  var fontDetect = function fontDetect(fontName, callback) {
    var fontExists = testFont(fontName)
    if(callback) { fontDetectAsync(fontName, callback) }
    return fontExists
  }

  return fontDetect
});
