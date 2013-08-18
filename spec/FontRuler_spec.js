define(['chai', 'FontRuler'], function(chai, FontRuler) {
  'use strict'
  var expect = chai.expect

  describe("FontRuler", function() {
    it("gives different widths for different fonts", function() {
      var ruler = new FontRuler()
      var width1 = ruler.width('serif')
      var width2 = ruler.width('sans-serif')

      expect(width1).to.not.eq(width2)
    })

    it("gives the same width for the same font", function() {
      var ruler = new FontRuler()
      var width1 = ruler.width('serif')
      var width2 = ruler.width('serif')

      expect(width1).to.eq(width2)
    })

    it("gives a number", function() {
      var ruler = new FontRuler()
      var width = ruler.width('serif')

      expect(width).to.be.a('Number')
    })
  })
})
