declare var require: any;
declare var process: any;

// Declared constants
const args: string[]        = process.argv;
const argc: number          = args.length;
const GREEN_COLOR: string   = "\x1b[32m";
const RESET: string         = "\x1b[0m";

// Expect 2 command-line arguments
function ensureUsage(): boolean {
    if (argc < 3) { return false; }
    return true;
}

// Make sure that the provided file exists
function ensureFileExists(filePath: string): boolean {
    const fs = require('fs');
    if (!fs.existsSync(filePath)) {
        return false;
    }
    return true;
}

// Read from a file and assign each row to an array
function readLines(path: string): string[] {
    const fs = require('fs');
    const data: string = fs.readFileSync(path, 'utf8');
    const lines: string[] = data.split('\n');
    return lines;
}

// Format the output
function formatList(content: string[]): void {
    for (let i: number = 0; i < content.length; i++) {
        console.log(`${GREEN_COLOR}${i + 1}${RESET}. ${content[i]}`);
    }
}

console.log('Reading from a file...\n');

if (!ensureUsage()) {   
    console.log(`Usage: ${args[1]} <filepath>`);
    process.exit(1);
}

const filePath: string = args[2]; 

if (!ensureFileExists(filePath)) {
    console.log(`File '${filePath}' does not exist.`);
    process.exit(1);
}

const CONTENT: string[] = readLines(args[2]);
formatList(CONTENT);