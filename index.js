const retry = require('./app.retry').retry
const chalk = require('chalk')

const testing = (content) => {
    let randomNum = Math.random() * 10
    if(randomNum > 5) return content 
    return null
}

let result = retry(5, testing, ['hello world'])
console.log(result)
chalk.bgMagenta(result)