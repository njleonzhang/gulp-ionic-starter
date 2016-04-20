#ZRSM

本工程基于generator-ionic-gulp生成, 并按照gulp-angular的代码树风格进行了修改.

[generator-ionic-gulp](https://github.com/tmaximini/generator-ionic-gulp#readme)

[generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular)

配置开发环境的步骤:

# 1. 安装gulp
sudo npm install -g gulp

# 2. 进入zrsm_worker目录,安装npm依赖:
npm install

# 3. 启动项目
gulp

此时开发的web站点将通过默认浏览器打开, livereload也生效了.
修改代码的过程中,可以实时的在浏览器里看到变化.


项目源码结构:

app/src/:

commonStyles 里是一些公共的scss, 每个页面都会用到的.
component 里的每一个目录是一个组件(service, directive或者filter)
其他目录(例如login),则是一个一个的页面.


请尽量不要引入其他的第三方样式库, 因为有可能和ionic的样式冲突, 关于ionic:
http://ionicframework.com/


