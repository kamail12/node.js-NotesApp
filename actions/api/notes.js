const Note = require("../../db/models/note")

module.exports = {
    saveNote: function(req, res){

        const newNote = new Note({
            title: "Zadzwonić do wspólnika",
            body: "O godzinie 21:00 zadzwonić 😁"
        })
        
        newNote.save().then((note) => {
            console.log("Notatka została zapisana: " + note.title)
        }).catch((error) => {
            console.log("Błąd przy zapisywaniu notatki: " + error)
        })

        res.send("Strona Główna Działa")
    }
}

