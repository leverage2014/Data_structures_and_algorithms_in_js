var Set = require("../ADTs/set");

describe("Set", function(){
	var set;

	beforeEach(function(){
		set = new Set();
	});

	it("exist", function(){
		expect(set).toBeDefined();
	});

    it("add", function(){
        set.add('a');
        set.add('b');
        set.add('c');
        set.add('a');
        set.add('b');

        expect(set.size()).toBe(3);
		expect(set.show()).toEqual(['a','b','c']);
	});

	it("remove", function(){
		set.add('a');
        set.add('b');
        set.add('c');
        set.add('a');
        set.add('b');

        set.remove('a');
        set.remove('b');

		expect(set.show()).toEqual(['c']);
	});

	it("contains", function(){
		set.add('a');
        set.add('b');
        set.add('c');

		expect(set.contains('a')).toBe(true);
		expect(set.contains('b')).toBe(true);
		expect(set.contains('d')).toBe(false);
	});

	it("union", function(){
		set.add('a');
        set.add('b');
        set.add('c');

        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        set2.add('d');
        set2.add('c');

		expect(set.union(set2).show()).toEqual(['a','b','c','d']);
	});

	it("intersect", function(){
		set.add('a');
        set.add('b');
        set.add('c');

        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        set2.add('d');
        set2.add('c');

        var set3 = new Set();
        set3.add('a');
        set3.add('b');

		expect(set.intersect(set2).show()).toEqual(['a','b','c']);
		expect(set.intersect(set3).show()).toEqual(['a','b']);
	});

	it("subsetOf", function(){
		set.add('a');
        set.add('b');
        set.add('c');

        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        set2.add('d');
        set2.add('c');

        var set3 = new Set();
        set3.add('a');
        set3.add('b');

		expect(set.subsetOf(set2)).toBe(true);
		expect(set.subsetOf(set3)).toBe(false);
	});

	it("difference: set larger", function(){
		set.add('a');
        set.add('b');
        set.add('c');

        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        set2.add('d');
        set2.add('c');

		expect(set.difference(set2).show()).toEqual(['d']);
	});

	it("difference: set smaller", function(){
		set.add('a');
        set.add('b');
        set.add('c');

        var set3 = new Set();
        set3.add('a');
        set3.add('b');

		expect(set.difference(set3).show()).toEqual(['c']);
	});

	it("difference: same length", function(){
		set.add('a');
        set.add('b');

        var set4 = new Set();
        set4.add('a');
        set4.add('d');

		expect(set.difference(set4).show()).toEqual(['b','d']);
	});
});