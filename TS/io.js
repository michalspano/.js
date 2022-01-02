var args = process.argv;
var argc = args.length;
var GREEN_COLOR = "\x1b[32m";
var RESET = "\x1b[0m";
function ensureUsage() {
    if (argc < 3) {
        return false;
    }
    return true;
}
function ensureFileExists(filePath) {
    var fs = require('fs');
    if (!fs.existsSync(filePath)) {
        return false;
    }
    return true;
}
function readLines(path) {
    var fs = require('fs');
    var data = fs.readFileSync(path, 'utf8');
    var lines = data.split('\n');
    return lines;
}
function formatList(content) {
    for (var i = 0; i < content.length; i++) {
        console.log("" + GREEN_COLOR + (i + 1) + RESET + ". " + content[i]);
    }
}
console.log('Reading from a file...\n');
if (!ensureUsage()) {
    console.log("Usage: " + args[1] + " <filepath>");
    process.exit(1);
}
var filePath = args[2];
if (!ensureFileExists(filePath)) {
    console.log("File " + filePath + " does not exist.");
    process.exit(1);
}
var CONTENT = readLines(args[2]);
formatList(CONTENT);
