const faker = require('faker');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    database: 'driverservice'
  }
});

console.time('start');
// 10085777
// const help = 'HELPPPPPPPPPPPPPPPPPPPPP';
// console.log(help.length);
let count = -100000000;
// function seedDrivers (num) {
//   let promises = [];
//
//   for (let i = 0; i < num; i++) {
//     let firstName = faker.name.firstName();
//     let lastName = faker.name.lastName();
//     let email = faker.internet.email();
//     let password = faker.internet.password(8);
//     let number = faker.phone.phoneNumberFormat(1);
//     let imageUrl = faker.image.imageUrl();
//     let rating = Math.round((Math.random() + 4) * 10) / 10;
//
//     let promise = knex(`drivers`).insert({
//       first_name: `${firstName}`,
//       last_name: `${lastName}`,
//       email: `${email}`,
//       password: `${password}`,
//       phone_number: `${number}`,
//       picture: `${imageUrl}`,
//       rating: `${rating}`
//
//     });
//     promises.push(promise);
//     // .then((data) => {
//     //   count ++;
//     // })
//   }
//   return Promise.all(promises);
// };
// // seedDrivers(50000).then((data) => {
// //   console.timeEnd('start');
// //   count++;
// // });
// seedDrivers(12000).then((data) => {
//   console.timeEnd('start');
//   count++;
// });

// function run (num = 1) {
//   for (let i = 0; i < num; i++) {
//     seedDrivers();
//   }
//   return;
// };
// run(2);
//
// console.log('done');

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black', 'grey', 'silver'];
// const vehicles = {
//   0: {Toyota: ['Camry', 'Corolla', 'Prius', 'Sienna', 'Highlander', 'Rav4']},
//   1: {Honda: ['Accord', 'Civic', 'Odyssey', 'Element', 'Pilot', 'CR-V', 'Fit']},
//   2: {Ford: ['Escape', 'Explorer', 'Focus', 'Taurus', 'Fiesta', 'Edge']},
//   3: {Cadillac: ['Escalade', 'CTS', 'ATS']},
//   4: {Chevrolet: ['Volt', 'Spark', 'Cruze', 'Malibu', 'Impala', 'Equinox', 'Tahoe', 'Suburban']},
//   5: {BMW: ['328i', '330i', '335i', 'X3', 'X5']},
//   6: {Nissan: ['Altima', 'Maxima', 'Pathfinder', 'Sentra', 'Rogue']},
//   7: {Hyundai: ['Elantra', 'Genesis', 'Sonata', 'Santa Fe']},
//   8: {Mazda: ['3', '5', 'CX-5', 'CX-3']},
//   9: {Dodge: ['Charger', 'Challenger', 'Grand Caravan', 'Durango']},
//   10: {Volkswagen: ['Beetle', 'Golf', 'Passat', 'Jetta', 'Tiguan']},
//   11: {Jeep: ['Wrangler', 'Liberty', 'Compass', 'Grand Cherokee', 'Renegade']},
//   12: {'Mercedes-Benz': ['C 300', 'C 350', 'GLA 250']},
//   13: {Lexus: ['IS 250', 'IS 350', 'ES 350', 'RX']},
// }
// const letters = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
// 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// const capacities = [1, 4, 6];
//
// function seedVehicles(num) {
//   for (let i = 0; i < num; i++) {
//     let makeKey = Math.floor(Math.random() * 14).toString();
//     let make = Object.keys(vehicles[makeKey])[0];
//     let model = vehicles[makeKey][make][(Math.floor(Math.random() * vehicles[makeKey][make].length))];
//     let color = colors[Math.floor(Math.random() * colors.length)];
//     let license = numbers[Math.floor(Math.random() * numbers.length)] +
//     letters[Math.floor(Math.random() * letters.length)] +
//     letters[Math.floor(Math.random() * letters.length)] +
//     letters[Math.floor(Math.random() * letters.length)] +
//     numbers[Math.floor(Math.random() * numbers.length)] +
//     numbers[Math.floor(Math.random() * numbers.length)] +
//     numbers[Math.floor(Math.random() * numbers.length)];
//     let year = parseInt(JSON.stringify(faker.date.past(10)).slice(1, 5));
//     let imageUrl = faker.image.imageUrl();
//     let capacity = capacities[Math.floor(Math.random() * capacities.length)];
//
//     knex(`vehicles`).insert({
//       license_plate: `${license}`,
//       make: `${make}`,
//       model: `${model}`,
//       color: `${color}`,
//       year: `${year}`,
//       picture: `${imageUrl}`,
//       capacity: `${capacity}`
//     })
//     .then((data) => {
//       count ++;
//       //console.log('inserted!!!!');
//     })
//   }
// }
// seedVehicles(130000);
//
// function seedJoin () {
//   const round1 = [];
//   const round2 = [];
//   const round3 = [];
//   const round4 = [];
//   const round5 = [];
//   const round6 = [];
//   const round7 = [];
//   const round8 = [];
//   const round9 = [];
//   const round10 = [];
//
//   for (let i = 1; i < 100000; i++) {
//     round1.push(i);
//   }
//   for (let i = 1; i < round1.length; i++) {
//     round2.push(i + 100000);
//     round3.push(i + 200000);
//     round4.push(i + 300000);
//     round5.push(i + 400000);
//     round6.push(i + 500000);
//     round7.push(i + 600000);
//     round8.push(i + 700000);
//     round9.push(i + 800000);
//     round10.push(i + 900000);
//   }
//   let index1 = Math.floor(Math.random() * 10);
//   let index2 = Math.floor(Math.random() * 10);
//   let index11 = Math.floor(Math.random() * round1.length);
//   let index22 = Math.floor(Math.random() * round1.length);
//
// }

