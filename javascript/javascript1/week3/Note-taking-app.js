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