var Dictionary = require("../ADTs/dictionary");

describe("Dictionary", function(){
	var dict;

	beforeEach(function(){
		dict = new Dictionary();
	});

	it("exist", function(){
		expect(dict).toBeDefined();
	});

	it("add", function(){
		dict.add("1", "a");
		dict.add("b", "2");

		expect(dict.find("1")).toBe("a");
		expect(dict.find("b")).toBe("2");
	});

	it("remove", function(){
		dict.add("1", "a");
		dict.add("2", "b");
		dict.add("3", "c");

		dict.remove("1");
		expect(dict.find("1")).toBeUndefined();
	});

	it("show all items", function(){
		dict.add("a", "1");
		dict.add("b", "2");
		dict.add("c", "3");

		expect(dict.showAll()).toBe("a-->1,b-->2,c-->3");
	});

	it("size", function(){
		dict.add("a", "1");
		dict.add("b", "2");
		dict.add("c", "3");

		expect(dict.size()).toBe(3);

		dict.remove("b");
		dict.remove("c");
		expect(dict.size()).toBe(1);
	});

	it("clear", function(){
		dict.add("a", "1");
		dict.add("b", "2");
		dict.add("c", "3");

		expect(dict.size()).toBe(3);

		dict.clear()
		expect(dict.size()).toBe(0);
	});

});






