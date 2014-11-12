(function() {

    $(document).ready(function() {

        game = new Game();

        $('.title').fadeIn(400, function() {
            $('.square').each(function(square) {
                $(this).delay(square * 200).fadeIn(220);
            });
        });
        
        $('.square').on('click', function() {
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

        $('.new-game-button').on('click', function() {
            game = new Game();
            var squareValues = ['#0', '#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8'];
            $.each(squareValues.concat(['.new-game-button']), function(index, squareValue) {
                $(squareValue).fadeOut(250, function() {
                    $.each(squareValues, function(index, squareValue) {
                        $(squareValue).val('').show(function() {
                            $('.square').children().css('color', 'rgb(0, 0, 0');
                        });
                    });
                });
            });     
        });
    });
})();

