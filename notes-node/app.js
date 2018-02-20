console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./note.js');

//-------- using 3rd party module ----------

console.log(_.isString(true));
console.log(_.isString('True'));
console.log(_.uniq([2,1,2,'chayut','chayut']));

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