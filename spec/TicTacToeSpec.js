describe("Tic-Tac-Toe::", function() {


    beforeEach(function() {
        letsPlay();
    });

    describe('current turn', function() {

        it('should initialliy be set to X', function() {
            game.currentTurn = game.setCurrentTurn();
            expect(game.currentTurn).toBe('X');
        });
    });

    describe('switch turn again', function() {
        it('should return X if previous turn was O', function() {
            game.currentTurn = game.setCurrentTurn();
            game.currentTurn = game.setCurrentTurn();
            expect(game.setCurrentTurn()).toEqual('X');
        });
    });
 

   describe('Check Rows function', function() {

        it('should initialliy return false if no winning squence', function() {
            expect(game.checkRows()).toBe(false);
        });

       it('should return false if only one box is ticked', function() {
            expect(game.checkRows()).toBe(false);
        });

      it('should return false if only two boxes are ticked', function() {
            expect(game.checkRows()).toBe(false);
        });

       it('should return true if there is a winning squence', function() {

            expect(game.checkRows()).toBe(true);
        });
    });

});


