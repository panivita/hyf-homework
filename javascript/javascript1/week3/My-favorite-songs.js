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
];

const myPlaylist = [];
/*function addSongToDatabase(song) {

    song = {
        songId: songDatabase.length + 1,
        title: title,
        artist: artist
      };
    songDatabase.push(song);

}
addSongToDatabase('Olivia', 'Rasmus Seebach');
console.table(songDatabase);*/
/*const findTitle = songDatabase.findIndex(title);
console.log(findTitle);*/
function getSongByTitle(title) {
    /*
    for (let i = 0; i < songDatabase.length; i++) {
        const titleKey = songDatabase[i].title;
        if (titleKey === title) {
            return songDatabase[i];
        }
    }*/
    const findTitle = songDatabase.findIndex(x => x.title ===title);

console.log(findTitle);
}
const searchedSong = getSongByTitle('When is enough too little?');
console.log(searchedSong);

const searchedSong2 = getSongByTitle('When is enough too');
console.log(searchedSong2);