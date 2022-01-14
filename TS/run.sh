# TypeScript -> JavaScript
# Automated script to compile and run the test suite
# This is just a wrapper around the node command and is file specific
# serves the role of an examplary script
function run() {
    tsc index.ts && node index.js
}
run