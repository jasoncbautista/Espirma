var fs = require("fs");
var esprima = require('esprima');
//console.log(JSON.stringify(esprima.parse('var answer = 42'), null, 4));
// console.log(JSON.stringify(esprima.parse('/*\n * one \n *two  \n  */   \n var two = 1;\n //Another comment \n//Testing one two \n;var answer = 42', {comment: true, loc: true}), null, 4));

// Read a file:
var filename = process.argv[2];
var code = fs.readFileSync(filename);

var jsonResult = esprima.parse(code, {
    comment: true
    , loc: true
});

//console.log(jsonResult);

var countComments = function(analyzedResults){
    var count = 0;
    var comments = analyzedResults.comments;
    for(var ii = 0; ii< comments.length; ii++){

        var comment = comments[ii];
        var loc = comment.loc;
        console.log(loc);
        var startLine = loc.start.line
        var endLine = loc.end.line;


        var lines = (endLine - startLine) + 1;
        cosnole.log(lines);
    }

    return count;
};


var loc = countComments(jsonResult);


//console.log(JSON.stringify(jsonResult));
