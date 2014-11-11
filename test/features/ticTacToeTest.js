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

	describe('page features', function() {

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

		it('should contain 9 squares', function() {
			var squareArray = browser.queryAll('.square');
			expect(squareArray).to.have.length.of(9);
		});
	});	

 	describe('game', function() {

		beforeEach('refresh page', function(done) {
			browser.visit('http://localhost:3000/', done);
		});

		it('should initially not be over', function() {
            expect(browser.evaluate("game.gameOver()")).to.be.false;
        });

		it('squares should all be initially empty', function() {
            expect(browser.query('.button-one').value).to.equal('');
            expect(browser.query('.button-two').value).to.equal('');
            expect(browser.query('.button-three').value).to.equal('');
            expect(browser.query('.button-four').value).to.equal('');
            expect(browser.query('.button-five').value).to.equal('');
            expect(browser.query('.button-six').value).to.equal('');
            expect(browser.query('.button-seven').value).to.equal('');
            expect(browser.query('.button-eight').value).to.equal('');
            expect(browser.query('.button-nine').value).to.equal('');
        });

		it('square should get a value if clicked', function() {
			var currentTurn = browser.evaluate("game.currentTurn");
			browser.pressButton('#square-one');
			expect(browser.query('.button-one').value).to.equal(currentTurn);
    	});

		it('should be over if winning sequence is reached', function() {
			var squares = [
				'#square-one', 
				'#square-two', 
				'#square-three',
				'#square-four',
				'#square-five',
				'#square-six',
				'#square-seven'
				]
			squares.forEach(function(square) {
				browser.pressButton(square);
			});
			expect(browser.evaluate("game.gameOver()")).to.be.true;
		});

		it('should be over if all possible moves were made', function() {
			var squares = [
				'#square-one', 
				'#square-two', 
				'#square-three',
				'#square-four',
				'#square-six',
				'#square-nine',
				'#square-five',
				'#square-seven',
				'#square-eight'
				]
			squares.forEach(function(square) {
				browser.pressButton(square);
			});
			expect(browser.evaluate("game.gameOver()")).to.be.true;
		});


 	});




	// it('shows the new game button if game is won', function(done) {
	// 	squares = [
	// 		'#square-one', 
	// 		'#square-two', 
	// 		'#square-three',
	// 		'#square-four',
	// 		'#square-five',
	// 		'#square-six',
	// 		'#square-seven'
	// 		]
	// 	squares.forEach(function(square) {
	// 		browser.pressButton(square);
	// 	});
	// 	expect(browser.query('.new-game-button')).to.exist;
	// 	browser.wait(function(e, browser) {
	// 		browser.assert.style('.new-game-button', 'display', 'inline-block');
	// 	});
	// 	done();
	// });

	// xit('should designate value to a square a value if clicked', function(done) {
	// 	browser.pressButton('#square-one', function() {
	// 		item1 = browser.query('.my-class').value;
	// 		console.log(item1);
 //    	});
 //    	done();
 //    	expect(browser.text('#page-title')).to.equal('TIC • TAC • TOE');
	// });
});

