const Vehicle = Backbone.Model.extend({
	idAttribute: "registrationNumber",
	urlRoot: 'api/vehicles',
	validate(attributes) {
		console.log(attributes);
		if (!attributes.registrationNumber) {
			return "vehicle must have registration number";
		}
	},
	start() {
		console.log('vehicle started');
		console.log(this.registrationNumber, this.color);
	}
});

const Car = Vehicle.extend({
	start() {
		console.log('car started');
		console.log(`registration number is ${this.get('registrationNumber')}`);
	}
});

const saab = new Car({
	registrationNumber: 'XLI887',
	color: 'Blue'
});

saab.unset("registrationNumber");

if (!saab.isValid()) {
	console.log(saab.validationError);
} else {
	console.log('saab is valid');
}

saab.set('registrationNumber', 'BCN9000');
saab.start();
console.log(saab.isValid());




