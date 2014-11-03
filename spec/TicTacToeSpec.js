describe("Tic-Tac-Toe::", function() {

    beforeEach(function() {
        letsPlay();
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

    describe('count number of plays', function() {
        expect(game.numberOfPlays).toEqual(0);
    });

    describe('Check Rows function', function() {

        it('should initialliy return false if no winning squence', function() {
            expect(game.checkRows()).toBe(false);
        });

        xit('should return false if only one box is ticked', function() {
 
            expect(game.checkRows()).toBe(false);
        });

        xit('should return false if only two boxes are ticked', function() {
 
            expect(game.checkRows()).toBe(false);
        });

        xit('should return true if there is a winning squence', function() {

            expect(game.checkRows()).toBe(true);
        });
    });

});


