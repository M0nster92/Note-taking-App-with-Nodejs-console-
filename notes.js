const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return "your Notes....";
}

const addNotes = function (title, body){
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title === title)

    debugger
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    } else{
        console.log('Note title already taken!')
    }

}

const removeNotes = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('Note not found'));
    }
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes:'))

    notes.forEach ((note)=>{
        console.log(note.title)
    })
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Title not found'))
    }
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes:listNotes,
    readNote:readNote
}