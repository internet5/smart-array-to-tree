'use strict';
var smartArrayToTree = require('../index.js');
var test = require('tape');

test('totree test', function (t) {
	var list=[
	{
		id:'1',
		param1:'xx',
		pid:null,
	},
			{
		id:'2',
		param1:'xx',
		pid:null,
	},
			{
		id:'3',
		param1:'xx',
		pid:null,
	},
			{
		id:'11',
		param1:'yy',
		pid:'1',
	},
			{
		id:'22',
		param1:'yy',
		pid:'2',
	},
			{
		id:'33',
		param1:'yy',
		pid:'3',
	},
			]
    var tree = smartArrayToTree({array:list});

    t.equal(tree.length, 3);

	t.end();
});



