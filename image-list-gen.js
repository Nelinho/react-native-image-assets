// imports
const fs = require('fs'), path = require('path');

// Help
if (process.argv[2] === 'help' || process.argv[2] === 'h' || process.argv[2] === '--help' || process.argv[2] === '-h'){
    console.log(`\nUse:
    $ node image-list-gen  [ --folder=folder name ] [ --class=class name file (without ".js") ]
    Eg. $ node image-list-gen --folder=assets --class=MyImages\n\n`);
    return;
}

// images folder name
let imagesFolder = './assets/';

// Class name to build on root folder
let className = 'MyImages';

process.argv.forEach(function (val, index, array) {
    if (val.indexOf('--folder=') != -1){
        imagesFolder = val.substr(val.indexOf('=')+1);
    } else if (val.indexOf('--class=') != -1){
        className = val.substr(val.indexOf('=')+1);
    }
});

// Get list of files normalized to write in file
function getFilesListSync(recursive = false) {
    let arrFiles = Array();
    walkSync(imagesFolder, (file, path, s) => arrFiles.push({ file, path }), recursive);
    return normalizeArray(arrFiles);
}

// Loop on files and folders
function walkSync(currentDirPath, callback, recursive = false) {
    fs.readdirSync(currentDirPath).forEach(function (fileName) {
        var filePath = path.join(currentDirPath, fileName);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(fileName, filePath, stat);
        } else if (stat.isDirectory()) {
            if (recursive) {
                walkSync(filePath, callback, recursive);
            }
        }
    });
}

// generate 'requires' with static vars
function normalizeArray(arr) {

    let result = arr.map((item) => {           
        return `    static _${(item.file.substr(0, item.file.length - 4)).replace('-', '_')} = require('./${item.path}');`;
    });
    return result;
}

// Write file [arg: className] || MyImages.js
function writeFile(arr) {
    startFile = `export default class ${className} {\n`
    endFile = "\n}"
    fs.writeFileSync(`${className}.js`, startFile + arr.join('\n') + endFile, function (err) {
        if (err) { return console.log(err); }
    });
}

// finally execute script

writeFile(getFilesListSync());
console.log(`\n*** File ${className}.js generated with success! ***\n`);