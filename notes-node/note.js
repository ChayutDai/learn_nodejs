console.log('start note.js');

const fs = require('fs');

var addNote = (title, body) =>{
    var notes =[];
    var note = {
        title,
        body
    };

    try{
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch (e){
        
    }

    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length ===0){
        notes.push(note);
        fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    }

    
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting notes',title);
};
var removeNote = (title) => {
    console.log('Removing note', title);
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