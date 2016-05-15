(function() {
	'use stric';

	////////////////
	// import
	////////////////
	const debug = require('debug')('test');
	const should = require('should');
	////////////////
	// global
	////////////////
	
	////////////////
	// test
	////////////////
	describe('Array', function() {
		describe('#indexOf()', function() {
			it('should return -1 when the value is not present', function() {
				[1, 2, 3].indexOf(0).should.be.equal(-1);
			});
			it('should return the correct index when the value is present', function() {
				[1, 2, 3].indexOf(3).should.be.equal(3);
			});
		});
	});
})();
