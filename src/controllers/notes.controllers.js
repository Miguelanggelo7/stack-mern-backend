const notesCtrl = {};
const Note = require('../models/Note'); 

notesCtrl.getNotes = async(req, res) => {
  const notes = await Note.find();
  console.log(notes)
  res.json(notes);
};

notesCtrl.createNotes = async(req, res) => {
  const { title, content, author, date} = req.body;
  const newNote = new Note({
    title,
    content,
    author,
    date,
  })
  await newNote.save();
  res.json({message: 'note saved'});
};

notesCtrl.getNote = async(req, res) => {
  const note = await Note.findById(req.params.id)
  res.json(note);
};

notesCtrl.updateNotes = async(req, res) => {
  const { title, content, author} = req.body;
  await Note.findOneAndUpdate({_id:req.params.id}, { 
    title,
    content, 
    author,
  })
  res.json({message: "Note Updated"})
};

notesCtrl.deleteNotes = async(req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({title: "Note deleted"})
};


module.exports = notesCtrl;