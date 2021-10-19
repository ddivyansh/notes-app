//note the way of writing functions in JS
const fs = require('fs')
const chalk = require('chalk')



const add = function (title, body) {
    notes = loadnotes()

    // using find method
    const duplicatenote = notes.find((note) => note.title === title)
    // if duplicate note is not found
    if (duplicatenote === undefined) {
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
        console.log(chalk.green("note is added ! "))
    } else {
        console.log(chalk.red("note is taken ! "))
    }
}

const remove = function (title) {
    notes = loadnotes()
    if (notes.length >= 1) {
        const newNotes = notes.filter(function (note) {
            return note.title !== title;
        })
        savenotes(newNotes)
        console.log("Note removed !")
    } else {
        console.log("Note not removed !")
    }
}

//how to write json files
const savenotes = function (notes) {
    const jsonData = JSON.stringify(notes)
    fs.writeFileSync('notes.json', jsonData)
}

//how to read from json file.
const loadnotes = function () {
    //exception handling
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const jsonData = dataBuffer.toString()
        const data = JSON.parse(jsonData)
        return data
    }
    //when try block throws error do this
    catch (e) {
        return []
    }
}

const listNotes = () => {
    notes = loadnotes()
    console.log(chalk.green.bold("notes list"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    notes = loadnotes()

    const item = notes.find((note) => {
        return note.title === title
    })

    if (item === undefined) {
        console.log(chalk.red("Given title is not present"))
    } else {
        console.log("title: ",chalk.green.bold(item.title))
        console.log("body: ",item.body)
    }


}
//module.exports allows us to export multiple functions or objects to the other files.
module.exports = {
    text: text,
    add: add,
    remove: remove,
    listNotes: listNotes,
    readNotes: readNotes
}