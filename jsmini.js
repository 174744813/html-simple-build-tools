var fs  = require('fs');
var min=require("uglify-es")
var packageJSON=fs.readFileSync('./package.json', 'utf8')
packageJSON=JSON.parse(packageJSON)
var jsdir=packageJSON.config.jsdir;

fs.readdir(jsdir,function(err,files){
    var result=[];
    files.forEach(function(item,index){
        result.push(jsdir+item)
    })
    buildOne(result)

})


function buildOne(fileIn) {
    for (var i = 0,len = fileIn.length; i < len; i++) {
    
                origCode = fs.readFileSync(fileIn[i], 'utf8');
                 var result=min.minify(origCode)
                 
                 fs.writeFileSync(fileIn[i], result.code, 'utf8');
            };
        
    
       
    }

