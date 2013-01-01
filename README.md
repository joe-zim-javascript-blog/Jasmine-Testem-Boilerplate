#Jasmine-Testem Boilerplate
This repository contains a bit of boilerplate for getting me started with Backbone Marionette/Twitter Bootstrap/RequireJS and sets up the necessary files and configuration to use Testem.
##Getting Started
1. Just clone this repository anywhere you want to start up a web app.:
	```
	git clone https://github.com/joe-zim-javascript-blog/Jasmine-Testem-Boilerplate.git
	```

2. Make sure you have Node.js and Testem installed
	I won't show you how to install Node.js. [Just go do it yourself](http://nodejs.org/).
	Install Testem via NPM:
	```
	npm install testem -g
	```

3. If you want to change the file structure, make sure you update testem.yml's `src_files` and `test_page` property to point to the right folders. [Read more below](#updating-testemyml-on-windows) about updating testem.yml on Windows machines below.

4. This is set up to run Chrome and Firefox for testing. If you want to change these, make sure you change `launch_in_dev` in the testem.yml file. [Read more about Testem Launchers here](https://github.com/airportyh/testem#launchers) and [read more below](#updating-testemyml-on-windows) about updating testem.yml on Windows machines below.

5. In the current folder setup, add your spec files to /test/spec and then open /test/spec-runner.js to add the spec files to the list of spec files to run:
	```javascript
	// Line 57
	spec.push('spec/your_file_here');
	```
	Just keep using `spec.push` to add each file. Remember, don't add the .js extension to the file name.

6. Run `testem` from the command line and watch your tests fail! (pass?)

##Updating testem.yml on Windows
I don't know if this is specific to me and my computer, but I couldn't get Testem to work when I edited the configuration files directly in my normal code editor. Testem reads the file assuming it is in UTF-8 format, and for whatever reason that wasn't what my editor was saving it in. I opened the file in Notepad and hit "Save As" and near the bottom of the window I changed "Encoding" to "UTF-8".