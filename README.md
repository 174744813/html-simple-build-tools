# html-simple-build-tools
构建html 一键自动化压缩 css js images 支持ES6模块化。减少前端开发重复劳动(不依赖webpack,和gulp)完全利用npmscript,<br>
如果业务中遇到一些项目 你不想用webpack或gulp这种重型工具<br>
那请download本项目<br>
优点:支持 css js images一键压缩 支持ES6模块化<br>



步骤<br>
按名称保存本页的文件<br>
1 npm install<br>
2 npm run dev 开发<br>
3 npm run build 打包<br>


这里简要说明一下<br>
package.json非常熟悉就是一些经常用的依赖<br>
*_watch.js*这个的功能是监听你在src工作区的工作 包括文件的增删改 并把你的改动复制到dist文件夹对应的位置<br/>
postcss.config.js 这个文件是postcss默认的config文件功能是压缩dist/css文件夹下所有的css<br>
create.js 它的作用是初始化并创建dist和src两个文件夹 和里面的一些初始化文件<br>
jsmini.js 它的作用是压缩dist/js里所有的js<br>
.babelrc 它的作用是编译ES6<br>
rollup.config.dev.js 它的作用是支持ES6的模块化打包 默认你的工作区的js入口是src/js/main.js 会被打包成dist/js/bundle.js.<br>也就是说你在main.js里所import的模块 最终都被打进bundle.js.如果要在页面啊引入npm安装的包 ,<br>例如jquery 请这样添加external: ['$',path.resolve( './node_modules/jquery' ),'_',path.resolve('./node_modules/underscore')] ，然后在js里就可以import $ from 'jquery'了 

