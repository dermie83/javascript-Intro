const me = [];
me.push('Dermie');
me.push('Madsen');
me.unshift('Pink');
me.shift('Pink');
console.log(me);

const other = [];
other.push(10);
other.push("JavaScript");
console.log(other);

const programming = ['JavaScript', 'Python', 'Ruby', 'Java']

const modernProgramming = programming.concat('Haskell', 'Clojure');
console.log(modernProgramming);

const joinLanguages = programming.join(', ');
console.log(joinLanguages);
