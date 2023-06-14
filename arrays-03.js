const people = ['Greg', 'Mary', 'Devon', 'James'];

for (let i = people.length; i > 0; i--) {
    if (people[i-1] !== 'Greg') {
        delete i;
      } else {
        console.log(people[i-1]);
      }
}

var name = prompt("Please add your name to the list :");
people.push(name);
console.log(people);
