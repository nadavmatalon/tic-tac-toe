var server = require('../../server');
var chai = require('chai');
var assert = require("chai").assert;
var expect = chai.expect;
var Browser = require('zombie');

describe('Tic-Tac-Toe', function() {

	var browser;

	before('run server', function() {
		this.server = server.listen(3000);
		browser = new Browser({ site: 'http://localhost:3000' });
	});

	beforeEach('refresh page', function(done) {
		browser.visit('/', done);
	});

	it('can visit the home page', function() {
		expect(browser.success).to.be.true;
	});

	it('has the correct title', function() {
		expect(browser.text('span')).to.equal('TIC • TAC • TOE');
	});

	// it('does not initially show the new game button', function(done) {

	// });

	it('shows the new game button if game is won', function(done) {
		var button = browser.document.getElementById("new-game-button");
		browser.pressButton("#square-one");
		browser.pressButton("#square-two");
		browser.pressButton("#square-three");
		browser.pressButton("#square-four");
		browser.pressButton("#square-five");
		browser.pressButton("#square-six");
		// browser.viewInBrowser('firefox');
		browser.pressButton("#square-seven").then(function() {;
			browser.pressButton(".new-game-button");
		}).then(done);
	});

	it('has 9 squares', function(done) {
		var item = browser.document.getElementById("0");
		browser.pressButton("#square-one", function() {

			var item1 = browser.query(".my-class").value;
			console.log(item1);
    	});
    	done();

	});

});

