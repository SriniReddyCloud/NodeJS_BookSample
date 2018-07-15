NodeJS Learning
---------------

Begin/setup the project:
-npm init

Install express package as first thing
-npm install express --save

create an basic webserver using Express by creating app.js file
Create new file called app.js (include express)
-Include express framework
-Create port
-Setup handler for route (app.get('/'))
-listen to port (app.listen)

Run the web server
-node app.js

Avoid restart webserver by including gulp package - Watch for file changes and automatically restart (Gulp is a task runner)
npm install gulp --save
Use gulp to run the service (Task Runner) instead of using node; Following command will give gulp access from the command line
-npm install gulp -g

Need  Nodemon plugin to use gulp as task runner
-npm install gulp-nodemon --save

Gulp looks for gulpfile.js file; create the gulpfile in the project
-Add the gulp, nodemon package in gulpfile.js
-Include the task for gulp using nodemon to configure (Service/script to execute (app.js), watch for changes with extension (js), environment(PORT), Ignore watch list) 
-Watch the execution on Restart(logging)

Run the service using gulp instead of node
-gulp

Update app.js file to create routes
-Create instance for router (express.router())
-app.use

MongoDB Installation [Entity Data Framework]
-npm install mongoose --save

To implement Post method, install body parser
-npm install body-parser --save

For Unit Testing, Install gulp-mocha framework with Should (assertion framework) and Sinon (mocking frameword)
-npm install gulp-mocha should sinon --save

For integration testing, Install supertest (only dev environments)
-npm install supertest gulp-env --save-dev

HATEOS - Hypertext As The Engine of Application State
Helps to build self document for API

https://medium.com/@mosheezderman/how-to-set-up-ci-cd-pipeline-for-a-node-js-app-with-jenkins-c51581cc783c

MongoDB
CIDR Block IP: 0.0.0.0/0
User Name: IoT_User
Password: N!$$@N
