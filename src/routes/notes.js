const { Router } = require('express');
const { 
  getNotes, 
  getNote, 
  updateNotes, 
  deleteNotes, 
  createNotes } = require('../controllers/notes.controllers');
const router = Router();

router.route('/')
  .get(getNotes)
  .post(createNotes)

router.route('/:id')
  .delete(deleteNotes)
  .put(updateNotes)
  .get(getNote)

module.exports = router;