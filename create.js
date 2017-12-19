

var fs = require("fs");
var http = require('http')
var filedir=require("filedir");
var path = require("path");
var shelljs=require("shelljs")
var chalk=require("chalk")
var http = require("http");
var fs = require("fs");
var request = require('request');



function get_js(url,address){
    http.get(url, function (response) {
        response.setEncoding('binary');  //二进制binary
        var Data = '';
        response.on('data', function (data) {    //加载到内存
            Data += data;
        }).on('end', function () {          //加载完
            filedir.write(address, Data );
        })
      })

}
//
function get_logo(){
    var arttemplate = filedir.read('http://imgs.aixifan.com/live/1482597494735/1482597494735.jpg')
    filedir.write('./src/images/logo.jpg',src=arttemplate)
}
var Prompt={
    dist:{src:"./dist",text:"开始创建dist文件夹"},
    dist_css:{src:"./dist/css",text:"开始创建dist/css"},
    dist_images:{src:"./dist/images",text:"开始创建dist/images"},
    dist_js:{src:"./dist/js",text:"开始创建dist/js"},
    dist_lib:{src:"./dist/lib",text:"开始创建dist/lib"},
    dist_index_html:{src:"./dist/index.html",text:"开始创建dist/index.html"},

    src:{src:"./src",text:"开始创建src文件夹"},
    src_css:{src:"./src/css",text:"开始创建src/css"},
    src_images:{src:"./src/images",text:"开始创建src/images"},
    src_js:{src:"./src/js",text:"开始创建src/js"},

    src_lib:{src:"./src/lib",text:"开始创建src/lib"},
    src_index_html:{src:"./src/index.html",text:"开始创建src/index.html"}
}
Object.prototype.hasO=Object.prototype.hasOwnProperty
function judge(){
   var this_=this
   for(var i in this_){
       if(this_.hasO(i)){
           if(!filedir.isDir(this_[i].src)){
             var te_name=this_[i].src.split(".");
             te_name=te_name[te_name.length-1];
             
             var for_css=this_[i].src.split("/")
             for_css=for_css[for_css.length-1]
             if(te_name=="html"&&filedir.isFile(this_[i].src)  ){
                 console.log(chalk.yellow("因为已经有"+this_[i].src+",故不会再创建"))
                 continue
             }
             if(te_name=="html"&&!(filedir.isFile(this_[i].src))  ){   
                console.log(chalk.green(this_[i].text));
    
                fs.writeFileSync(this_[i].src,
                    "<!DOCTYPE html>\n"+
                    "<html lang=\"en\" style='height:100%;position:relative'>\n"+
                    "<head>\n"+
                    "<meta charset=\"UTF-8\">\n"+
                    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"+
                    "<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n"+
                    "<title>Document</title>\n"+
                    "<link rel=\"stylesheet\" href=\"./css/main.css\">"+
                    "</head>\n"+
                    "<body style='height:100%;position:relative'><div class='logobox' style='width:600px;height:425px;position: absolute;left: 0;right: 0;margin: auto;top: 50%;margin-top: -212px;'><img style='max-width:100%' src='https://s1.ax1x.com/2017/12/14/qjYxe.md.jpg'><h5 style='text-align:center;line-height:90px;font-size: 45px;color:gray'>Welcome to use front end build tools</h5></div></body>\n"+
                    "</html>\n"
                )
                continue
             }else{
                console.log(chalk.green(this_[i].text));
                fs.mkdirSync(this_[i].src);
             } 
             if(for_css=="css"&&i=="src_css"){
                fs.writeFileSync("./src/css/main.css",
                "*{padding:0;margin:0}\n"+
                "a{text-decoration:none}\n"+
                "ul,ol{list-style:none}\n"+
                 "img{border:none}\n"+
                 "br{font-size:0;line-height:0;clear:both}"
                )
             }
             if(for_css=="js"&&i=="src_js"){
                fs.writeFileSync("./src/js/main.js","")
             }
             
          }
       }
   }
}
 judge.call(Prompt)


if(!filedir.isFile("./.babelrc")){
    console.log(chalk.green("开始创建.babelrc"))
    filedir.write('./.babelrc',"{\"presets\": [[\"es2015\", { \"modules\": false }]],\"plugins\" : [ ]}")
   }
 
if(!filedir.isFile("./postcss.config.js")){
    console.log(chalk.green("开始创建postcss.config.js"))  
    filedir.write("./postcss.config.js","module.exports = {plugins: [require('autoprefixer'),require('cssnano')({preset: 'default' }),],}")
   }




console.log(chalk.cyan(
"-------------------\n"+
"所有文件初始化完毕完毕\n"+
"-------------------\n"
))
//===============================================================================================


console.log(chalk.cyan(
"-------------------\n"+
"等待监听启动,open Browser...\n"+
"-------------------\n"
))

//===============================================================================================

shelljs.exec("npm-run-all --parallel _watch httpserver rollup")


