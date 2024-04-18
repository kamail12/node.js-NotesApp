const Note = require("../../db/models/note")

module.exports = {
    
    getAllNotes: function(req, res){
        //Pobieranie wszystkich notatek
        res.send("Pobieranie wszystkich notatek")
    },

    getNote: function(req, res){
        //Pobieranie notatki po id
        res.send("Pobieranie notatki po id")
    },

    saveNote: function(req, res){

        const title = req.body.title
        const body = req.body.body
        

        res.send(`Notatka została stworzona jej tytuł to ${title} a treść to ${body}`)
    },

    updateNote: function(req, res){
        //Aktualizacja notatki
        res.send("Aktualizacja notatki")
    },

    deleteNote: function(req, res){
        const id = req.params.id

        //Usuwanie notatki
        res.send("Usuwanie notatki o id: " + id)
    }
}

