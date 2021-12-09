// Parts to randomly chose from: Day, Color, Cloth
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const colors = ['blue', 'yellow', 'black', 'green', 'red', 'purple', 'sand'];
const cloths = ['jeans', 'socks', 'sweater', 'shirt', 'dress', 'skirt', 'underwear'];


const randomSelect = arr => {
   return  arr[Math.floor(Math.random() * arr.length)];
}

let day = randomSelect(days);
let color = randomSelect(colors);
let cloth = randomSelect(cloths);


console.log(`On ${day} you'll wear ${color} ${cloth}`);