var LList = require("../ADTs/linkedlist");

describe("LinkedList", function(){
	var llist;

	beforeEach(function(){
		llist = new LList();
	});

	it("insert", function(){
        llist.insert('a', 'head');
        llist.insert('b', 'a');
        llist.insert('c','head')

        expect(llist.display()).toBe("c,a,b");
	});

	it("remove", function(){
		llist.insert('a', 'head');
        llist.insert('b', 'a');
        llist.insert('c','head')

        expect(llist.display()).toBe("c,a,b");
        
		expect(llist.findPrevious('a')).toBeDefined();
		llist.remove('a');
        expect(llist.display()).toBe("c,b");
	});

});