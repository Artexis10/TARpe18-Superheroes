var superheroes = require('superheroes')
var mySuperheroName = superheroes.random();
console.log("Superhero: " + mySuperheroName);
console.log("Superheroes:");
console.log(superheroes.all);

var supervillains = require('supervillains')
var mySupervillainName = supervillains.random();
console.log("Supervillain: " + mySupervillainName);
console.log("Supervillains:");
console.log(supervillains.all);