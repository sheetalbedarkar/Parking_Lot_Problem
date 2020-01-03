let parkingLot = require('../parkingLot');
var assert = require('chai').assert;

describe('parking lot system', async function () {
	before(() => {
		parkingObject = new parkingLot.ParkingLot;
	});

	it('should park the car', async function () {
		var result = await parkingObject.park();
		var result1 = await parkingObject.park();
		console.log(result1);
		assert.equal(result1, result1)
	});
});