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
                $(this).find('input').val(game.currentTurn);
                // $(this).text(game.currentTurn);
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
        });

        // var button = document.createElement("button");
        // button.id = 'button';
        // button.innerHTML = "Do Something";

        // // 2. Append somewhere
        // var body = document.getElementsByTagName("body")[0];
        // body.appendChild(button);

        // // 3. Add event handler
        // button.addEventListener ("click", function() {
        //   alert("did something");
        // });

    });
})();

