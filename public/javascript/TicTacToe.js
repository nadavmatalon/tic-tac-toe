
function letsPlay() {
    game = new Game;
    game.setUp();
    game.play();
    game.newGame();
};

function Game() {};

Game.prototype.numberOfPlays = 0;
Game.prototype.currentTurn = function() { this.setRandomFirstTurn() };
Game.prototype.gameOver = false;

Game.prototype.BOXES = ['#box-one', '#box-two', '#box-three', 
                        '#box-four', '#box-five', '#box-six', 
                        '#box-seven', '#box-eight', '#box-nine'];

Game.prototype.setUp = function() {
    $('.title').fadeIn(400, function() {
        $('.box').each(function(box) {
            $(this).delay(box*200).fadeIn(220);
        });
    });
};

Game.prototype.play = function() {
    $('.box').on('click', function() {
        if (!game.gameOver) {
            var selectedBox = $(this).find(':first-child');
            game.playTurn(selectedBox);
        }
    });
};

Game.prototype.playTurn = function(selectedBox) {
    if (this.boxEmpty(selectedBox)) {
        this.setCurrentTurn();
        $(selectedBox).val(this.currentTurn);                
        this.incrementNunberOfPlays();
        this.checkGameOver();
    }
};

Game.prototype.boxEmpty = function(selectedBox) {
    return selectedBox.val() === '';
};

Game.prototype.incrementNunberOfPlays = function() {
    return this.numberOfPlays += 1;
};

Game.prototype.setCurrentTurn = function() {
    if (this.currentTurn === 'O') { 
        return this.currentTurn = 'X';
    } else { 
        return this.currentTurn = 'O';
    }
};

Game.prototype.setRandomFirstTurn = function() {
    return ['X', 'O'][Math.floor(Math.random()*['X', 'O'].length)]; 
};

Game.prototype.checkGameOver = function() {   
    if (this.foundWinningStreak() || this.maxNumberOfPlays()) {
        $('.new-game-button').fadeIn(220);
        return this.gameOver = true;
    } else {
        return this.gameOver = false;
    }
};

Game.prototype.maxNumberOfPlays = function() {
    return this.numberOfPlays === 9;
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
        $(box).animate({ color: 'rgb(255, 255, 255)' }, 200);
    });
};

Game.prototype.newGame = function() {
    $('.new-game-button').on('click', function() {
        game.resetBoxParameters();
        game.resetGameParameters();
    });
};

Game.prototype.resetBoxParameters = function() {
    $.each(game.BOXES.concat(['.new-game-button']), function(index, boxValue) {
        $(boxValue).fadeOut(250, function() {
            $.each(game.BOXES, function(index, box) {
                $(box).val('').show(function() {
                    $('.box').children().css('color', 'rgb(0, 0, 0');
                });
            });
        });
    });
};

Game.prototype.resetGameParameters = function() {
    this.numberOfPlays = 0;
    this.currentTurn = this.setRandomFirstTurn();
    this.gameOver = false;
};

