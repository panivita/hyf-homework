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
    const findId = notes.findIndex(x => x.id === id);
    if (findId === -1) {
       return 'Error, notes dont found'
    }
    else {
        return notes[findId].content;
    }
}

console.log(getNoteFromId(5));

//Get all notes
function getAllNotesContent() {
    const notesContent = [];
    for (let i = 0; i < notes.length; i++) {
        const myContent = notes[i].content;
        notesContent.push(myContent);
    }
    return notesContent;
}
getAllNotesContent();

//Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        const myId = notes[i].id;
        const myContent = notes[i].content;
        console.log( `The note with id: ${myId}, has the following note text: ${myContent}.`);
    }
}
console.log(logOutNotesFormatted());

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
console.log(addMyNote('My first notes'));
console.log(addMyNote('One more notes'));
