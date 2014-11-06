var server = require('../../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

describe('Tic-Tac-Toe', function() {

	var browser;

	before(function() {
		this.server = server.listen(3000);
		browser = new Browser({ site: 'http://localhost:3000' });
	});

	before(function(done) {
		browser.visit('/', done);
	});

	it('can visit the home page', function() {
		expect(browser.success).to.be.true;
	});

	it('has the correct title', function() {
		expect(browser.text('span')).to.eql('TIC • TAC • TOE');
	});

});