// function seedJoinTable () {
//   for (let i = 0; i < 10000000; i++) {
//     array.push(i);
//   }
//   for (let i = 0; i < 100000; i++) {
//     let idx = Math.floor(Math.random() * 4);
//     if (idx === 2) {
//       let driverIdx = Math.floor(Math.random() * 1000);
//       let vehicleIdx = Math.floor(Math.random() * 11300);
//       knex('drivers_vehicles').insert({
//         driver_id: driverIdx,
//         vehicle_id: vehicleIdx
//       })
//       .then((data) => {
//         count += 0;
//       })
//
//     } else if (idx === 1) {
//       let driverIdx = Math.floor(Math.random() * 100000);
//       let vehicleIdx = Math.floor(Math.random() * 108000);
//       knex('drivers_vehicles').insert({
//         driver_id: driverIdx,
//         vehicle_id: vehicleIdx
//       })
//       .then((data) => {
//         count += 0;
//       })
//     } else {
//       let driverIdx = Math.floor(Math.random() * 10300000);
//       let vehicleIdx = Math.floor(Math.random() * 10100000);
//       knex('drivers_vehicles').insert({
//         driver_id: driverIdx,
//         vehicle_id: vehicleIdx
//       })
//       .then((data) => {
//         count += 0;
//       })
//
//     }
//   }
// }

// function seedJoinTable () {
//   //  need to generate random number for driverIds
//   //  need to generate random number for vehicleIds
//   const array = [];
//   for (let i = 0; i < 10000000; i++) {
//     array.push(i);
//   }
//   const lowerArr = array.slice(0, 1000);
//   const slightlyLarger = array.slice(1000, 100000);
//
//   // console.log(array);
//   for (let i = 0; i < 120000; i++) {
//     let driverIdx = Math.floor(Math.random() * 10000000);
//     let vehicleIdx = Math.floor(Math.random() * 10000000);
//     knex('drivers_vehicles').insert({
//       driver_id: driverIdx,
//       vehicle_id: vehicleIdx
//     })
//       .then((data) => {
//         count += 0;
//       })
//   }
// }

