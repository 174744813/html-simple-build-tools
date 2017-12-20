var filedir=require("filedir");
var path = require("path");
var fs = require("fs");
var cpFile = require('cp-file');
var src='./src'
var dist='./dist'
fs.readdir(src,function(err,files){
    var result=[];

    var files_=files.filter(function(item,index){
        return item.indexOf(".html")!=(-1)
    })


    files_.forEach(function(item,index){

         cpFile(src+'/'+item, dist+'/'+item)
    })

})
