
$(document).ready(function() {
    game = new Game;
    game.setupGame();
    $('.square').on('click', function() {
        game.playTurn($(this).data('pick'));
        game.updateGameParameters();
    });
    $('.new-game-button').on('click', function() {   
        game.resetSquaresParameters();
        game = new Game;
    });
});

function Game() {
    this.grid = Array.apply(undefined, new Array(9));
    this.numberOfMoves = 0;
    this.currentTurn = this.getRandomTurn();
    this.winningSequence = undefined;
};

Game.prototype.MAX_NUMBER_OF_MOVES = 9;

Game.prototype.setupGame = function() {
    $('.title').fadeIn(400, function() {
        $('.square').each(function(square) {
            $(this).delay(square*200).fadeIn(220);
        });
    });
};

Game.prototype.getRandomTurn = function() {
    return ['X', 'O'][Math.floor(Math.random()*['X', 'O'].length)]; 
};

Game.prototype.playTurn = function(squareIdentifier) {
    if (!this.gameOver() && this.emptySquare(squareIdentifier)) {
        this.numberOfMoves += 1;
        this.registerMove(squareIdentifier);
        this.updateGridDisplay(squareIdentifier);
    }
};

Game.prototype.registerMove = function(squareIdentifier) {
    this.grid[squareIdentifier] = this.currentTurn;
};

Game.prototype.updateGridDisplay = function(squareIdentifier) {
        $('#'+squareIdentifier).val(this.currentTurn);
};

Game.prototype.updateGameParameters = function() {   
    if (this.gameOver()) {
        this.markWinningSequence(this.winningSequence);
        this.showNewGameButton();
    } else {
        this.switchTurn();
    }
};

Game.prototype.gameOver = function() {
    return this.foundWinningSequence() || this.noAvailableMoves();
};

Game.prototype.foundWinningSequence = function() {
    var sequences =  [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i=0; i < sequences.length; i++) {
        var squenceValues = (this.grid[sequences[i][0]]) + (this.grid[sequences[i][1]]) + (this.grid[sequences[i][2]]);
        if ((squenceValues == 'XXX') || (squenceValues == 'OOO')) { this.winningSequence = sequences[i]; }
    }
    return this.winningSequence != undefined;
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

Game.prototype.emptySquare = function (squareIdentifier) {
    return this.grid[squareIdentifier] == undefined;
};

Game.prototype.switchTurn = function() {
    return this.currentTurn == 'O' ? this.currentTurn = 'X' : this.currentTurn = 'O';
};

Game.prototype.resetSquaresParameters = function() {
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
};

