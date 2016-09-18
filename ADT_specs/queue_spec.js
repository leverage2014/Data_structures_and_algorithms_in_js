var Queue = require("../ADTs/queue");

describe("Queue", function(){
	var queue;

	beforeEach(function(){
		queue = new Queue();
	});

    it("exist", function(){
        expect(queue).toBeDefined();
    });

    it("enqueue", function(){
    	queue.enqueue('a');
    	queue.enqueue('b');

    	expect(queue.length()).toBe(2);
    });

    it("dequeue", function(){
    	queue.enqueue('a');
    	queue.enqueue('b');
    	queue.enqueue('c');

    	expect(queue.dequeue()).toBe('a');
    	expect(queue.dequeue()).toBe('b');
    });

    it("empty", function(){
    	expect(queue.isEmpty()).toBe(true);

    	queue.enqueue('a');
    	expect(queue.isEmpty()).toBe(false);
    });

});