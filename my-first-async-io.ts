const fs = require("fs")

var buffer = process.argv[2]

fs.readFile(buffer,function (err,contents){
    var lines = contents.toString().split('\n').length-1
    console.log(lines)
})

