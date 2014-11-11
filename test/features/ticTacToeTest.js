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

	describe('page elements', function() {

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
			expect(browser.query('#page-title')).to.exist;
			expect(browser.text('#page-title')).to.equal('TIC • TAC • TOE');
		});

		it('should contain 9 squares', function() {
			var squareArray = browser.queryAll('.square');
			expect(squareArray).to.have.length.of(9);
		});

		it('should not show the new game button', function() {
            expect(browser.evaluate("game.gameOver()")).to.be.false;
        });
    });

 	describe('page elements', function() {

		beforeEach('refresh page', function(done) {
			browser.visit('http://localhost:3000/', done);
		});

		it('shows the new game button if game is won', function() {
			squares = [
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

