console.log('start note.js');

const fs = require('fs');

var fetchNotes = () =>{
    try{
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
        return notes;
    } catch (e){
        return [];
    }
};

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) =>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length ===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting notes',title);
};

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes();
    //fillter notes, remove the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

module.exports ={
    addNote,
    getAll,
    getNote,
    removeNote
};





//console.log(module);

//module.exports.age = 25;

/*
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};

module.exports.add = (a,b) => {
    return a+b;
};
*/