const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = chalk.strikethrough.bold.red

const op = getNotes()
console.log(msg(op))

console.log(validator.isEmail('abhinabamitra19@gmail.com'))