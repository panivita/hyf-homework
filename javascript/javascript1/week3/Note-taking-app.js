// Save a note
const notes = [];
function addNote(content, id) {
    if (typeof (content) === 'string' && typeof (id) === 'number' && content && id) {
        const myNotes = { content, id };
        notes.push(myNotes);
    }
    return notes;
}
console.log(addNote('victoria', 5));
console.log(addNote('anna', 8));

//Get a note
function getNoteFromId(id) {
    for (let i = 0; i < notes.length; i++) {
        const myId = notes[i].id;
        if (myId === id && typeof (id) === 'number') {
            return notes[i];
        }
        else {
            return 'Error, notes dont found';
        }
    }
}
console.log(getNoteFromId('anna'));

//Get all notes
function getAllNotes() {
    const notesContent = [];
    for (let i = 0; i < notes.length; i++) {
        const myContent = notes[i].content;
        notesContent.push(myContent);
    }
    return notesContent;
}
getAllNotes();

//Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
      return 'The note with ' + notes[i].id + ', has the following note text: ' + notes[i].content;     
    }   
}
logOutNotesFormatted();

//Unique feature

