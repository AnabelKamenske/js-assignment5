
/*
Assignment 5: Problem 4 - Turn in the following array of arrays into a single object.
The first element in each array is the key, and the second element is the value.

You will also be asked to omit an element from the array.

For example, the following array:

const items = [
	  [ 'name', 'Ford' ],
	  [ 'model', 'Mustang' ],
	  [ 'year', 1964 ], 	// Omit this element
	  [ 'color', 'red' ]
]

Should be turned into the following object:
{
	name: 'Ford',
	model: 'Mustang',
	color: 'red'
}

TO TEST:
You can run this example by running `node problems/problem-4` in your terminal,
or you can run all by running `node run-all`.
*/

const { test } = require('../tester')

const items = [
	  [ 'firstName', 'Luke' ],
	  [ 'lastName', 'Skywalker' ],
	  [ 'age', 19 ],
	  [ 'occupation', 'Jedi' ],
	  [ 'homePlanet', 'Tatooine' ]
]

// Omit the 'age' element

function Jedi(input) {
	for (let i = 0; i < input.length; i++) {
		console.log("Full Name: " + input[i].firstName + " " + input[i].lastName)
		console.log("Occupation: " + input[i].occupation)
		console.log("Home Planet: " + input[i].homePlanet)
	}
}

foreach(items => Jedi(items));

const person = items // append your code here

test("Problem 4", person)