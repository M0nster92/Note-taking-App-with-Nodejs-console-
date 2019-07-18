const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


yargs.command({
    command: 'add',
    description:'Add a new note',
    builder:{
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"Body of title",
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    description:'Remove a note',
    builder:{
        title:{
            describe:'Note to remove',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List your notes',
    handler: function(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse()

