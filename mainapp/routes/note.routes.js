module.exports = function(mainapp){
  var notes = require('../controllers/note.controller.js');

  mainapp.post('/notes', notes.create);

  mainapp.get('/notes', notes.findAll);

  mainapp.get('/notes/:noteId', notes.findOne);

  mainapp.put('/notes/:noteId', notes.update);

  mainapp.delete('/notes/:noteId', notes.delete);
}
