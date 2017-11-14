# simple-web-app
A simple web app that includes a servlet, JSP, and React front-end. Work in progress.

To begin, run `npm install`.

If you want to hotswap to a server instance, run the following command in terminal to create the app config required for Gulp tasks prefixed with `tc-`. `YOUR_APP_PATH` is the absolute path to your server's working directory (deploy directory in Tomcat). 

`echo "{ \"appPath\": \"YOUR_APP_PATH\" }" > .appconfig`

After that Gulp tasks are as follows:

- `gulp js` builds the JavaScript and JSX files into `./build/app`.
- `gulp js-update` includes `js` and outputs to `./src/main/webapp/app` (used to create WAR packages).
- `gulp-js-dev` includes `js-update` and watches for changes to included files.
- `gulp tc-update` includes `js` and outputs to `YOUR_APP_PATH/app`.
- `gulp tc-dev` includes `tc-update` and watches for changes to included files.
