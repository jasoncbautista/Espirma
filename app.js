var fs = require("fs");
var esprima = require('esprima');
//console.log(JSON.stringify(esprima.parse('var answer = 42'), null, 4));
// console.log(JSON.stringify(esprima.parse('/*\n * one \n *two  \n  */   \n var two = 1;\n //Another comment \n//Testing one two \n;var answer = 42', {comment: true, loc: true}), null, 4));



// Read a file:
var filename = process.argv[2];
console.log(filename);
var code = fs.readFileSync(filename);

fs.readFile(filename, 'utf8', function (err, code) {
      if (err) {
              return console.log(err);
      }

    console.log(code);
    var jsonResult = esprima.parse(code);
    console.log(JSON.stringify(jsonResult));
});
// console.log(jsonResult);
