## project-bin-path 

![build description](https://travis-ci.org/ajaymathur/project-bin-path.svg?branch=master)

> Find path to local bin of Node.js or NPM package

***Inspired by [sindresorhus/pkg-dir](https://github.com/sindresorhus/pkg-dir)***

### Install:

`npm install project-bin-path`

or 

`yarn add project-bin-path`

### Usage:

Project structure:

```
+Users/
    +ajaynarainmathur/
        +test-project/
            +node_modules/
                +.bin/
            +package.json
            +dist/
                +foo.js
```

```javascript
// foo.js
const projectBinPath = require('project-bin-path')

projectBinPath(__dirname).then(binPath => {
    console.log(binPath);
    // `/Users/ajaynarainmathur/test-project/node_modules/.bin`
});
```

### Api:

`projectBinPath([cwd])`

=> Returns a promise of path to `.bin` folder of the project or `null` if project is not found

### projectBinPath.sync([cwd])

=> Returns the path to `.bin` of the project or `null`.

#### cwd

=> Directory to start from.

Type: `string`<br />
Default: `process.cwd()`
