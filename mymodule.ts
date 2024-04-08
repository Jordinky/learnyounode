var filterFn = require("./make-it-modular.ts");
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function(err,list){
    if(err)
        return console.error("error: ",err)
    list.forEach(function(file){
        console.log(file)
    })
})