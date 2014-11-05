
$(document).ready(function() {
    game = new Game;
    game.setupGame();
    $('.square').on('click', function() {
        game.playTurn($(this).data('pick'));
        game.updateGameStatus();
    });
    $('.new-game-button').on('click', function() {   
        game.resetSquaresParameters();
        game = new Game;
    });
});

function Game() {
    this.grid = Array.apply(null, new Array(9));
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

Game.prototype.setRandomFirstTurn = function() {
    return ['X', 'O'][Math.floor(Math.random()*['X', 'O'].length)]; 
};

Game.prototype.playTurn = function(squareIdentifier) {
    if (!this.gameOver && this.squareEmpty(squareIdentifier)) {
        this.registerMove(squareIdentifier);
        $('#'+squareIdentifier).val(this.currentTurn);
    }
};

Game.prototype.registerMove = function(squareIdentifier) {
    this.grid[squareIdentifier] = this.currentTurn;
    this.numberOfMoves += 1;
}

Game.prototype.updateGameStatus = function() {   
    if (this.foundWinningSequence() || this.noAvailableMoves()) {
        this.markWinningSequence(this.winningSequence);
        this.showNewGameButton();
        return this.gameOver = true;
    } else {
        this.switchTurn();
        return this.gameOver = false;
    }
};

Game.prototype.foundWinningSequence = function() {
    var sequences =  [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i=0; i < sequences.length; i++) {
        var squenceValues = (this.grid[sequences[i][0]]) + (this.grid[sequences[i][1]]) + (this.grid[sequences[i][2]]);
        if ((squenceValues == 'XXX') || (squenceValues == 'OOO')) {
            this.winningSequence = sequences[i];
        }
    }
    return this.winningSequence != null;
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

