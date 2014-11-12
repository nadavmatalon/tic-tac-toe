
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
    this.registerMove(squareIdentifier);
    this.checkWinningSequence();
    this.switchTurn();
};

Game.prototype.registerMove = function(squareIdentifier) {
    this.numberOfMoves += 1;
    this.grid[squareIdentifier] = this.currentTurn;
};

Game.prototype.switchTurn = function() {
    this.currentTurn === 'O' ? this.currentTurn = 'X' : this.currentTurn = 'O';
};

Game.prototype.gameOver = function() {
    return this.winningSequence !== undefined || this.noAvailableMoves();
};

Game.prototype.checkWinningSequence = function() {
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
        var sequenceValues = (this.grid[sequences[i][0]]) + (this.grid[sequences[i][1]]) + (this.grid[sequences[i][2]]);
        if ((sequenceValues === 'XXX') || (sequenceValues === 'OOO')) {
            this.winningSequence = sequences[i];
        }
    }
};

Game.prototype.noAvailableMoves = function() {
    return this.numberOfMoves === this.MAX_NUMBER_OF_MOVES;
};

Game.prototype.emptySquare = function(squareIdentifier) {
    return this.grid[squareIdentifier] === undefined;
};

