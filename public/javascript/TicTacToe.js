"use strict";

var game;

(function() {

  $(document).ready(function() {

    game = new Game();

    $('.title').fadeIn(400, function() {
      $('.square').each(function(square) {
        $(this).delay(square * 200).fadeIn(220);
      });
    });

    $('.square').click(function(event) {
      var selectedSquare = $(this).prop('name');
      if (!game.gameOver() && game.emptySquare(selectedSquare)) {
        $(this).find('input').val(game.currentTurn);
        game.playTurn(selectedSquare);
      }
      if (game.gameOver()) {
        $('.new-game-button').fadeIn(220);
      }
      if (game.winningSequence) {
        $.each(game.winningSequence, function(index, squareIdentifier) {
          var square = document.getElementById(squareIdentifier);
          $(square).animate({ color: 'rgb(255, 255, 255)' }, 200);
        });
      }    
    });

    $('.new-game-button').click(function() {
      game = new Game();
      $('.square-input').add('.new-game-button').fadeOut(250, function() {
        $('.square-input').val('').show(function() {
            $('.square-input').css('color', 'rgb(0, 0, 1)');
        });   
      });     
    });
  });
})();