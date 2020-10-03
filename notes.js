let chalk=require("chalk")
var fs= require("fs");

// function to add a new note
const addNotes = (title,body) =>{
    // load previous notes
    var notes=loadnotes()

    // checking duplicate notes
    var duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body:body
        })
        // saving notes
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } 
    else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
   
}


// function to remove a note by it's title
const removeNotes = (title) => {
    // load previous notes
    var notes=loadnotes()
    // remove notes logic
    var removedNotes= notes.filter((note) => {
        return note.title!==title      
    })

    if(notes.length > removedNotes.length){
        console.log(chalk.green.inverse("note removed!!"))
        // saving notes
        saveNotes(removedNotes)
    }
    else{
        // Error Handling
        console.log(chalk.red.inverse("note not found!!"))
    }
     

}

// function to find all notes!!
const listNotes = () =>{
    var notes=loadnotes()
    console.log(chalk.inverse('Your notes'))
        notes.forEach((note) =>  {
        console.log("Title: " + note.title +" ,Body: " + note.body)
    })
}

// function to find a single note by it's title!
const readNotes = (title) => {
    //loading notes
    var notes=loadnotes()
    var note=notes.find((note) => note.title===title)// finding the note
    
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

// loading data from the file
let loadnotes = () =>{ 
    try{
        // geting data from the file!!
        var dataBuffer= fs.readFileSync("notes.json") // returns binary data
        var data=dataBuffer.toString() //binary to string
        return JSON.parse(data) //string to JSON
    }
    catch(e){
        // file error handling
        return []
    }
    
}

// saving function
let saveNotes = (notes) => {
    let stringData = JSON.stringify(notes) // JSON to string
    fs.writeFileSync("notes.json",stringData) // String to Writing in File
}


// module exports
module.exports= {addNotes : addNotes, removeNotes:removeNotes, listNotes:listNotes, readNotes:readNotes }