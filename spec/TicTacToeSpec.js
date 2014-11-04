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

    describe('move count function', function() {

        it('should initially be set to 0', function() {
            expect(game.numberOfMoves).toBe(0);
        });

        it('should increment with each move', function() {
            game.registerMove(0);
            expect(game.numberOfMoves).toEqual(1);
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

        it('should return the winning sequence if there is one', function() {
            game.registerMove(0);
            game.registerMove(1);
            game.registerMove(2);
            expect(game.foundWinningSequence()).toBe(true);
        });
    });

    describe('check game over function', function() {

        it('should initially return false', function() {
            expect(game.checkGameOver()).toBe(false);
        });

        it('should return true if max number of moves where made', function() {
            for (var i=0; i < game.MAX_NUMBER_OF_MOVES; i++) {
                game.registerMove(i);
            }
            expect(game.checkGameOver()).toBe(true);
        });        

        it('should return true if winning sequence was found', function() {
            game.registerMove(0);
            game.registerMove(1);
            game.registerMove(2);
            expect(game.checkGameOver()).toBe(true);
        }); 

        it('should return false if winning sequence is not found', function() {
            game.registerMove(0);
            game.registerMove(1);
            game.registerMove(3);
            expect(game.checkGameOver()).toBe(false);
        }); 

    });

});


