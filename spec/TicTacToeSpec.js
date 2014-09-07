describe("Tic-Tac-Toe::", function() {

    var game;

    beforeEach(function() {
        game = new Game();
    });

    describe('Check Row function', function() {

        it('should initialliy return false (no winning squence)', function() {
            expect(game.checkFirstRow()).toBe(false);
            expect(game.checkSecondRow()).toBe(false);
            expect(game.checkThirdRow()).toBe(false);
        });

        it('should return false if only one box is ticked', function() {
            game.boxOne = 'X';
            game.boxFour = 'X';
            game.boxSeven = 'X';
            expect(game.checkFirstRow()).toBe(false);
            expect(game.checkSecondRow()).toBe(false);
            expect(game.checkThirdRow()).toBe(false);
        });

        it('should return false if only two boxes are ticked', function() {
            game.boxOne = 'X';
            game.boxTwo = 'X';
            game.boxFour = 'X';
            game.boxFive = 'X';
            game.boxSeven = 'X';
            game.boxEight = 'X';
            expect(game.checkFirstRow()).toBe(false);
            expect(game.checkSecondRow()).toBe(false);
            expect(game.checkThirdRow()).toBe(false);
        });

        it('should return false if three boxes are ticked but with different signs', function() {
            game.boxOne = 'X';
            game.boxTwo = 'X';
            game.boxThree = 'O';
            game.boxFour = 'X';
            game.boxFive = 'X';
            game.boxSix = 'O';
            game.boxSeven = 'X';
            game.boxEight = 'X';
            game.boxNine = 'O';
            expect(game.checkFirstRow()).toBe(false);
            expect(game.checkSecondRow()).toBe(false);
            expect(game.checkThirdRow()).toBe(false);
        });

        it('should return true if three boxes are ticked with same sign', function() {
            game.boxOne = 'X';
            game.boxTwo = 'X';
            game.boxThree = 'X';
            game.boxFour = 'X';
            game.boxFive = 'X';
            game.boxSix = 'X';
            game.boxSeven = 'X';
            game.boxEight = 'X';
            game.boxNine = 'X';
            expect(game.checkFirstRow()).toBe(true);
            expect(game.checkSecondRow()).toBe(true);
            expect(game.checkThirdRow()).toBe(true);
        });
    });

    describe('Check Rows function', function() {

        it('should initialliy return false if no winning squence', function() {
            expect(game.checkRows()).toBe(false);
        });

       it('should return true if there is a winning squence', function() {
            game.boxOne = 'X';
            game.boxTwo = 'X';
            game.boxThree = 'X';
            expect(game.checkRows()).toBe(true);
        });
    });

    describe('Check Column function', function() {

        it('should initialliy return false (no winning squence)', function() {
            expect(game.checkFirstColumn()).toBe(false);
            expect(game.checkSecondColumn()).toBe(false);
            expect(game.checkThirdColumn()).toBe(false);
        });

        it('should return false if only one box is ticked', function() {
            game.boxOne = 'X';
            game.Two = 'X';
            game.boxThree = 'X';
            expect(game.checkFirstColumn()).toBe(false);
            expect(game.checkSecondColumn()).toBe(false);
            expect(game.checkThirdColumn()).toBe(false);
         });

        it('should return false if only two boxes are ticked', function() {
            game.boxOne = 'X';
            game.boxFour = 'X';
            game.boxTwo = 'X';
            game.boxFive = 'X';
            game.boxThree = 'X';
            game.boxSix = 'X';
            expect(game.checkFirstColumn()).toBe(false);
            expect(game.checkSecondColumn()).toBe(false);
            expect(game.checkThirdColumn()).toBe(false);
        });

        it('should return false if three boxes are ticked but with different signs', function() {
            game.boxOne = 'X';
            game.boxFour = 'X';
            game.boxSeven = 'O';
            game.boxTwo = 'X';
            game.boxFive = 'X';
            game.boxEight = 'O';
            game.boxThree = 'X';
            game.boxSix = 'X';
            game.boxNine = 'O';
            expect(game.checkFirstColumn()).toBe(false);
            expect(game.checkSecondColumn()).toBe(false);
            expect(game.checkThirdColumn()).toBe(false);
        });

        it('should return true if three boxes are ticked with same sign', function() {
            game.boxOne = 'X';
            game.boxFour = 'X';
            game.boxSeven = 'X';
            game.boxTwo = 'X';
            game.boxFive = 'X';
            game.boxEight = 'X';
            game.boxThree = 'X';
            game.boxSix = 'X';
            game.boxNine = 'X';
            expect(game.checkFirstColumn()).toBe(true);
            expect(game.checkSecondColumn()).toBe(true);
            expect(game.checkThirdColumn()).toBe(true);
        });
    });

    describe('Check Columns function', function() {

        it('should initialliy return false (no winning squence)', function() {
            expect(game.checkColumns()).toBe(false);
        });

        it('should return true if there is a winning squence', function() {
            game.boxOne = 'X';
            game.boxFour = 'X';
            game.boxSeven = 'X';
            expect(game.checkColumns()).toBe(true);
        });
    });

    describe('Check Diagonal', function() {

        it('should initialliy return false (no winning squence)', function() {
            expect(game.checkFirstDiagonal()).toBe(false);
            expect(game.checkSecondDiagonal()).toBe(false);
        });

        it('should return false if only one box is ticked', function() {
            game.boxFive = 'X';
            expect(game.checkFirstDiagonal()).toBe(false);
            expect(game.checkSecondDiagonal()).toBe(false);
         });

        it('should return false if only two boxes are ticked', function() {
            game.boxOne = 'X';
            game.boxThree = 'X';
            game.boxFive = 'X';
            expect(game.checkFirstDiagonal()).toBe(false);
            expect(game.checkSecondDiagonal()).toBe(false);
        });

        it('should return false if three boxes are ticked but with different signs', function() {
            game.boxOne = 'X';
            game.boxThree = 'X';
            game.boxFive = 'X';
            game.boxSeven = 'O';
            game.boxNine = 'O';
            expect(game.checkFirstDiagonal()).toBe(false);
            expect(game.checkSecondDiagonal()).toBe(false);
       });

        it('should return true if three boxes are ticked with same sign', function() {
            game.boxOne = 'X';
            game.boxThree = 'X';
            game.boxFive = 'X';
            game.boxSeven = 'X';
            game.boxNine = 'X';
            expect(game.checkFirstDiagonal()).toBe(true);
            expect(game.checkSecondDiagonal()).toBe(true);
        });
    });

    describe('Check Diagonals', function() {

        it('should initialliy return false (no winning squence)', function() {
            expect(game.checkDiagonals()).toBe(false);
        });

        it('should return true if there is a winning squence', function() {
            game.boxOne = 'X';
            game.boxFive = 'X';
            game.boxNine = 'X';
            expect(game.checkDiagonals()).toBe(true);
        });
    });

   describe('Check Winner function', function() {

        it('should initialliy return false (no winner)', function() {
            expect(game.checkWinner()).toBe(false);
        });

        it('should return true if there is a winning squence', function() {
            game.boxOne = 'X';
            game.boxFive = 'X';
            game.boxNine = 'X';
            expect(game.checkWinner()).toBe(true);
        });

       it('should return false if less than nine plays have been made', function() {
            game.numberOfPlays = 8;
            expect(game.checkWinner()).toBe(false);
        });

        it('should return true if nine plays have been made', function() {
            game.numberOfPlays = 9;
            expect(game.checkWinner()).toBe(true);
        });
    });

    describe('current turn', function() {

        it('should initialliy be set to X', function() {
            game.currentTurn = game.setCurrentTurn();
            expect(game.currentTurn).toBe('X');
        });
    });

    describe('switch turn', function() {

        it('should return O if previous turn was X', function() {
            game.currentTurn = game.setCurrentTurn();
            expect(game.currentTurn).toBe('O');
        });
    });

    describe('switch turn again', function() {
        it('should return X if previous turn was O', function() {
            game.currentTurn = game.setCurrentTurn();
            game.currentTurn = game.setCurrentTurn();
            expect(game.setCurrentTurn()).toEqual('X');
        });
    });
    
});

