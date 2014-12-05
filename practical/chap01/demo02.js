var user = function(opts) {
	return {
		firstName: ops.name || 'John',
		lastName: ops.name || 'Doe',
		email: ops.email || 'test@test.com',
		name: function() {
			return this.firstName + this.lastName;
		}
	}
};

var agency = function(ops) {
	ops = ops || {};
	var agency = user(ops);
	agency.customers = ops.customers || 0;
	agency.isAgency = true;
	return agency;
};