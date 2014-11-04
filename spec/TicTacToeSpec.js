describe("Tic-Tac-Toe::", function() {

    var game;

    beforeEach(function() {
        game = new Game;
    });

    describe('switch turns', function() {
 
        it('should return O if previous turn was X', function() {
            game.currentTurn = 'X'
            expect(game.setCurrentTurn()).toEqual('O');
        });
 
       it('should return X if previous turn was O', function() {
            game.currentTurn = 'O'
            expect(game.setCurrentTurn()).toEqual('X');
        });
 
    });


   describe('can check if game is over', function() {

        it('initially game should not be over', function() {
            expect(game.checkGameOver()).toBe(false);
        });

    });

    describe('Play counter', function() {

        it('initially has 0 plays', function() {
            expect(game.numberOfPlays).toEqual(0);
        });

        it('can increment moves', function() {
            game.incrementNunberOfPlays();
            expect(game.numberOfPlays).toEqual(1);
        });

    });

    describe('Check function', function() {

        it('should initialliy return false if no winning squence', function() {
            expect(game.check([game.boxOne, game.boxTwo, game.boxThree])).toBe(false);
        });

        it('should return false if only one box is ticked', function() {
            game.boxOne = 'X';
            expect(game.check([game.boxOne, game.boxTwo, game.boxThree])).toBe(false);
        });

        it('should return false if only two boxes are ticked', function() {
            game.boxOne = 'X';
            game.boxTwo = 'X';
            expect(game.check([game.boxOne, game.boxTwo, game.boxThree])).toBe(false);
        });

        it('should return true if there is a winning squence', function() {
            game.boxOne = 'X';
            game.boxTwo = 'X';
            game.boxThree = 'X';
            expect(game.check([game.boxOne, game.boxTwo, game.boxThree])).toBe(true);
        });
    });

});


