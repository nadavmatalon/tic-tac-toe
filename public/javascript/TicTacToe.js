
function letsPlay() {
    $(document).ready(function() {
        game = new Game;
        game.setUp();
        game.play();
        game.newGame();
    });
};

function Game() {

};

Game.prototype.currentTurn = 'O';
Game.prototype.gameOver = false;
Game.prototype.numberOfPlays = 0;

Game.prototype.boxOne = '';
Game.prototype.boxTwo = '';
Game.prototype.boxThree = '';
Game.prototype.boxFour = '';
Game.prototype.boxFive = '';
Game.prototype.boxSix = '';
Game.prototype.boxSeven = '';
Game.prototype.boxEight = '';
Game.prototype.boxNine = '';

Game.prototype.setUp = function() {
    $('.title').fadeIn(400, function() {
        $('.button').each(function(i) {
            $(this).delay(i*200).fadeIn(220);
        });
    });
};

Game.prototype.play = function() {
    $('.button').on('click', function() {
        if (!game.gameOver) {
            if ($(this).find(':first-child').val() === '') {
                game.currentTurn = game.setCurrentTurn();
                $(this).find(':first-child').val(game.currentTurn);                
                game.boxOne = $("#box-one").val();
                game.boxTwo = $("#box-two").val();
                game.boxThree = $("#box-three").val();
                game.boxFour = $("#box-four").val();
                game.boxFive = $("#box-five").val();
                game.boxSix = $("#box-six").val();
                game.boxSeven = $("#box-seven").val();
                game.boxEight = $("#box-eight").val();
                game.boxNine = $("#box-nine").val();
                game.numberOfPlays += 1;
                game.gameOver = game.checkWinner();
                if (game.gameOver) console.log("game over");
            };
        };
    });
};

Game.prototype.setCurrentTurn = function() {
    return (game.currentTurn === 'O') ? (game.currentTurn = 'X') : (game.currentTurn = 'O');
 };

Game.prototype.checkWinner = function() {   
    if (((this.checkRows() || this.checkColumns()) || this.checkDiagonals()) || (this.numberOfPlays === 9)) {
        $('.new-game-button').fadeIn(220);
        return true;
    } else {
        return false;
    };
};

Game.prototype.checkRows = function() {   
    return ((this.checkFirstRow() || this.checkSecondRow()) || this.checkThirdRow());
};

Game.prototype.checkFirstRow = function() {
    if (((this.boxOne === 'X') && (this.boxTwo === 'X') && (this.boxThree === 'X')) ||
       ((this.boxOne === 'O') && (this.boxTwo === 'O') && (this.boxThree === 'O'))) {
        $.each(['#box-one', '#box-two', '#box-three'], function(i, el) {
            $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
        });
        return true
    } else {
        return false
    };
};

Game.prototype.checkSecondRow = function() {
  if (((this.boxFour === 'X') && (this.boxFive === 'X') && (this.boxSix === 'X')) || 
      ((this.boxFour === 'O') && (this.boxFive === 'O') && (this.boxSix === 'O'))) {
        $.each(['#box-four', '#box-five', '#box-six'], function(i, el) {
            $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
        });
        return true
    } else {
        return false
    };
};

Game.prototype.checkThirdRow = function() {
    if (((this.boxSeven === 'X') && (this.boxEight === 'X') && (this.boxNine === 'X')) || 
       ((this.boxSeven === 'O') && (this.boxEight === 'O') && (this.boxNine === 'O'))) {
        $.each(['#box-seven', '#box-eight', '#box-nine'], function(i, el) {
            $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
        });
        return true
    } else {
        return false
    };
};

Game.prototype.checkColumns = function() {   
    return ((this.checkFirstColumn() || this.checkSecondColumn()) || this.checkThirdColumn());
};

Game.prototype.checkFirstColumn = function() {
   if (((this.boxOne === 'X') && (this.boxFour === 'X') && (this.boxSeven === 'X')) ||
       ((this.boxOne === 'O') && (this.boxFour === 'O') && (this.boxSeven === 'O'))) {
         $.each(['#box-one', '#box-four', '#box-seven'], function(i, el) {
            $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
        });
         return true
    } else {
        return false
    };
};

Game.prototype.checkSecondColumn = function() {
  if (((this.boxTwo === 'X') && (this.boxFive === 'X') && (this.boxEight === 'X')) ||
       ((this.boxTwo === 'O') && (this.boxFive === 'O') && (this.boxEight === 'O'))) {
         $.each(['#box-two', '#box-five', '#box-eight'], function(i, el) {
            $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
        });
        return true
    } else {
        return false
    };
};

Game.prototype.checkThirdColumn = function() {
  if (((this.boxThree === 'X') && (this.boxSix === 'X') && (this.boxNine === 'X')) ||
       ((this.boxThree === 'O') && (this.boxSix === 'O') && (this.boxNine === 'O'))) {
         $.each(['#box-three', '#box-six', '#box-nine'], function(i, el) {
            $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
        });
        return true
    } else {
        return false
    };
};

Game.prototype.checkDiagonals = function() {   
    return (this.checkFirstDiagonal() || this.checkSecondDiagonal());
};

Game.prototype.checkFirstDiagonal = function() {
   if (((this.boxOne === 'X') && (this.boxFive === 'X') && (this.boxNine === 'X')) ||
       ((this.boxOne === 'O') && (this.boxFive === 'O') && (this.boxNine === 'O'))) {
         $.each(['#box-one', '#box-five', '#box-nine'], function(i, el) {
            $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
        });
         return true
    } else {
        return false
    };
};

Game.prototype.checkSecondDiagonal = function() {
  if (((this.boxThree === 'X') && (this.boxFive === 'X') && (this.boxSeven === 'X')) ||
       ((this.boxThree === 'O') && (this.boxFive === 'O') && (this.boxSeven === 'O'))) {
          $.each(['#box-three', '#box-five', '#box-seven'], function(i, el) {
            $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
        });
       return true
    } else {
        return false
    };
};

Game.prototype.newGame = function() {
    $('.new-game-button').on('click', function() {
        $.each(['#box-one', '#box-two', '#box-three', '#box-four',
            '#box-five', '#box-six', '#box-seven', '#box-eight', '#box-nine', 
            '.new-game-button'], function(i, el) {
            $(el).fadeOut(250, function() {
                $('.button').children().val('');
                $.each(['#box-one', '#box-two', '#box-three', '#box-four',
                '#box-five', '#box-six', '#box-seven', '#box-eight', '#box-nine'], 
                function(i, el) {
                    $(el).show(function() {
                        $('.button').children().css('color', 'rgb(0, 0, 0');
                    });
                });
            });
        });
        game.currentTurn = 'O';
        game.numberOfPlays = 0;
        game.gameOver = false;
        console.log("new game");
    });
};

letsPlay();

