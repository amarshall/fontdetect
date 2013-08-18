/**
 * FontRuler
 * Copyright (c) 2013 J. Andrew Marshall <http://johnandrewmarshall.com/>
 * Licensed under the MIT License
 *
 * Based on Web Font Loader's FontRuler
 * <https://github.com/typekit/webfontloader>
 * Licensed under the Apache License 2.0
 */

;(function(factory) {
  'use strict'
  var hasAMD = function() { return typeof define === 'function' && define.amd; }
  hasAMD() ? define([], factory) : root.FontRuler = factory()
})(function() {
  'use strict'

  var createTestElement = function createTestElement(text) {
    var el = document.createElement('span')
    el.setAttribute('aria-hidden', 'true')
    el.innerHTML = text
    el.style.fontSize = '300px'
    el.style.fontVariant = 'normal'
    el.style.height = 'auto'
    el.style.left = '-999px'
    el.style.lineHeight = 'normal'
    el.style.margin = '0'
    el.style.padding = '0'
    el.style.position = 'absolute'
    el.style.top = '-999px'
    el.style.whiteSpace = 'nowrap'
    el.style.width = 'auto'

    return el
  };

  var FontRuler = function FontRuler() {
    if(typeof(document) === 'undefined' || document.body === null) {
      throw new Error('No document body')
    }
    var testString = 'BESbswy'
    this.el = createTestElement(testString)
  }

  FontRuler.prototype.width = function width(fontName) {
    this.el.style.fontFamily = fontName
    document.body.appendChild(this.el)
    var w = this.el.offsetWidth
    document.body.removeChild(this.el)

    return w
  };

  return FontRuler
});
