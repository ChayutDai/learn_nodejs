console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yarg = require('yargs');

const notes = require('./note.js');

const argv = yarg.argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('Process',process.argv);
console.log('Yarg',argv);

if(command === 'add'){
   var note = notes.addNote(argv.title,argv.body);
   if (note){
       console.log('Note created');
       notes.logNote(note);
   }else{
       console.log('Note title taken');
   }
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note found');
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }
}else if (command === 'remove'){
    var noteRemoved= notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(noteRemoved);
    console.log(message);
}
else{
    console.log('Comman not recognized')
}














//-------- using 3rd party module ----------
/*
console.log(_.isString(true));
console.log(_.isString('True'));
console.log(_.uniq([2,1,2,'chayut','chayut','mike']));
*/
//-------- using 3rd party module ----------






//--------- requiring your own files  --------

//var res = notes.addNote();
//console.log(res);
//console.log('Result:',notes.add(2,-5));

//--------- requiring your own files  --------




// ----------- using Require ----------
/*
    var user = os.userInfo();
    fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`,function (err){
        if (err){
            console.log('Unable to write to file');
        }
    });

     fs.appendFile('greetings.txt',`Hello ${user.username}!`)

    fs.appendFileSync('greetings.txt','Hello world !');
*/
// ----------- using Require ----------