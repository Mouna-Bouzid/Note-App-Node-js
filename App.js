console.log('starting app.js')

const yargs=require('yargs')
const notes=require('./notes.js')

// console.log("Yargs", yargs.argv)

var title=yargs.argv.title
var body=yargs.argv.body
var command=yargs.argv._[0]

if (command==="add"){
    console.log("Adding Note")
    notes.addingNote(title, body)
}
else if (command==="remove"){
    console.log("Removing Note")
    notes.removingNote(title)
}
else if (command==="read"){
    console.log("Reading Note")
    notes.readingNote(title, body)
}
else if (command==="list"){
    console.log("Specific Note")
    notes.listingNote(title, body)
}
else {console.log("ERROR")}
