console.log('start note.js');


var addNote = (title, body) =>{
    console.log('Adding note', title, body);
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