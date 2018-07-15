var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

//Tell nodemon that we have a task; default task - pass in a function to setup nodemon
gulp.task('default',function(){
    nodemon({
        //tell what needs to be executed
        script:'app.js',
        //tell what needs to be watch for (files with .js extension)
        ext:'js',
        //setup an environment
        env:{
            PORT:8000
        },
        //Every time I install, don't want to reinstall all packages, ignore everything under node modules
        ignore: ['./node_modules/**']
    })
    //Let us know when the app server is restarted
    .on('restart', function(){
        console.log('Gulp is Restarting...');
    });
});

