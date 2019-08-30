const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes.js')

console.log(chalk.green.inverse.bold(getNotes()))

console.log(validator.isURL('example.com'))