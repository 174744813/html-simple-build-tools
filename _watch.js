var chokidar = require('chokidar');
var filedir=require("filedir");
var path = require("path");
var fs = require("fs");
var shell = require('shelljs');
var chalk=require("chalk")
var cpFile = require('cp-file');




function copy_(src){

    if(src.indexOf(".")!=(-1)){ //如果名字带.表示添加的是文件
         
               var tem=src.replace(/src/,"dist");
                cpFile(src, tem)
            }


}
function delete_(src){
    if(src.indexOf(".")!=(-1)){ //如果名字带.表示添加的是文件
        
          var tem=src.replace(/src/,"dist");

           filedir.del(tem)
       }

}




var watcher = chokidar.watch('./src', {
  ignored: /[\/\\]\./, persistent: true
});

var log = console.log.bind(console);

function getdir(url){
    var arr = url.split('.');
    var len = arr.length;
    return arr[len-1];
}

watcher
  .on('add', function(path) { 
    console.log(chalk.yellow("您改变了"+path+"文件")) 
      copy_(path)
   })
  .on('addDir', function(path) { 
      
   })
  .on('change', function(path) { 
     console.log(chalk.yellow("您改变了"+path+"文件"))  
     copy_(path)



   })
  .on('unlink', function(path) { 
      console.log(chalk.yellow("您删除了"+path));
      delete_(path)

  })
.on('unlinkDir', function(path) { })
.on('error', function(error) { log('Error happened', error); })
.on('ready', function() { })
.on('raw', function(event, path, details) { })
