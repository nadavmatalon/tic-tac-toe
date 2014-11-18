describe("Tic-Tac-Toe::", function() {

var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('game parameters', function() {

    it('grid shoud contain nine \'undefined\' placeholders', function() {
      expect(game.grid).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
    });

    it('winning sequence parameter should initially be \'undefined\'', function() {
      expect(game.winningSequence).toBe(undefined);
    });

    it('winning sequence parameter should contain square identifiers if there is one', function() {
      [0, 1, 2].forEach(function(move) {
        game.registerMove(move);
      });
      game.checkWinningSequence();
      expect(game.winningSequence).toEqual([0, 1, 2]);
    });
  });

  describe('switch turns function', function() {

    it('should set current turn to \'O\' if previous turn was \'X\'', function() {
      game.currentTurn = 'X'
      game.switchTurn();
      expect(game.currentTurn).toEqual('O');
    });

    it('should set current turn to \'X\' if previous turn was \'O\'', function() {
      game.currentTurn = 'O'
      game.switchTurn();
      expect(game.currentTurn).toEqual('X');
    });
  });

  describe('number of moves count', function() {

    it('should initially be set to 0', function() {
      expect(game.numberOfMoves).toBe(0);
    });

    it('should increment with each turn', function() {
      game.playTurn(0);
      expect(game.numberOfMoves).toEqual(1);
    });
  });

  describe('register move function', function() {

    it('should register each move in the grid\'s array', function() {
      game.registerMove(0);
      expect(game.grid[0]).toBe(game.currentTurn);
      expect(game.numberOfMoves).toEqual(1);
    });
  });

  describe('check winning sequence function', function() {

    it('should record winning sequence if there is one', function() {
      var sequences =  [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
      for (var valueSet = 0; valueSet < sequences.length; valueSet++) {
        game = new Game;
        for (var value = 0; value < 3; value++) {
          game.registerMove(sequences[valueSet][value]);
          game.checkWinningSequence();
        }
        expect(game.winningSequence).toEqual(sequences[valueSet]);
      }
    });
  });

  describe('game over function', function() {

    it('should initially return false', function() {
      expect(game.gameOver()).toBe(false);
    });

    it('should return false if there\'s no winning sequence', function() {
      [0, 1, 2].forEach(function(move) {
        game.registerMove(move);
      });
      expect(game.gameOver()).toBe(false);
    }); 

    it('should return true if max number of moves have been made', function() {
      for (var move = 0; move < game.MAX_NUMBER_OF_MOVES; move++) {
        game.registerMove(move);
      }
      expect(game.gameOver()).toBe(true);
    });        

    it('should return true if winning sequence was recorded', function() {
      var sequences =  [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
      for (var valueSet = 0; valueSet < sequences.length; valueSet++) {
        game = new Game;
        for (var value = 0; value < 3; value++) {
          game.registerMove(sequences[valueSet][value]);
          game.checkWinningSequence();
        }
        expect(game.gameOver()).toBe(true);
      }
    }); 
  });

  describe('no available moves function', function() {

    it('should initially return false', function() {
      expect(game.noAvailableMoves()).toBe(false);
    });

    it('should return false if less than the max number of moves were made', function() {
      game.numberOfMoves = 8;
      expect(game.noAvailableMoves()).toBe(false);
    });

    it('should return true if max number of moves were made', function() {
      game.numberOfMoves = 9;
        expect(game.noAvailableMoves()).toBe(true);
      });
    });

  describe('empty square function', function() {

    it('should return true if square is empty', function() {
      expect(game.emptySquare(0)).toBe(true);
    });

    it('should return false if square is not empty', function() {
      game.registerMove(0);
      expect(game.emptySquare(0)).toBe(false);
    });
  });
});
