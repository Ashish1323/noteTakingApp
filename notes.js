let chalk=require("chalk")
var fs= require("fs");


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
        console.log("New Note Added")
    } 
    else{
        console.log("Note Title Taken!!")
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

const listNotes = () =>{
    var notes=loadnotes()
    console.log("Your Notes")
    notes.forEach((note) =>  {
        console.log("Title: " + note.title +" ,Body: " + note.body)
    })
}

const readNotes = (title) => {
    //loading notes
    var notes=loadnotes()
    var Note=notes.find((note) => note.title===title)// finding the note
    
    console.log("Title: " + Note.title +" ,Body: " + Note.body)
}


// module exports
module.exports= {addNotes : addNotes, removeNotes:removeNotes, listNotes:listNotes, readNotes:readNotes }