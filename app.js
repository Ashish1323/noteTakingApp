let fs=require("fs")
let chalk=require("chalk")
let yargs= require("yargs")



yargs.version('1.2.0')


yargs.command({
    command:"add",
    describe:"Adding a note!!",
    handler:function () {
        console.log("adding a note!!");
    }
})


yargs.command({
    command:"remove",
    describe:"removing a note!!",
    handler:function () {
        console.log("removing a note!!");
    }
})

yargs.command({
    command:"listing",
    describe:"listing a note!!",
    handler:function () {
        console.log("listing a note!!");
    }
})

yargs.command({
    command:"read",
    describe:"Read a note!!",
    handler:function () {
        console.log("Read a note!!");
    }
})

console.log(yargs.argv)



