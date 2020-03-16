const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
},
{
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
},
{
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
},
{
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
},
{
    songId: 5,
    title: 'When is enough too little?',
    artist: 'Artist',
},
];

const myPlaylist = [];
function addSongToDatabase(title, artist) {
    if (typeof (title) === 'string' && typeof (artist) === 'string' && title && artist) {
        const song = {
            songId: songDatabase.length + 1,
            title: title,
            artist: artist
        };
        songDatabase.push(song);
    }
}
addSongToDatabase('Olivia', 'Rasmus Seebach');
console.log(songDatabase);

function getSongByTitle(title) {
    for (let i = 0; i < songDatabase.length; i++) {
        const titleKey = songDatabase[i].title;
        if (titleKey === title) {
            return songDatabase[i];
        }
    }
}
const searchedSong1 = getSongByTitle('When is enough too little?');
console.log(searchedSong1);

const searchedSong2 = getSongByTitle('When is enough too');
console.log(searchedSong2);

function getSongByTitleFindIndex(title) {
    const findTitle = songDatabase.findIndex(x => x.title === title);
    return songDatabase[findTitle];
}
const searchedSong3 = getSongByTitleFindIndex('When is enough too little?');
console.log(searchedSong3);

const searchedSong4 = getSongByTitleFindIndex('When is enough too');
console.log(searchedSong4);

function addSongToMyPlaylist(title) {
    const mySong = getSongByTitleFindIndex(title);
    if (mySong) {
        myPlaylist.push(mySong);
    }
}
addSongToMyPlaylist('3 nails in wood');
console.log(myPlaylist);

function getSongByTitleMultiple(title) {
    const songDatabaseMultiple = [];
    for (let i = 0; i < songDatabase.length; i++) {
        const titleKey = songDatabase[i].title;
        if (titleKey === title) {
            songDatabaseMultiple.push(songDatabase[i]);
        }
    }
    return songDatabaseMultiple;
}
const searchedSong5 = getSongByTitleMultiple('When is enough too little?');
console.log(searchedSong5);