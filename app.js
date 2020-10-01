let fs=require("fs")
let chalk=require("chalk")
let yargs= require("yargs")
const { argv } = require("process")
var notes = require("./notes")
var {addNotes, removeNotes, listNotes, readNotes} = notes


yargs.version('1.2.0')


yargs.command({
    command:"add",
    describe:"Adding a note!!",
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:" Note Title"
        },
        body:{

            demandOption:true,
            describe:"Body of Note",
            type:'string'
        }
    },
    handler:function (argv) {
        console.log(addNotes)
        addNotes(argv.title,argv.body)
    }
})


yargs.command({
    command:"remove",
    describe:"removing a note!!",
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:" Note Title"
        }
    },
    handler:function (argv) {
        removeNotes(argv.title)
    }
})

yargs.command({
    command:"listing",
    describe:"listing a note!!",
    handler:function () {
        listNotes();
        
    }
})

yargs.command({
    command:"read",
    describe:"Read a note!!",
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:" Note Title"
        }
    },
    handler:function (argv) {
        readNotes(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)



