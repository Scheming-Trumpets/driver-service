const express = require('express');
const app = express();
const axios = require('axios');
const faker = require('faker');
// const db = require('./dbconnection.js');
// const db2 = require('./queries.js');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    database: 'driverservice'
  }
});


// pricing service requests for current number of drivers available
app.get('/api/v1/drivers/count', (req, res) => {
  knex.select().table('available_rides')
    .then((data) => {
      console.log('EVIL SPIRIT', data.length);
      res.end(data.length);
    })

});

// booking service requests for driver data to match with riders
app.get('/api/v1/drivers/available', (req, res) => {

});

//  booking service notification to change status of drivers after a match occurs
app.post('/api/v1/ride', (req, res) => {

});

// client request to cancel a ride and reset status
app.post('/api/v1/cancel', (req, res) => {

});

//  client request to end a ride and reset status
app.post('/api/v1/ride/end', (req, res) => {

});


// client login that changes status of driver
app.post('/api/v1/login', (req, res) => {

});



// client request to reset status and end session
app.post('/api/v1/logout', (req, res) => {

});



// just a test
app.get('/', (req, res) => {
  // knex(`drivers`).insert({
  //   first_name: 'peter'
  // });
  for (let i = 0; i < 1500000; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    knex(`drivers`).insert({
      first_name: `${firstName}`,
      last_name: `${lastName}`
    })
    .then((data) => {
      //console.log('inserted!!!!');
    })

  }
  // console.log('test, test, test');
  // //console.log('!!!!!!!!!', typeof db, '-------', db);
  // console.log('before db connection');
  // //db2();
  // knex.select().table('drivers')
  //   .then((data) => {
  //     console.log(data);
  //   });
  // knex.select().table('vehicles')
  //   .then((data) => {
  //     console.log(data);
  //   });
  // knex.select().table('drivers_vehicles')
  //   .then((data) => {
  //     console.log(data);
  //   });
  // knex.select().table('available_rides')
  //   .then((data) => {
  //     console.log(data);
  //   });
  // knex('available_rides').where({
  //   status: 1
  // }).select('id')
  // .then((data) => {
  //   console.log('HEY', data);
  // });
  // console.log('after db connection');
  // db.connection.query('select * from drivers', (err, rows, fields) => {
  //   console.log(Array.isArray(rows), '123456789', rows[1]);
  // });
  // .then((data) => {
  //   console.log('data', typeof data, '----', data);
  // });

//res.send();
});

app.listen(9100, () => {
  console.log('listening on port 9100');
});


/* advice form beth: use faker (npm)
random data generator for cars
*/
