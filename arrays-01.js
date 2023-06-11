const favoriteFoods = ['Pizza','Burgers','Pasta'];
favoriteFoods[favoriteFoods.length - 1] = 'Shite';

console.log(favoriteFoods[1]);
console.log(favoriteFoods);

const formerFavoriteFood = [favoriteFoods[0]];
console.log(formerFavoriteFood);

favoriteFoods.shift();
console.log(favoriteFoods);

const emptyArray = [];
emptyArray.pop();
console.log(emptyArray)

