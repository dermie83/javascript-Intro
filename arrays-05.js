const songList3 = [
    {
      title: 'Piano Sonata No. 3',
      artist: 'Beethoven',
      duration: 300,
    },
    {
      title: 'Piano Sonata No. 7',
      artist: 'Beethoven',
      duration: 400,
    },
    {
      title: 'Piano Sonata No. 10',
      artist: 'Beethoven',
      duration: 500,
    },
];

for (let j = 0; j < songList3.length; j++) {
    console.log('Song ' + j + ': Title: ' + songList3[j].title + 
    ': Artist: ' + songList3[j].artist + 
    ': Duration: ' + songList3[j].duration);
}

console.log('Total Songs in Playlist :'+songList3.length);

var total = 0;
for (let i = 0; i < songList3.length; i++) {
    total = total +  songList3[i].duration;
}
console.log('Playlist Duration: '+total);
    


  