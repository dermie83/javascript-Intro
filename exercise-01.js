// const usersFirstName = prompt('enter first name');
// const usersLastName = prompt('enter last name');
// const usersAge = prompt('enter age');

// const user = {
//     firstName: usersFirstName,
//     lastName: usersLastName,
//     age: usersAge,
//     sayHello(){
//         console.log('Hello from me! '+this.firstName+" "+this.lastName);
//     }
//   };

// user.sayHello();

const song = prompt('Whats your favourite song?');
const artist = prompt('Who is the artist of that song?');


const favourite = {
    song: song,
    artist: artist,
    printFavourite(){
        console.log('My favorite song is '+this.song+' by '+this.artist);
    }
  };

favourite.printFavourite();
  