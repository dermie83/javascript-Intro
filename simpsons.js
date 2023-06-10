const homer = {
    firstName: 'homer',
    lastName: 'simpson',
    age: 37,
  };

console.log(homer);

const bart = {
    firstName: 'bart',
    lastName: 'simpson',
    age: 10,
  };
  
console.log(bart);
console.log ('Barts age =', bart.age);


const marge = {
    firstName: 'marge',
    lastName: 'simpson',
    age: 10,
    sayHello() {
      console.log('Hello from me!');
    }
  };

  console.log(marge);
marge.sayHello();

const ned = {
    firstName: 'ned',
    lastName: 'flanders',
    age: 45,
    speak() {
      console.log('How diddley do? says ' + this.firstName);
    }
  }
  
ned.speak();




