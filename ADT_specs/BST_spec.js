var BinarySearchTree = require("../ADTs/BST");

describe("BinarySearchTree", function(){
	var bst;

	beforeEach(function(){
		bst = new BinarySearchTree();
	});

	it('exists', function(){
		expect(bst).toBeDefined();
	});

	it("insert and inOrder_1", function(){
        bst.insert(1);
        bst.insert(3);
        bst.insert(0);
        bst.insert(2);
        bst.insert(5);
        bst.insert(4);

        expect(bst.inOrder(bst.root)).toEqual([0, 1, 2, 3, 4, 5]);
	});

	it("insert and inOrder_2", function(){
        bst.insert(23);
        bst.insert(45);
        bst.insert(16);
        bst.insert(37);
        bst.insert(3);
        bst.insert(99);
        bst.insert(22);

        expect(bst.inOrder(bst.root)).toEqual([3, 16, 22, 23, 37, 45, 99]);
	});

	it("preOrder", function(){
        bst.insert(23);
        bst.insert(45);
        bst.insert(16);
        bst.insert(37);
        bst.insert(3);
        bst.insert(99);
        bst.insert(22);

        expect(bst.preOrder(bst.root)).toEqual([23, 16, 3, 22, 45, 37, 99]);
	});

	it("postOrder", function(){
        bst.insert(23);
        bst.insert(45);
        bst.insert(16);
        bst.insert(37);
        bst.insert(3);
        bst.insert(99);
        bst.insert(22);

        expect(bst.postOrder(bst.root)).toEqual([3, 22, 16, 37, 99, 45, 23]);
	});

	it("getMin", function(){
        bst.insert(23);
        bst.insert(45);
        bst.insert(16);
        bst.insert(37);
        bst.insert(3);
        bst.insert(99);
        bst.insert(22);

        expect(bst.getMin()).toBe(3);
	});

	it("getMax", function(){
        bst.insert(23);
        bst.insert(45);
        bst.insert(16);
        bst.insert(37);
        bst.insert(3);
        bst.insert(99);
        bst.insert(22);

        expect(bst.getMax()).toBe(99);
	});

	it("find", function(){
        bst.insert(23);
        bst.insert(45);
        bst.insert(16);
        bst.insert(37);
        bst.insert(3);
        bst.insert(99);
        bst.insert(22);

        expect(bst.find(99)).toBeDefined();
        expect(bst.find(100)).toBe(null);
	});


});






