var gulp = require("gulp");
var java = require("java");
var path = require("path");
var webpack = require("webpack-stream");

var appConfig = require("./.appconfig");

var jsSrcGlob = "src/main/js/*.*(js|jsx)";

gulp.task("js", () => {
	
	return gulp.src("src/main/js/index.jsx")
		.pipe(webpack(require("./webpack.config.js"), require("webpack")))
		.pipe(gulp.dest("build/app"));
});

gulp.task("js-update", [ "js" ], () => {
	
	return gulp.src("./build/app/*.*")
		.pipe(gulp.dest(path.resolve(__dirname, "src", "main", "webapp", "app")));
});

gulp.task("js-dev", [ "js-update" ], () => {
	
	gulp.watch(jsSrcGlob, { interval: 500 }, [ "js-update" ]);
});

gulp.task("tc-update", [ "js" ], () => {
	
	var tomcatWorkingDir = appConfig.appPath;
	
	if (!!tomcatWorkingDir) {
		
		var clientDir = path.resolve(tomcatWorkingDir, "app");
	
		console.log("Deploying to client directory: " + clientDir);
		
		return gulp.src("./build/app/*.*")
			.pipe(gulp.dest(clientDir));
	}
	else {
		
		throw new Error("Unable to determine Tomcat working directory.");
	}
})

gulp.task("tc-dev", [ "tc-update" ], () => {
	
	gulp.watch(jsSrcGlob, { interval: 500 }, [ "tc-update" ]);
});
