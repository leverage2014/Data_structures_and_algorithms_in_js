var Stack = require('../ADTs/stack');

describe("Stack", function(){
	var stack;

	beforeEach(function(){
		stack = new Stack();
	});

    it("exist", function(){
    	expect(stack).toBeDefined();
    });

	it("push", function(){
		stack.push("a");
		stack.push("b");

		expect(stack.length()).toBe(2);
	});

	it("pop", function(){
		stack.push("aa");
		stack.push("bb");
		stack.push("cc");

		expect(stack.pop()).toBe("cc");
		expect(stack.pop()).toBe("bb");
		expect(stack.pop()).toBe("aa");
		expect(stack.length()).toBe(0);
	});
});