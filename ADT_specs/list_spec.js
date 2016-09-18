var List = require("../ADTs/list");

describe('List', function(){
   
    var list;
   beforeEach(function(){
      list = new List();
   });

   it("exist", function(){
       expect(list).toBeDefined();
   });

   it("append", function(){
   	   list.append("a");
   	   expect(list.length()).toBe(1);

   	   list.append("b");
   	   expect(list.length()).toBe(2);
   });

   it("toString", function(){
      list.append("a");
      list.append("b");

      expect(list.toString()).toEqual(["a", "b"]);
   });

   it("insert", function(){
       list.append('a');
       list.append('b');
       list.append('c');

       expect(list.length()).toBe(3);

       list.insert('1', 'a');
       expect(list.length()).toBe(4);

       expect(list.toString()).toEqual(['a', '1', 'b', 'c']);
   });
	
	it("clear", function(){
		list.append('a');
		list.append('b');

		expect(list.length()).toBe(2);

		list.clear();
		expect(list.length()).toBe(0);
	});

	it("contains", function(){
		list.append('a');
		list.append('b');

		expect(list.contains('a')).toBe(true);
	});
	
	it("iteration", function(){
		list.append("aa");
		list.append("bb");
		list.append("cc");
		list.append("dd");
		list.append("ee");

		expect(list.currPos()).toBe(0);
		expect(list.getElement(list.next())).toBe('bb');
	});
});






