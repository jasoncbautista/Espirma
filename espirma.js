var esprima = require('esprima');
//console.log(JSON.stringify(esprima.parse('var answer = 42'), null, 4));
console.log(JSON.stringify(esprima.parse('/*\n * one \n *two  \n  */   \n var two = 1;\n //Another comment \n//Testing one two \n;var answer = 42', {comment: true, loc: true}), null, 4));
