# Automated Server-JS

#### Create public folder

#### Create index.html 

#### Fill in all standard html information

#### Something similar to this:

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>React App</title>
</head>
<body>
    This is my HTML file!
</body>
</html>
```

#### Use yarn to install a live server to see things in real time
```
yarn global add live-server
```
#### Verify install
```
live-server -v
```

### Adjust HTML to take in react rendering, 
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>React App</title>
</head>

<body>
    <div id="app"></div>
    This is my HTML!
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src = "/scripts/app.js"></script>
</body>

</html>
```
### You can also install npm install --save react@^16.0.0 react-dom@^16.0.0

### We need babel compiler.  It doesn't actually do anything, but it does allow our computer to understand jsx. Install this:
sudo npm install -g babel-cli@<version>
```
sudo npm install -g babel-cli@6.26.0
```

### Install presets to allow babel cli can use it to transform jsx into create element calls.
```
npm init
```

### Click enter through all the input's unless you want to change the version or your name.
### It should look something like this

```
{
  "name": "react",
  "version": "1.0.0",
  "description": "#### Create public folder",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ctmillaz/react.git"
  },
  "author": "Chad Miller",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ctmillaz/react/issues"
  },
  "homepage": "https://github.com/ctmillaz/react#readme"
}
```

### This generates a file in our project.  It's a package.json file.  It outlines all the dependecies.  It is similar to a pom.xml file if you are familiar with java.
### No we need to add the dependecies.  You can leave off the version if you want latest.  You can also run them individually.
```
npm install babel-preset-react
npm install babel-preset-env
```

### Create a src directory at the root of the program
### Create a scripts directory under public
### Create a file called app.js under scripts and src.

### Create a path to our code.  Then path to output of code. Put in presets we want to use. Add watch flag so that app.js file in scripts folder changes each time.
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

### Change directory to your project file and run live-server
```
cd /workspace/<project>
```
```
live-server public
```
### Node Modules directory is the equivalent of .mvn directory where all your dependencies are stored
### So just as you would do mvn install, you can also do npm install and that directory will come back


