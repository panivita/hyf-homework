// Save a note
const notes = [];
function addNote(content, id) {
    if (typeof (content) === 'string' && typeof (id) === 'number' && content && id) {
        const myNotes = { content, id };
        notes.push(myNotes);
    }
    return notes;
}
addNote('first notes', 5);
addNote('one more', 8);
console.log(notes);

    //Get a note
function getNoteFromId(id) {
    const findId = notes.findIndex(x => x.id === id);
    if (findId === -1) {
       return 'Error, notes dont found'
    }
    else {
        return notes[findId].content;
    }
}
const resultGetNoteFromId = getNoteFromId(5);
console.log(resultGetNoteFromId);

//Get all notes
function getAllNotesContent() {
    const notesContent = [];
    for (let i = 0; i < notes.length; i++) {
        const myContent = notes[i].content;
        notesContent.push(myContent);
    }
    return notesContent;
}
const resultGetAllNotesContent = getAllNotesContent();
console.log(resultGetAllNotesContent);

//Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        const myId = notes[i].id;
        const myContent = notes[i].content;
        return `The note with id: ${myId}, has the following note text: ${myContent}.`;
    }
}
const resultLogOutNotesFormatted =logOutNotesFormatted();
console.log(resultLogOutNotesFormatted);

//Unique feature. Create notes without entering an id, an id should be generated automatically.

function addMyNote(content) {
    if (typeof (content) === 'string' && content) {
        const currentNotes = {
            id: notes.length + 1,
            content: content,
        };
        notes.push(currentNotes);
    }
}
const addMyFirstNote = addMyNote('My first notes');
console.log(addMyFirstNote);
const addMySecondNote = addMyNote('One more notes');
console.log(addMySecondNote);