// function seedJoinTable() {
//   let driverIdx;
//   let vehicleIdx;
//   for (let i = 0; i < 110000; i++) {
//     let idx = Math.floor(Math.random() * 10);
//     if (idx <= 1) {
//       driverIdx = Math.floor(Math.random() * 10000);
//       vehicleIdx = Math.floor(Math.random() * 10000);
//     } else if (idx === 7) {
//       driverIdx = Math.floor(Math.random() * 100000);
//       vehicleIdx = Math.floor(Math.random() * 100000);
//     } else {
//       driverIdx = Math.floor(Math.random() * 10000000);
//       vehicleIdx = Math.floor(Math.random() * 10000000);
//     }
//     knex('drivers_vehicles').insert({
//       driver_id: driverIdx,
//       vehicle_id: vehicleIdx
//     })
//       .then((data) => {
//         count += 0;
//       })
//       .catch((err) => {
//         count -= 0;
//       })
//
//   }
// }
// for small indexes
// function seedJoinTable () {
//   //  need to generate random number for driverIds
//   //  need to generate random number for vehicleIds
//   const array = [];
//   for (let i = 0; i < 10000000; i++) {
//     array.push(i);
//   }
//   const lowerArr = array.slice(0, 1000);
//   const slightlyLarger = array.slice(1000, 100000);
//
//   // console.log(array);
//   for (let i = 0; i < 120000; i++) {
//     let idx = Math.floor(Math.random(10));
//     if (idx <= 3) {
//       let driverIdx = Math.floor(Math.random() * 1000);
//       let vehicleIdx = Math.floor(Math.random() * 1000);
//       knex('drivers_vehicles').insert({
//         driver_id: driverIdx,
//         vehicle_id: vehicleIdx
//       })
//         .then((data) => {
//           count += 0;
//         })
//     } else {
//       let driverIdx = Math.floor(Math.random() * 10000000);
//       let vehicleIdx = Math.floor(Math.random() * 10000000);
//       knex('drivers_vehicles').insert({
//         driver_id: driverIdx,
//         vehicle_id: vehicleIdx
//       })
//         .then((data) => {
//           count += 0;
//         })
//     }
//     // knex('drivers_vehicles').insert({
//     //   driver_id: driverIdx,
//     //   vehicle_id: vehicleIdx
//     // })
//     //   .then((data) => {
//     //     count += 0;
//     //   })
//   }
// }

// seedJoinTable();

const seedAvailable = () => {
  console.log('ahaaaaaa');
  const type = ['x', 'xl', 'black', 'pool', 'select'];
  const locations = ['944 Market Street, SF, CA',
  'Ferry Building, SF, CA', 'California Academy of Sciences, SF, CA',
  'Lands End, SF, CA', 'Chrissy Field, SF, CA', 'San Francisco Zoo, SF, CA',
  'Coit Tower, SF, CA', 'Lombard Street, SF, CA', 'AT&T Park, SF, CA',
  'Dynamo Donut & Coffee, SF, CA'];
  let status;
  knex('drivers_vehicles')
  .select()
  .where('id', '<', 8300000)
  .andWhere('id', '>', 8200000)
  .then((data) => {
    data.forEach((record) => {
      let ldx = Math.floor(Math.random() * locations.length);
      let idx = Math.floor(Math.random() * type.length);
      let rdx = Math.floor(Math.random() * 721473);
      if (idx % 2 === 0) {
        status = 0;
        rdx = null;
      } else {
        status = 1;
      }
      knex('available_rides').insert({
        driver_vehicle_id: record.id,
        driver_id: record.driver_id,
        vehicle_id: record.vehicle_id,
        status: status,
        current_ride_id: rdx,
        type: type[idx],
        location: locations[ldx]
      })
      .then((success) => {
        count += 0;
      })
    });
  })
}
seedAvailable();

console.timeEnd('start');

