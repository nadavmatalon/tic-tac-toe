(function() {

    $(document).ready(function() {

        var game = new Game();

        $('.title').fadeIn(400, function() {
            $('.square').each(function(square) {
                $(this).delay(square * 200).fadeIn(220);
            });
        });
        
        $('.square').on('click', function() {
            var selectedSquare = $(this).data('pick');
            if (!game.gameOver() && game.emptySquare(selectedSquare)) {
                game.playTurn(selectedSquare);
                $(this).find('input').val(game.currentTurn);
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

        $('.new-game-button').on('click', function() {
            var squares = ['#0', '#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8'];
            $.each(squares.concat(['.new-game-button']), function(index, squareValue) {
                $(squareValue).fadeOut(250, function() {
                    $.each(squares, function(index, square) {
                        $(square).val('').show(function() {
                            $('.square').children().css('color', 'rgb(0, 0, 0');
                        });
                    });
                });
            });
        
            game = new Game();
        });
    });
})();