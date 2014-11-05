describe("Tic-Tac-Toe::", function() {

    var game;

    beforeEach(function() {
        game = new Game;
    });

    describe('switch turns function', function() {
 
        it('should return \'O\' if previous turn was \'X\'', function() {
            game.currentTurn = 'X'
            expect(game.switchTurn()).toEqual('O');
        });
 
       it('should return \'X\' if previous turn was \'O\'', function() {
            game.currentTurn = 'O'
            expect(game.switchTurn()).toEqual('X');
        });
 
    });

    describe('number of moves count function', function() {

        it('should initially be set to 0', function() {
            expect(game.numberOfMoves).toBe(0);
        });

        it('should increment with each move', function() {
            game.registerMove(0);
            expect(game.numberOfMoves).toEqual(1);
        });

    });

    describe('make move function', function() {

        it('should register each move on the grid', function() {
            game.registerMove(0);
            expect(game.grid[0]).toBe(game.currentTurn);
        });
    });

    describe('register move function', function() {

        it('should register each move on the grid', function() {
            game.registerMove(0);
            expect(game.grid[0]).toBe(game.currentTurn);
        });
    });

    describe('found winning sequence function', function() {

        it('should initially return false (no winning squence)', function() {
            expect(game.foundWinningSequence()).toBe(false);
        });

        it('should return true if there is a winning sequence', function() {
           var sequences =  [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
            for (var i=0; i < sequences.length; i++) {
                game = new Game;
                for (var j=0; j < 3; j++) {
                    game.registerMove(sequences[i][j]);
                }
                expect(game.foundWinningSequence()).toBe(true);
            }
        });

        it('should register the winning sequence in the game\'s attributes if it finds one', function() {
            game.registerMove(0);
            game.registerMove(1);
            game.registerMove(2);
            game.foundWinningSequence();
            expect(game.winningSequence).toEqual([0, 1, 2]);
        });
    });

    describe('update game status function', function() {

        it('should initially return false (=game not over)', function() {
            expect(game.updateGameStatus()).toBe(false);
        });

        it('should return true if max number of moves have been registered', function() {
            for (var i=0; i < game.MAX_NUMBER_OF_MOVES; i++) {
                game.registerMove(i);
            }
            expect(game.updateGameStatus()).toBe(true);
        });        

        it('should return true if winning sequence is found', function() {
            var sequences =  [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
            for (var i=0; i < sequences.length; i++) {
                game = new Game;
                for (var j=0; j < 3; j++) {
                    game.registerMove(sequences[i][j]);
                }
                expect(game.updateGameStatus()).toBe(true);
            }
        }); 

        it('should return false if winning sequence is not found', function() {
            game.registerMove(0);
            game.registerMove(1);
            game.registerMove(3);
            expect(game.updateGameStatus()).toBe(false);
        }); 

    });

    describe('no available moves function', function() {

        it('should initially return false', function() {
            expect(game.noAvailableMoves()).toBe(false);
        });

        it('should return true if there are no more available moves', function() {
            game.numberOfMoves = 9;
            expect(game.noAvailableMoves()).toBe(true);
        });

    });

    describe('square empty function', function() {

        it('should return true if square is empty', function() {
            expect(game.squareEmpty(0)).toBe(true);
        });

        it('should return false if square is not empty', function() {
            game.registerMove(0);
            expect(game.squareEmpty(0)).toBe(false);
        });

    });

});


