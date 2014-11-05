
var Game = function() {
    this.grid = Array.apply(undefined, new Array(9));
    this.numberOfMoves = 0;
    this.currentTurn = this.getRandomTurn();
    this.winningSequence = undefined;
}

Game.prototype.MAX_NUMBER_OF_MOVES = 9;

Game.prototype.getRandomTurn = function() {
    return ['X', 'O'][Math.floor(Math.random() * ['X', 'O'].length)];
};

Game.prototype.playTurn = function(squareIdentifier) {
	this.numberOfMoves += 1;
	this.registerMove(squareIdentifier);
	this.switchTurn();
};

Game.prototype.registerMove = function(squareIdentifier) {
    this.grid[squareIdentifier] = this.currentTurn;
};

Game.prototype.switchTurn = function() {
    return this.currentTurn === 'O' ? this.currentTurn = 'X' : this.currentTurn = 'O';
};

Game.prototype.gameOver = function() {
    return this.foundWinningSequence() || this.noAvailableMoves();
};

Game.prototype.foundWinningSequence = function() {
    var sequences = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (var i = 0; i < sequences.length; i++) {
        var squenceValues = (this.grid[sequences[i][0]]) + (this.grid[sequences[i][1]]) + (this.grid[sequences[i][2]]);
        if ((squenceValues === 'XXX') || (squenceValues === 'OOO')) {
            this.winningSequence = sequences[i];
        }
    }
    return this.winningSequence;
};

Game.prototype.noAvailableMoves = function() {
    return this.numberOfMoves === this.MAX_NUMBER_OF_MOVES;
};

Game.prototype.emptySquare = function(squareIdentifier) {
    return this.grid[squareIdentifier] === undefined;
};


