console.log('starting notes.js');

const fs =  require('fs');



module.exports.age = 25;
module.exports.add = (a, b) => {
    return a + b
}

const fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (error) {
        return [];
    }
}

const saveNotes = (notes) => {
    try {
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } catch (error) {
        
    }
    
} 



const isDuplicatedNote  = (toCheckNote) =>
{
    let duplicateNotes = fetchNotes().filter(note => note.title == toCheckNote.title);
    return (duplicateNotes.length > 0) 
}


const addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    
    if(!isDuplicatedNote(note))
    {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}




const getAll = () => fetchNotes();

const getNote = (title) => {
    var notes = fetchNotes();
    return notes.find(note => note.title === title);
    
}

const removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes  = notes.filter(note => note.title !== title)
    saveNotes(filteredNotes);
    return !(filteredNotes.length === notes.length)

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
    
}


