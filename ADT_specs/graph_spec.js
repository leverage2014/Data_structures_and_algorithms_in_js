var Graph = require("../ADTs/graph");

describe("Graph", function(){
	var graph;

    beforeEach(function(){
        graph = new Graph();
    });

	it("exist", function(){
		expect(graph).toBeDefined();
	});
});