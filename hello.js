require('./world'); //把world.js导入进来
require('./style.css'); //导入CSS文件,我们要给它指定一个css-loader才能正确解析CSS
function hello(str){
    alert(str);
}
hello('hello world');