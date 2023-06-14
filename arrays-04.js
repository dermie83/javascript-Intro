const people = ['Greg', 'Mary','Foo', 'Devon', 'James'];

// for (let q = 0; q < people.length-1; q++) {
//     if (people[q] === 'Mary') {
//       console.log('Breaking out of the loop when q is ' + q);
//       break;
//     }
//     else {
//       console.log(q);
//     }
//   }

// const peopleNew = [];
// let p = 0
// let j = 0;

// while (j < people.length) {
//   console.log(peopleNew[p]) === people[j];
//   j++;
// }


for (let q = 0; q < people.length-1; q++){
    if (people[q] === 'Foo') {
              console.log(-1);
              break;
            }
            else {
              console.log(q);
            }
  }