// const seedAvailable2 = () => {
//   console.log('ahaaaaaa');
//   const type = ['x', 'xl', 'black', 'pool', 'select'];
//   const locations = ['944 Market Street, SF, CA',
//   'Ferry Building, SF, CA', 'California Academy of Sciences, SF, CA',
//   'Lands End, SF, CA', 'Chrissy Field, SF, CA', 'San Francisco Zoo, SF, CA',
//   'Coit Tower, SF, CA', 'Lombard Street, SF, CA', 'AT&T Park, SF, CA',
//   'Dynamo Donut & Coffee, SF, CA'];
//   let status;
//   knex('drivers_vehicles')
//   .select()
//   .where('id', '<', 200000)
//   .andWhere('id', '>', 100000)
//   .then((data) => {
//     data.forEach((record) => {
//       let ldx = Math.floor(Math.random() * locations.length);
//       let idx = Math.floor(Math.random() * type.length);
//       let rdx = Math.floor(Math.random() * 721473);
//       if (idx % 2 === 0) {
//         status = 0;
//         rdx = null;
//       } else {
//         status = 1;
//       }
//       knex('available_rides').insert({
//         driver_vehicle_id: record.id,
//         driver_id: record.driver_id,
//         vehicle_id: record.vehicle_id,
//         status: status,
//         current_ride_id: rdx,
//         type: type[idx],
//         location: locations[ldx]
//       })
//       .then((success) => {
//         count += 0;
//       })
//     });
//   })
// }
// seedAvailable2();
// const seedAvailable3 = () => {
//   console.log('ahaaaaaa');
//   const type = ['x', 'xl', 'black', 'pool', 'select'];
//   const locations = ['944 Market Street, SF, CA',
//   'Ferry Building, SF, CA', 'California Academy of Sciences, SF, CA',
//   'Lands End, SF, CA', 'Chrissy Field, SF, CA', 'San Francisco Zoo, SF, CA',
//   'Coit Tower, SF, CA', 'Lombard Street, SF, CA', 'AT&T Park, SF, CA',
//   'Dynamo Donut & Coffee, SF, CA'];
//   let status;
//   knex('drivers_vehicles')
//   .select()
//   .where('id', '<', 300000)
//   .andWhere('id', '>', 200000)
//   .then((data) => {
//     data.forEach((record) => {
//       let ldx = Math.floor(Math.random() * locations.length);
//       let idx = Math.floor(Math.random() * type.length);
//       let rdx = Math.floor(Math.random() * 721473);
//       if (idx % 2 === 0) {
//         status = 0;
//         rdx = null;
//       } else {
//         status = 1;
//       }
//       knex('available_rides').insert({
//         driver_vehicle_id: record.id,
//         driver_id: record.driver_id,
//         vehicle_id: record.vehicle_id,
//         status: status,
//         current_ride_id: rdx,
//         type: type[idx],
//         location: locations[ldx]
//       })
//       .then((success) => {
//         count += 0;
//       })
//     });
//   })
// }
// seedAvailable3();
//
//
// const seedAvailable4 = () => {
//   console.log('ahaaaaaa');
//   const type = ['x', 'xl', 'black', 'pool', 'select'];
//   const locations = ['944 Market Street, SF, CA',
//   'Ferry Building, SF, CA', 'California Academy of Sciences, SF, CA',
//   'Lands End, SF, CA', 'Chrissy Field, SF, CA', 'San Francisco Zoo, SF, CA',
//   'Coit Tower, SF, CA', 'Lombard Street, SF, CA', 'AT&T Park, SF, CA',
//   'Dynamo Donut & Coffee, SF, CA'];
//   let status;
//   knex('drivers_vehicles')
//   .select()
//   .where('id', '<', 400000)
//   .andWhere('id', '>', 300000)
//   .then((data) => {
//     data.forEach((record) => {
//       let ldx = Math.floor(Math.random() * locations.length);
//       let idx = Math.floor(Math.random() * type.length);
//       let rdx = Math.floor(Math.random() * 721473);
//       if (idx % 2 === 0) {
//         status = 0;
//         rdx = null;
//       } else {
//         status = 1;
//       }
//       knex('available_rides').insert({
//         driver_vehicle_id: record.id,
//         driver_id: record.driver_id,
//         vehicle_id: record.vehicle_id,
//         status: status,
//         current_ride_id: rdx,
//         type: type[idx],
//         location: locations[ldx]
//       })
//       .then((success) => {
//         count += 0;
//       })
//     });
//   })
// }
// seedAvailable4();
//
// const seedAvailable5 = () => {
//   console.log('ahaaaaaa');
//   const type = ['x', 'xl', 'black', 'pool', 'select'];
//   const locations = ['944 Market Street, SF, CA',
//   'Ferry Building, SF, CA', 'California Academy of Sciences, SF, CA',
//   'Lands End, SF, CA', 'Chrissy Field, SF, CA', 'San Francisco Zoo, SF, CA',
//   'Coit Tower, SF, CA', 'Lombard Street, SF, CA', 'AT&T Park, SF, CA',
//   'Dynamo Donut & Coffee, SF, CA'];
//   let status;
//   knex('drivers_vehicles')
//   .select()
//   .where('id', '<', 500000)
//   .andWhere('id', '>', 400000)
//   .then((data) => {
//     data.forEach((record) => {
//       let ldx = Math.floor(Math.random() * locations.length);
//       let idx = Math.floor(Math.random() * type.length);
//       let rdx = Math.floor(Math.random() * 721473);
//       if (idx % 2 === 0) {
//         status = 0;
//         rdx = null;
//       } else {
//         status = 1;
//       }
//       knex('available_rides').insert({
//         driver_vehicle_id: record.id,
//         driver_id: record.driver_id,
//         vehicle_id: record.vehicle_id,
//         status: status,
//         current_ride_id: rdx,
//         type: type[idx],
//         location: locations[ldx]
//       })
//       .then((success) => {
//         count += 0;
//       })
//     });
//   })
// }
// seedAvailable5();



module.exports.seedAvailable = seedAvailable;
// module.exports.seedAvailable2 = seedAvailable2;
// module.exports.seedAvailable3 = seedAvailable3;
// module.exports.seedAvailable4 = seedAvailable4;
// module.exports.seedAvailable5 = seedAvailable5;
