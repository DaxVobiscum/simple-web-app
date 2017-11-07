var gulp = require("gulp");
var path = require("path");
var webpack = require("webpack-stream");

gulp.task("js", () => {
	
	gulp.src("src/app/index.js")
		.pipe(webpack(require("./webpack.config.js"), require("webpack")))
		.pipe(gulp.dest("build/app"));
});

gulp.task("js-update", [ "js" ], () => {
	
	gulp.src("./build/app/*.*")
		.pipe(gulp.dest(path.resolve(__dirname, "web", "app")));
});

gulp.task("jsdev", [ "js-update" ], () => {
	
	gulp.watch("src/app/*.*(js|jsx)", { interval: 500 }, [ "js-update" ]);
});