define(['chai', 'fontDetect'], function(chai, fontDetect) {
  'use strict'
  var expect = chai.expect

  describe("fontDetect", function() {
    it("returns 'true' for a control font", function() {
      expect(fontDetect('serif')).to.eq(true)
    })

    it("returns 'true' for an installed font", function() {
      expect(fontDetect('Verdana')).to.eq(true)
    })

    it("returns 'false' for a non-installed font", function() {
      expect(fontDetect('NotAFont')).to.eq(false)
    })

    it("calls a callback async when it has been loaded if one is given", function(done) {
      fontDetect('Verdana', function() { done() })
    })
  })
})
