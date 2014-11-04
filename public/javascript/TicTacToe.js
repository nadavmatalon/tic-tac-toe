
$(document).ready(function() {
    letsPlay();
});

function letsPlay() {
    game = new Game;
    game.setupGame();
    game.playGame();
    game.newGame();
};

function Game() {
    this.grid = Array.apply(undefined, new Array(9));
    this.numberOfMoves = 0;
    this.currentTurn = this.setRandomFirstTurn();
    this.winningSequence = null;
    this.gameOver = false;
};

Game.prototype.MAX_NUMBER_OF_MOVES = 9;

Game.prototype.setupGame = function() {
    $('.title').fadeIn(400, function() {
        $('.square').each(function(square) {
            $(this).delay(square*200).fadeIn(220);
        });
    });
};

Game.prototype.playGame = function() {
    $('.square').on('click', function() {
        var squareIdentifier = $(this).data('pick');
        if (!game.gameOver && game.squareEmpty(squareIdentifier)) {
            game.numberOfMoves += 1;
            game.grid[squareIdentifier] = game.currentTurn;
            $(this).find(':first-child').val(game.currentTurn);
            game.gameOver = game.checkGameOver();
        }
    });
};

Game.prototype.setRandomFirstTurn = function() {
    return ['X', 'O'][Math.floor(Math.random()*['X', 'O'].length)]; 
};

Game.prototype.checkGameOver = function() {   
    if (this.foundWinningSequence() || this.noAvailableMoves()) {
        this.markWinningSequence(this.winningSequence);
        this.showNewGameButton();
        return true;
    } else {
        game.switchTurn();
        return false;
    }
};

Game.prototype.foundWinningSequence = function() {
    var sequences =  [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    $.each(sequences, function(index, sequence) {
        var squenceValues = sequences[index].map( function(identifier) { return game.grid[identifier]; }).join('');
        if ($.inArray(squenceValues, ['XXX', 'OOO']) > -1) { game.winningSequence = sequences[index]; }
    });
    return game.winningSequence != null;
};

Game.prototype.markWinningSequence = function(squareIdentifiers) {
    if (this.winningSequence) {
        $.each(squareIdentifiers, function(index, squareIdentifier) {
            square = document.getElementById(squareIdentifier);
            $(square).animate({ color: 'rgb(255, 255, 255)' }, 200);
        });
    }
};

Game.prototype.noAvailableMoves = function() {
    return this.numberOfMoves === game.MAX_NUMBER_OF_MOVES;
};

Game.prototype.showNewGameButton = function() {
    $('.new-game-button').fadeIn(220);
};

Game.prototype.squareEmpty = function (squareIdentifier) {
    return this.grid[squareIdentifier] == null;
};

Game.prototype.switchTurn = function() {
    return this.currentTurn == 'O' ? this.currentTurn = 'X' : this.currentTurn = 'O';
};

Game.prototype.newGame = function() {
    $('.new-game-button').on('click', function() {
        game.resetSquaresParameters();
        game = new Game();
    });
};

Game.prototype.resetSquaresParameters = function() {
    var squares = ['#0', '#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8'];
    $.each(squares.concat(['.new-game-button']), function(index, boxValue) {
        $(boxValue).fadeOut(250, function() {
            $.each(squares, function(index, square) {
                $(square).val('').show(function() {
                    $('.square').children().css('color', 'rgb(0, 0, 0');
                });
            });
        });
    });
};

