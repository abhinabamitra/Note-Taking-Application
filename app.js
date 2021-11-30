const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
const { demandOption, string } = require('yargs')

//const command = process.argv
//console.log(command)

//Customize yargs version
yargs.version('1.1.0')

//add,remove,read,list

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            //demandOption: true,
            type: 'string'
        },
        body:{
            describe:'The body of the note',
            demandOption: true,
            type: string
        }
    },
    handler: function(argv){
        console.log('Adding a new note!')
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function(){
        console.log('Removing the note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('Listing out all notes!')
    }
})

//Reading the note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note!')
    }
})

yargs.parse()

//console.log(yargs.argv)