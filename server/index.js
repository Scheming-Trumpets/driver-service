const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const faker = require('faker');
const promise = require('bluebird');
const db = require('./dbconnection.js');
// const db2 = require('./queries.js');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    database: 'driverservice'
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// pricing service requests for current number of drivers available
// tested
app.get('/api/v1/drivers/count', (req, res) => {

  knex.select().table('available_rides')
    .then((data) => {
      console.log(data);
      res.end(JSON.stringify({count: data.length}));
    })

});

// booking service requests for driver data to match with riders
// tested
app.get('/api/v1/drivers/available', (req, res) => {

  knex('available_rides')
    .innerJoin('drivers', 'available_rides.driver_id', '=', 'drivers.id')
    .innerJoin('vehicles', 'available_rides.vehicle_id', '=', 'vehicles.id')
    .select()
    .where('status', 0)
    .then((data) => {
      console.log(data);
      res.end(JSON.stringify(data));
    })

});

//  booking service notification to change status of drivers after a match occurs
app.post('/api/v1/ride', (req, res) => {
  let id = req.body.rideId;
  let driver = req.body.driverId;
  knex('available_rides')
    .where('driver_id', '=', id)
    .update({
      status: 1,
      current_ride_id: id
    })
    .then((id) => {
      res.end(JSON.stringify(id));
    })

});


app.patch('/api/v1/cancel', (req, res) => {
  let rideId = req.body.rideId;
  let driver_vehicle_id = req.body.driver_vehicle_id;
  knex('available_rides')
    .where('current_ride_id', '=', rideId)
    .update({
      current_ride_id: null,
      status: 0
    })
    .then((id) => {
      console.log('I made it this far');
      axios.patch('/driverInfo', {
        ride_id: rideId,
        driver_id: null,
        make: null,
        model: null,
        color: null,
        picture: null,
        license: null,
        location: null
      })
        .then((data) => {
          res.end();
        })
    })

});

//  client request to end a ride and reset status
app.patch('/api/v1/ride/end', (req, res) => {
  let rideId = req.body.rideId;
  knex('available_rides')
    .where('current_ride_id', '=', rideId)
    .update({
      current_ride_id: null,
      status: 0
    })
    .then((record) => {
      res.end();
    })

});




//
// // client login that changes status of driver
// app.post('/api/v1/login', (req, res) => {
//
// });
//
//
//
// // client request to reset status and end session
// app.post('/api/v1/logout', (req, res) => {
//
// });



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
