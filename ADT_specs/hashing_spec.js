var HashTable = require("../ADTs/hashing");

describe("HashTable", function(){

	var hashTable;

	beforeEach(function(){
		hashTable = new HashTable();
	});

	it("exist", function(){
		expect(hashTable).toBeDefined();
	});
});