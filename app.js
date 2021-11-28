const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = chalk.bold.grey

const op = getNotes()
console.log(msg(op))

console.log(msg(validator.isEmail('abhinabamitra19@gmail.com')))