const faker = require('faker');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    database: 'driverservice'
  }
});

// console.log(faker.date.past(20), typeof(faker.date.past(20)));
// console.log(JSON.stringify(faker.date.past(20)));
// console.log(JSON.stringify(faker.date.past(20)).slice(0, 5));
console.log(parseInt(JSON.stringify(faker.date.past(20)).slice(1, 5)));


const help = 'HELPPPPPPPPPPPPPPPPPPPPP';
console.log(help.length);
let count = 1;
function seedDrivers () {
  for (let i = 0; i < 75000; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let password = faker.internet.password(8);
    let number = faker.phone.phoneNumberFormat(1);
    let imageUrl = faker.image.imageUrl();
    let rating = Math.round((Math.random() + 4) * 100) / 100;
    knex(`drivers`).insert({
      first_name: `${firstName}`,
      last_name: `${lastName}`,
      email: `${email}`,
      password: `${password}`,
      phone_number: `${number}`,
      picture: `${imageUrl}`,
      rating: `${rating}`

    })
    .then((data) => {
      count ++;
      //console.log('inserted!!!!');
    })

  }

};
function run (num = 1) {
  for (let i = 0; i < num; i++) {
    seedDrivers();
  }
  return;
};
run();

console.log('done');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black', 'grey', 'silver'];
const vehicles = {
  0: {Toyota: ['Camry', 'Corolla', 'Prius', 'Sienna', 'Highlander', 'Rav4']},
  1: {Honda: ['Accord', 'Civic', 'Odyssey', 'Element', 'Pilot', 'CR-V', 'Fit']},
  2: {Ford: ['Escape', 'Explorer', 'Focus', 'Taurus', 'Fiesta', 'Edge']},
  3: {Cadillac: ['Escalade', 'CTS', 'ATS']},
  4: {Chevrolet: ['Volt', 'Spark', 'Cruze', 'Malibu', 'Impala', 'Equinox', 'Tahoe', 'Suburban']},
  5: {BMW: ['328i', '330i', '335i', 'X3', 'X5']},
  6: {Nissan: ['Altima', 'Maxima', 'Pathfinder', 'Sentra', 'Rogue']},
  7: {Hyundai: ['Elantra', 'Genesis', 'Sonata', 'Santa Fe']},
  8: {Mazda: ['3', '5']},
  9: {Dodge: ['Charger', 'Challenger']},
  10: {Volkswagen: ['Beetle', 'Golf', 'Passat', 'Jetta', 'Tiguan']}
}
const letters = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const capacities = [2, 4, 5, 6, 7];

function seedVehicles(num) {
  for (let i = 0; i < num; i++) {
    // let color = colors[Math.floor(Math.random() * 10)];
    let makeKey = Math.floor(Math.random() * 11).toString();
    let make = Object.keys(vehicles[makeKey])[0];
    let model = vehicles[makeKey][make][(Math.floor(Math.random() * vehicles[makeKey][make].length))];
    let color = colors[Math.floor(Math.random() * colors.length)];
    let license = numbers[Math.floor(Math.random() * numbers.length)] +
    letters[Math.floor(Math.random() * letters.length)] +
    letters[Math.floor(Math.random() * letters.length)] +
    letters[Math.floor(Math.random() * letters.length)] +
    numbers[Math.floor(Math.random() * numbers.length)] +
    numbers[Math.floor(Math.random() * numbers.length)] +
    numbers[Math.floor(Math.random() * numbers.length)];
    let year = parseInt(JSON.stringify(faker.date.past(20)).slice(1, 5));
    let imageUrl = faker.image.imageUrl();
    let capacity = capacities[Math.floor(Math.random() * capacities.length)];

    knex(`vehicles`).insert({
      license_plate: `${license}`,
      make: `${make}`,
      model: `${model}`,
      color: `${color}`,
      year: `${year}`,
      picture: `${imageUrl}`,
      capacity: `${capacity}`
    })
    .then((data) => {
      count ++;
      //console.log('inserted!!!!');
    })
  }
}

seedVehicles(1000);
