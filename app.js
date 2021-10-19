//importing the validator package
const validator = require("validator")
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//parsing commands using yargs
yargs.command({
    command: 'add',
    describe: ': to add a note',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'Notes body',
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.add(argv.title, argv.body)
    }

})
//remove~
yargs.command({
    command: 'remove',
    describe: ': to remove a note',
    builder: {
        title: {
            describe: ": title to be removed",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.remove(argv.title)
    }
})

//read
yargs.command({
    command: 'read',
    describe: ': to print a note',
    builder: {
        title: {
            describe: ": title to be displayed",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.readNotes(argv.title)
    }
})

//list
yargs.command({
    command: 'list',
    describe: ': to list the notes',
    handler: function () {
        notes.listNotes();
    }
})
// this console statement allows us to parse the argv component of yargs
yargs.parse()