console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./note.js');

var command = process.argv[2];
console.log('Command:', command);
console.log(process.argv);
if(command === 'add'){
    console.log('Adding new note')
}else if(command === 'list'){
    console.log('Listing all notes')
}else if(command === 'read'){
    console.log('Reading note')
}else if (command === 'remove'){
    console.log('Removing note')
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