const { readFile, writeFile } = require('fs').promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile(
            './content/result-fileAsync.txt',
            `This is the combination: ${first}, ${second}`,
            {flag: 'a'}
        )
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}

start();


// USING PROMISES FOR ASYNCHRONOUS FUNCTIONS

// const getPath = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else{
//                 resolve(data);
//             }
//         })
//     })
// }

// getPath('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
