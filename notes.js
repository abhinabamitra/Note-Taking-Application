const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return 'Your notes...'
}

const addnotes = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note added!')
    } else{
        console.log('Note already there!')
    }
}

const saveNotes = function(notes) {
    const datajs = JSON.stringify(notes)
    fs.writeFileSync('notes.json', datajs)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const removenotes = function(title){
    const notes = loadNotes()
    const notestokeep = notes.filter(function(note){
        return note.title !== title
    })

    if (notes.length > notestokeep.length)
    {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notestokeep)
    }
    else{
        console.log(chalk.red.inverse("No Note found!"))
    }
    
    //console.log("OTW to remove your note!")
}

module.exports = {
    getNotes: getNotes,
    addnotes: addnotes,
    removenotes: removenotes
}
