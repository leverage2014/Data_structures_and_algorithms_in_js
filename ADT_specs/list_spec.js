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
});