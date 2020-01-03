class ParkingLot {
	parkingSystem = [];
	maxSize = 2;
	availableSlot = [];

	constructor(car) {
		this.car = car;
	}

	park = async (car) => {
		if (this.maxSize === 0) {
			return `parking lot is not initiated`;
		} else if (this.maxSize === (this.parkingSystem.length - 1)) {
			return `Sorry, parking lot is full`;
		} else {
			var parkedCar = this.parkingSystem.push(car);
			return parkedCar;
		}
	}
}

module.exports = { ParkingLot }