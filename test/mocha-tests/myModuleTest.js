define([
	'chai',
	'my-module'
], function (chai, MYMODULE) {

	var assert = chai.assert;

	describe('my module', function () {

		it('should work', function () {
			var myModule;
			assert.isFunction(MYMODULE);

			myModule = new MYMODULE();
			assert.isObject(myModule);

			assert.isFunction(myModule.doWhatIMean);

		});

	});

});