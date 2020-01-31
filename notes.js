const fs=require('fs')

var fetchNotes=()=> {
    try {
        return JSON.parse(fs.readFileSync('notes.json')) 
    } catch (error) {
        return notes=[]
    }
}

var addingNote =(title,body)=>{

    var notes=fetchNotes();
    
    var note={
        title,
        body
    }
    notes.push(note)

    fs.writeFileSync("notes.json", JSON.stringify(notes))
}
var removingNote=(title)=>{
    var notes=fetchNotes()
    var filteredNotes=notes.filter((note)=>(note.title !== title))
     fs.writeFileSync("notes.json", JSON.stringify(filteredNotes))   
}

var readingNote=(title,body)=>{
    var notes=fetchNotes()
    var filteredNotes=notes.filter((note)=>(note.title === title))
     console.log("Tiltle: ",filteredNotes[0].title, "body: ", filteredNotes[0].body)
}

var listingNote=(title,body)=>{
    var notes=fetchNotes()
    
    notes.forEach((note) => logNote(note))

}
var logNote=(note)=>{
    console.log("*********************")
    console.log("Tiltle: ",note.title);
    console.log("body: ", note.body);
    
}

module.exports={
    addingNote,
    removingNote,
    readingNote,
    listingNote
}