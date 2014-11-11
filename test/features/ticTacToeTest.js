var server = require('../../server');
var chai = require('chai');
var assert = require("chai").assert;
var expect = chai.expect;
var should = chai.should();
var Browser = require('zombie');

describe('Tic-Tac-Toe', function() {

	var browser;

	before('run server', function() {
		server = server.listen(3000);
		browser = Browser.create({ site: 'http://localhost:3000', debug: true });
	});

	describe('page', function() {

		before('refresh page', function(done) {
			browser.visit('http://localhost:3000/', done);
		});

		it('should load successfully', function() {
			expect(browser.success).to.be.true;
		});

		it('should have the currect page title', function() {
			browser.assert.text('title', 'TIC • TAC • TOE');
		});

		it('should contain the correct page heading', function() {
			expect(browser.text('#page-title')).to.equal('TIC • TAC • TOE');
		});
	});	

 	describe('grid', function() {

		beforeEach('refresh page', function(done) {
			browser.visit('http://localhost:3000/', done);
		});

		it('should contain 9 squares', function() {
			var squareArray = browser.queryAll('.square');
			expect(squareArray).to.have.length.of(9);
		});

		it('squares should initially be empty', function() {
			['.button-one', '.button-two', '.button-three', '.button-four',
			 '.button-five', '.button-six', '.button-seven', '.button-eight',
			 '.button-nine'].forEach(function(square) {
				expect(browser.query(square).value).to.equal('');
			});
        });

		it('square should be assigned a value when clicked', function() {
			var currentTurn = browser.evaluate("game.currentTurn");
			browser.pressButton('#square-one');
			expect(browser.query('.button-one').value).to.equal(currentTurn);
    	});

		it('squares should be cleared when new game button is clicked', function() {
			['#square-one', '#square-two', '#square-three', 
			 '#square-four', '#square-five', '#square-six', 
			 '#square-seven'].forEach(function(square) {
				browser.pressButton(square);
			});
			browser.pressButton('.new-game-button').then (function() {
				['.button-one', '.button-two', '.button-three', '.button-four',
				 '.button-five', '.button-six', '.button-seven', '.button-eight',
				 '.button-nine'].forEach(function(square) {
					expect(browser.query(square).value).to.equal('');
				});
			});
    	});
	});

 	describe('game', function() {

		beforeEach('refresh page', function(done) {
			browser.visit('http://localhost:3000/', done);
		});

		it('should initially not be over', function() {
            expect(browser.evaluate("game.gameOver()")).to.be.false;
        });

		it('should be over if winning sequence is reached', function() {
			['#square-one', '#square-two', '#square-three', 
			 '#square-four', '#square-five', '#square-six', 
			 '#square-seven'].forEach(function(square) {
				browser.pressButton(square);
			});
			expect(browser.evaluate("game.gameOver()")).to.be.true;
		});

		it('should be over if all possible moves were made', function() {
			['#square-one', '#square-two', '#square-three', '#square-four',
			 '#square-six', '#square-nine', '#square-five', '#square-seven', 
			 '#square-eight'].forEach(function(square) {
				browser.pressButton(square);
			});
			expect(browser.evaluate("game.gameOver()")).to.be.true;
		});
 	});
});

