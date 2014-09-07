
$(document).ready(function() {

    var myVar = 0;
    var lastTurn = '';
    var gameOver = false;
    var numberOfPlays = 0;
    var boxOne;
    var boxTwo;
    var boxThree;
    var boxFour;
    var boxFive;
    var boxSix;
    var boxSeven;
    var boxEight;
    var boxNine;
    var newPanel;

    function setUp() {
        $('.title').fadeIn(400, function() {
            $('.button').each(function(i) {
                $(this).delay(i*200).fadeIn(220);
            });
        });
    };

    function newGame() {
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

            lastTurn = 'X';
            numberOfPlays = 0;
            gameOver = false;
            console.log("new game");
        });
    };

    function play() {
        $('.button').on('click', function() {
            if (!gameOver) {
                if ($(this).find(':first-child').val() === '') {
                    setLastTurn();
                    $(this).find(':first-child').val(getValue());                
                    boxOne = $("#box-one").val();
                    boxTwo = $("#box-two").val();
                    boxThree = $("#box-three").val();
                    boxFour = $("#box-four").val();
                    boxFive = $("#box-five").val();
                    boxSix = $("#box-six").val();
                    boxSeven = $("#box-seven").val();
                    boxEight = $("#box-eight").val();
                    boxNine = $("#box-nine").val();
                    numberOfPlays += 1;
                    gameOver = checkWinner();
                    if (gameOver) console.log("game over");
                };
            };
        });
    };



    function checkWinner() {
        var rows = checkRows();
        var columns = checkColumns();
        var diagonals = checkDiagonals();
        if (((rows || columns) || diagonals) || (numberOfPlays === 9)) {
            $('.new-game-button').fadeIn(220);
            return true;
        } else {
            return false;
        };
    };

    function checkRows() {
        var rowOne = checkFirstRow();
        var rowTwo = checkSecondRow();
        var rowThree = checkThirdRow();
        if ((rowOne || rowTwo) || rowThree) {
           return true;
        } else {
            return false;
        };   
    };

    function checkFirstRow() {
        if (((boxOne === 'X') && (boxTwo === 'X') && (boxThree === 'X')) ||
           ((boxOne === 'O') && (boxTwo === 'O') && (boxThree === 'O'))) {
            $.each(['#box-one', '#box-two', '#box-three'], function(i, el) {
                $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
            });
            return true
        } else {
            return false
        };
    };

    function checkSecondRow() {
       if (((boxFour === 'X') && (boxFive === 'X') && (boxSix === 'X')) || 
          ((boxFour === 'O') && (boxFive === 'O') && (boxSix === 'O'))) {
            $.each(['#box-four', '#box-five', '#box-six'], function(i, el) {
                $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
            });
            return true
        } else {
            return false
        };
    };

   function checkThirdRow() {
        if (((boxSeven === 'X') && (boxEight === 'X') && (boxNine === 'X')) || 
           ((boxSeven === 'O') && (boxEight === 'O') && (boxNine === 'O'))) {
            $.each(['#box-seven', '#box-eight', '#box-nine'], function(i, el) {
                $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
            });
            return true
        } else {
            return false
        };
    };

   function checkColumns() {
        var columnOne = checkFirstColumn();
        var columnTwo = checkSecondColumn();
        var columnThree = checkThirdColumn();
        if ((columnOne || columnTwo) || columnThree) {
           return true;
        } else {
            return false;
        }; 
    };

   function checkFirstColumn() {
       if (((boxOne === 'X') && (boxFour === 'X') && (boxSeven === 'X')) ||
           ((boxOne === 'O') && (boxFour === 'O') && (boxSeven === 'O'))) {
             $.each(['#box-one', '#box-four', '#box-seven'], function(i, el) {
                $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
            });
             return true
        } else {
            return false
        };
    };

   function checkSecondColumn() {
       if (((boxTwo === 'X') && (boxFive === 'X') && (boxEight === 'X')) ||
           ((boxTwo === 'O') && (boxFive === 'O') && (boxEight === 'O'))) {
             $.each(['#box-two', '#box-five', '#box-eight'], function(i, el) {
                $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
            });
            return true
        } else {
            return false
        };
    };


   function checkThirdColumn() {
       if (((boxThree === 'X') && (boxSix === 'X') && (boxNine === 'X')) ||
           ((boxThree === 'O') && (boxSix === 'O') && (boxNine === 'O'))) {
             $.each(['#box-three', '#box-six', '#box-nine'], function(i, el) {
                $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
            });
            return true
        } else {
            return false
        };
    };

   function checkDiagonals() {
       var diagonalOne = checkFirstDiagonal();
        var diagonalTwo = checkSecondDiagonal();
        if (diagonalOne || diagonalTwo) {
            return true;
        } else {
            return false;
        };
    };

  function checkFirstDiagonal() {
       if (((boxOne === 'X') && (boxFive === 'X') && (boxNine === 'X')) ||
           ((boxOne === 'O') && (boxFive === 'O') && (boxNine === 'O'))) {
             $.each(['#box-one', '#box-five', '#box-nine'], function(i, el) {
                $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
            });
             return true
        } else {
            return false
        };
    };

  function checkSecondDiagonal() {
       if (((boxThree === 'X') && (boxFive === 'X') && (boxSeven === 'X')) ||
           ((boxThree === 'O') && (boxFive === 'O') && (boxSeven === 'O'))) {
              $.each(['#box-three', '#box-five', '#box-seven'], function(i, el) {
                $(el).animate({ color: "rgb(255, 255, 255)" }, 200);
            });
           return true
        } else {
            return false
        };
    };

    function getValue() {
        var result;
        if (lastTurn == 'X') {
            result = 'O';
        } else if (lastTurn == 'O') {
            result = 'X';
        };
        return result;
    };

    function setLastTurn() {
       if (lastTurn == 'X') {
            lastTurn = 'O';
        } else if (lastTurn == 'O') {
            lastTurn = 'X'; 
        } else {
            lastTurn = 'O'
        };
    };

    setUp();
    play();
    newGame();

});

