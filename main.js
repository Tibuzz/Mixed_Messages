// Parts to randomly chose from: Day, Color, Cloth
const randomPhrase = {
 days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
 colors: ['blue', 'yellow', 'black', 'green', 'red', 'purple', 'sand'],
 cloths: ['jeans', 'socks', 'sweater', 'shirt', 'dress', 'skirt', 'underwear'],

  randomSelect(arr){
    return  arr[Math.floor(Math.random() * arr.length)];
  }
}

let day = randomPhrase.randomSelect(randomPhrase.days);
let color = randomPhrase.randomSelect(randomPhrase.colors);
let cloth = randomPhrase.randomSelect(randomPhrase.cloths);

console.log(`On ${day} you'll wear ${color} ${cloth}`);