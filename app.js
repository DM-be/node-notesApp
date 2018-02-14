console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

//var userName = os.userInfo().username;

//console.log(notes.age)

//fs.appendFileSync('greetings.txt', `Hello ${userName}`);

//console.log(userName)


var res = notes.add(1,2);
console.log(res)