import gulp from "gulp";
import sitemap from "gulp-sitemap";

gulp.task("sitemap", function (done) {
  gulp
    .src("dist/**/*.html", {
      read: false,
    })
    .pipe(
      sitemap({
        siteUrl: "https://www.kim-laboratory.net/",
      }),
    )
    .pipe(gulp.dest("./dist"));
  done();
});

gulp.task("default", gulp.series("sitemap"));
