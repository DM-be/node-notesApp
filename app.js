console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;


const command = argv._[0];
switch (command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body)
        if(!note)
        {
            console.log("note title already in use")
        }
        break;
    case 'list':
        var allNotes = notes.getAll();
        allNotes.forEach(note => console.log(`title: ${note.title} body: ${note.body}`));
        break;
    case 'read':
        var note = notes.getNote(argv.title)
        console.log(`title: ${note.title} body: ${note.body}`)
        break;    
    case 'remove':
        if(notes.removeNote(argv.title))
        {
            console.log("note was removed")
        }
        else{
            console.log("no note was found to remove")
        }
        break;

    default:
    console.log('command not recognized')
        break;
}
