const express = require('express')
const router = express.Router()

const noteActions = require("../actions/api/noteActions")

//pobieranie notatek
router.get('/notes', noteActions.getAllNotes)

//pobieranie notatki po id
router.get('/notes/:id', noteActions.getNote)

//tworzenie notatek
router.post('/notes', noteActions.saveNote) 

//edycja notatek
router.put('/notes/:id', noteActions.updateNote)

//usuwanie notatek
router.delete('/notes/:id', noteActions.deleteNote)

module.exports = router;
