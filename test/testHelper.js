module.exports = {

  squareValues: function() {
    var squareValues = 
      [
        '.input-0',
        '.input-1',
        '.input-2',
        '.input-3',
        '.input-4',
        '.input-5',
        '.input-6',
        '.input-7',
        '.input-8'
      ];
    return squareValues;
  },

  winGame: function(browser) {
    var winningSequence = 
      [
        '#square-one',
        '#square-two',
        '#square-three',
        '#square-four',
        '#square-five',
        '#square-six',
        '#square-seven'
      ];
    winningSequence.forEach(function(square) {
      browser.pressButton(square);
    });
  },

  fillGrid: function(browser) {
    var fillSequence = 
      [
        '#square-one',
        '#square-two',
        '#square-three',
        '#square-four',
        '#square-six',
        '#square-nine',
        '#square-five',
        '#square-seven',
        '#square-eight'
      ];
    fillSequence.forEach(function(square) {
      browser.pressButton(square);
    });
  }
}