console.log('starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./note.js');

var res = notes.addNote();
console.log(res);

console.log('Result:',notes.add(2,-5));







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