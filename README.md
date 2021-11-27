### Starting with node js (concept + 1st application)
```
// require keyword is used to access any whether its a node package or npm package.
for npm package we have to install them, while node js packages can be accessed globally.

// const fs=require("fs");
//above fs is node module, but if wanted to use a locally saved js file then 
``` require("./path/file.js") ```

// writeFileSync allows us to access/create a file and add content. It's a sycnhronus function

// fs.writeFileSync("notes.txt","Hi this the new file");

// appendFileSync: allows to append new text to a file. It adds new text to a file.

// fs.appendFileSync("notes.txt","  This is the newly added text");

// module.exports allows us to export functions or objects to the other files. The value held by module.export is returned to the require keyword.

module.exports=text;

npm init: to install node package manager.
npm install package_name@version : to install any package from npm.

part of validator:-
isEmail: checks whether the entered string is email or not. 
isUrl: checks whether url or not.


```
in package.json file everything needs to be in "" ?

1. For builing notes app we're using different node packages.
    * vaildator: it allows us to validate all sorts of strings.
    * chalk: it allows us to edit the text on the console.
    * nodemon: allows us to run node js applications and test it out.
        * ```npm install nodemon@.. -g ```: g signifies it's a global package.
        * while installing nodemon one might face problems regarding running scripts, open powershell as admin,
        ```Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ```
        * nodemmon file.js : to run our file using nodemon, it runs the script the moment we save script. to stop nodemon ctrl+c.

2. For accessing the data from the console we use `process.argv[]`, process is an object and argv is a JS array vector. We can also use `readline-sync` package from node js.
    * or we can use `yargs` npm package to make our life easier, to parse the i/p.
    `npm install yargs@version`, it stores the parsed i/p in argv.
    * yargs.version : to set the version ? i guess.
    * yargs.command : to set up a command. it has multiple components command/describe/handler/builder. Command is a method of yargs.
    * builder is a property of yargs allows us to add the more customized options to the command i.e title/body etc.
    * to make a particular option required use `demandOption: True`.
    * to make sure an option is of particular type, use `type: " data Type" `.
    * to make sure yargs is parsing the input use `yargs.parse()` at the end.
    * ```node file.js --help or node file.js commandName --title="" --body="" ``` : to view the help section of particular application or give a title/body.

3. for storing files we'd be using JSON, JSON contains string data
    * to convert JS objects into JSON strings we use : `JSON.stringify(objectName)`. We can't access the value of a JSON string as we do for normal objects
    * To convert JSON strings back to JS objects we use `JSON.parse(JSONFileName)`
    * in order to read the data from .JSON files, if we use the fs module (fs.writeFileSync('file path')), the return value is data buffer. To convert that data buffer in string format we use variable.toString() method. Further than this if we have to access any specific propery of JSON files we have to parse it as we discussed above.
    *readlinesync-->convert databuffer to string-->JSON.parse that-->access any property*

4. creating add function: for storing function we will use notes.js, and export all those fucntions in app.js. We'd have a notes which is going to be an array of objects. 
    * loadnotes(): a function which will load the current list of notes from notes.json. We have used exception handling to counter the case when our notes.json doesn't exist in the beginning. so when it'll throw an error we'd return an empty array.
    * add function: It's loading the current list of notes and pushing the new object consisting of a title and body into notes array. 
    * savenotes():  It'' write the new notes array into notes.json.
    * we did one more thing in add(), we handled the case of duplicates, made a duplicatNotes array to store the duplicates, filter function of an array returns an array that passes a particular test(given by a function), it does not changes the orginal array. **Filter function iterates a function over an array in the same manner as map function, but it returns the selected elements as per the criteria whereas map converts element of an array into something else**
        * if the length of duplicate array is equal to 0, then no duplicate was found and is safe to add the note.

5. creating remove function: Passing the title to be removed, and all the notes whose title doesn't match with the title..they're stored in a different array, and newnNotes array is stored in Notes.json.


### Arrow functions:
    1. Arrow functions do not bind their own `this` value. So it's advisable to not to use this keyword in arrow functions, when arrow functions are used as a method in objects. 
    2. Avoid using arrow functions in methods.
    3. standard functions have their own this bindings.
    4. use es6 standard while writing function as method.
    ` (parameter)=>{} `

foreach method of array: when we've iterate any function over an array, but we don't want a return array, we use foreach method.
    `a.foreach(function(){})`  
find function of array: to find a particular element in an array, the moment it finds the element it returns that element.
    `const item= array.find((item)=>{function defination})`
    
6. ### Debugging in Node.js 
    * use `debugger` at a line till where you want to run the application. `node inspect app.js`, if you get the error on windows then run `node --inspect-brk app.js`. Debugegr uses chrome's V8 engines debugger.
    * now open [chrome://inspect/#devices url]-> click on target's inspect.
    * once youre done with the debugger, enter restart to restart the debugger.
    
