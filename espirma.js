var esprima = require('esprima');
//console.log(JSON.stringify(esprima.parse('var answer = 42'), null, 4));
console.log(JSON.stringify(esprima.parse('//Testing one two \n;var answer = 42'), null, 4));
