const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]
console.log(process.argv)

switch (command) {
 case 'add':
    console.log('Adding note!')
}