
function letsPlay() {
    game = new Game;
    game.setUp();
    game.play();
    game.newGame();
};

function Game() {};

Game.prototype.currentTurn = 'O';
Game.prototype.gameOver = false;
Game.prototype.numberOfPlays = 0;

Game.prototype.setUp = function() {
    $('.title').fadeIn(400, function() {
        $('.button').each(function(box) {
            $(this).delay(box*200).fadeIn(220);
        });
    });
};

Game.prototype.play = function() {
    $('.button').on('click', function() {
        if (!game.gameOver) {
            if ($(this).find(':first-child').val() === '') {
                game.currentTurn = game.setCurrentTurn();
                $(this).find(':first-child').val(game.currentTurn);                
                game.numberOfPlays += 1;
                game.gameOver = game.checkGameOver();
            }
        }
    });
};

Game.prototype.setCurrentTurn = function() {
    return (this.currentTurn === 'O') ? (this.currentTurn = 'X') : (this.currentTurn = 'O');
};

Game.prototype.checkGameOver = function() {   
    if (this.foundWinningStreak() || this.maxNumberOfPlays()) {
        $('.new-game-button').fadeIn(220);
        return true;
    } else {
        return false;
    }
};

Game.prototype.maxNumberOfPlays = function() {
    return game.numberOfPlays === 9;
};

Game.prototype.foundWinningStreak = function() {
    return this.checkRows() || this.checkColumns() || this.checkDiagonals();
};

Game.prototype.checkRows = function() { 
    var firstRow = ["#box-one", "#box-two", "#box-three"];
    var secondRow = ["#box-four", "#box-five", "#box-six"];
    var thirdRow = ["#box-seven", "#box-eight", "#box-nine"];
    return this.check(firstRow) || this.check(secondRow) || this.check(thirdRow);
};

Game.prototype.checkColumns = function() { 
    var firstColumn = ["#box-one", "#box-four", "#box-seven"];
    var secondColumn = ["#box-two", "#box-five", "#box-eight"];
    var thirdColumn = ["#box-three", "#box-six", "#box-nine"];
    return this.check(firstColumn) || this.check(secondColumn) || this.check(thirdColumn);
};

Game.prototype.checkDiagonals = function() { 
    var firstDiagonal = ["#box-one", "#box-five", "#box-nine"];
    var secondDiagonal = ["#box-three", "#box-five", "#box-seven"];
    return this.check(firstDiagonal) || this.check(secondDiagonal);
};

Game.prototype.check = function(boxes) {
    if (this.winningStreak(boxes)) {
        this.markWinningSquence(boxes);
        return true;
    } else {
        return false;
    }
};

Game.prototype.winningStreak = function(boxes) {
    return $.inArray(this.boxValuesStr(boxes), ['XXX', 'OOO']) > -1;
};

Game.prototype.boxValuesStr = function(boxes) {
    return $(boxes[0]).val() + $(boxes[1]).val() + $(boxes[2]).val();
};

Game.prototype.markWinningSquence = function(boxes) {
    $.each(boxes, function(index, box) {
        $(box).animate({ color: "rgb(255, 255, 255)" }, 200);
    });
};

Game.prototype.newGame = function() {
    var boxes = ['#box-one', '#box-two', '#box-three', 
                 '#box-four', '#box-five', '#box-six', 
                 '#box-seven', '#box-eight', '#box-nine'];
    var boxText = $('.button').children();
    $('.new-game-button').on('click', function() {
        $.each(boxes.concat(['.new-game-button']), function(index, boxValue) {
            $(boxValue).fadeOut(250, function() {
                boxText.val('');
                $.each(boxes, function(index, box) {
                    $(box).show(function() {
                        boxText.css('color', 'rgb(0, 0, 0');
                    });
                });
            });
        });
        game.resetGameParameters();
    });
};

Game.prototype.resetGameParameters = function() {
    game.currentTurn = 'O';
    game.numberOfPlays = 0;
    game.gameOver = false;
};

