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
              
               var  origCode = fs.readFileSync(fileIn[i], 'utf8');
               var dist_=fileIn[i].replace(/src/,'dist')
   
                var result=min.minify(origCode)
                
                 fs.writeFileSync(dist_, result.code, 'utf8');
            };
        
    
       
    }

