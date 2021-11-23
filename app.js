/*
//const firstname = require('./utils.js')
const addition = require('./utils.js')

const sum = addition(12,-8)

//const name = "Abhinaba"

console.log(sum)
*/
const validator = require('validator')
const getNotes = require('./notes.js')

const op = getNotes()
console.log(op)

console.log(validator.isEmail('abhinabamitra19@gmail.com'))