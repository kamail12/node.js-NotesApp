const Note = require("../../db/models/note")

module.exports = {
    
    getAllNotes: async function(req, res){
        let documents;
        try {
             documents = await Note.find({});
        } catch (error) {
           return res.status(500).json({message: error.message})
        }

        res.status(200).json(documents);

    },

    getNote: async function(req, res){
        //Pobieranie notatki po id
        let note;
        const id = req.params.id;
        try{
            note = await Note.findOne({_id: id})
            if (!note) {
                return res.status(404).json({message: 'Notatka nie została znaleziona'})
            }
        }catch(error){
            return res.status(500).json({message: error.message})
        }


        res.status(200).json(note);
    },

    saveNote: async function(req, res){
        const title = req.body.title
        const body = req.body.body
        let note;
    
        try{
            note = new Note({title,body,})
            note = await note.save()
        }catch(error){
            return res.status(500).json({message: error.message})
        }
    
        res.status(201).json({ _id: note._id }); // Zwracamy _id notatki
    },

    updateNote: async function(req, res){
        const id = req.params.id
        const title = req.body.title
        const body = req.body.body
        let note;

        try{
            note = await Note.findOne({_id: id})
            note.title = title;
            note.body = body;
            await note.save();
        }catch(error){
            return res.status(500).json({message: error.message})
            
        }


        res.send("Notatka została zakutlizowana a jej treść to: " + note)
    },

    deleteNote: async function(req, res){
        const id = req.params.id
        let note;
        
        try{
            note = await Note.findOneAndDelete({_id: id})
            if (!note) {
                return res.status(404).json({message: 'Notatka nie została znaleziona'})
            }
            res.send("Notatka została usunięta")
        }catch(error){
            return res.status(500).json({message: error.message})
        }
    },

    deleteNoteAll: async function(req, res){
        try{
            await Note.deleteMany({})
            res.send("Wszystkie notatki zostały usunięte")
        }catch(error){
            return res.status(500).json({message: error.message})
        }
    }
}

