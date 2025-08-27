// Load dependencies
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var merge = require('lodash.merge');

// Load Gulp plugins automatically into an object
var gulpPlugins = gulpLoadPlugins({
	config: merge(
		require('./node_modules/mod-build/package.json'), // use mod-build's dependencies as well
		require('./package.json')
	)
});

// Extend this object with other modules
gulpPlugins.browserSync = browserSync;

// Load default Gulp tasks from mod-build module
var gulpTasks = require('./node_modules/mod-build/gulp-tasks/tasks')();

// Default Gulp tasks settings
var gulpSettings = require('./node_modules/mod-build/gulp-tasks/settings')();

// Site settings & data
var siteData = require('./siteconfig.js');

// Template data
var templateData = require('./template.js');

// Data to pass to Gulp tasks
var gulpTasksConfigOpts = {
	gulp: gulp,
	gulpPlugins: gulpPlugins,
	gulpSettings: gulpSettings,
	siteData: {...siteData(), ...templateData()}
};

// Init Gulp tasks from mod-build Gulp config file
Object.keys(gulpTasks).forEach(function(taskName) {
	var task = gulpTasks[taskName];

	gulp.task(taskName, task.subtasks, task.func(gulpTasksConfigOpts));
});
