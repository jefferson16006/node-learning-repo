const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-fileSync.txt',
    `This is the combination: ${first}, ${second}`
)