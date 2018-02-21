
const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);



/*
var obj = {
    name: 'Dai'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "Dai","age": 23}';
console.log(typeof personString); //string
console.log(personString);

var person = JSON.parse(personString);
console.log(typeof person); // object
console.log(person);
*/
