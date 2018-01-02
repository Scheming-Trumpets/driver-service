const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const faker = require('faker');
const promise = require('bluebird');
const redis = require('redis');
promise.promisifyAll(redis.RedisClient.prototype);
promise.promisifyAll(redis.Multi.prototype);
const client = redis.createClient();
const db = require('./dbconnection.js');
const query = require('./queries.js');
const request = require('./bookingrequests.js');
const seed = require('../seed.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// pricing service requests for current number of drivers available
// tested

// app.get('/api/v1/drivers/count', (req, res) => {
//   // console.log('is this undefined?', query.driverCount);
//   db.knex('available_rides')
//   .count()
//   .then((data) => {
//     res.end(JSON.stringify({count: data}));
//   })
// });
app.get('/api/v1/drivers/count', (req, res) => {
  // console.log('is this undefined?', query.driverCount);
  client.getAsync('count').then((data) => {
    if (data !== 'nil' && data !== null) {
      // console.log('data, typeof data:', data, typeof data, data === 'null', data === 'nil', data === null);
      res.end(JSON.stringify({count: data}));
    } else {
      query.driverCount()
      .then((data) => {
        console.log('i am a teapot short and stout', data[0]['count(*)']);
        client.setAsync('count', data[0]['count(*)']);
        res.end(JSON.stringify({count: data[0]['count(*)']}));
      })

    }
  })
});

// booking service requests for driver data to match with riders
// tested

app.get('/api/v1/drivers/available', (req, res) => {
  client.getAsync('drivers').then((data) => {
    if (data !== null) {
      // console.log('plain data', typeof data, data);
      // console.log('parsed', typeof JSON.parse(data), Array.isArray(JSON.parse(data)), JSON.parse(data));
      // console.log('stringified', JSON.stringify(data));
      //console.log('in the if', data);
      res.end(data);
    } else {
      query.getDrivers()
      .then((data) => {
        //console.log(data);
        client.setAsync('drivers', JSON.stringify(data));
        // console.log('look at the data ----->', data);
        // console.log('99999999999999', typeof data, Array.isArray(data), data);
        res.end(JSON.stringify(data));
      })

    }
  })
})

// used only for testing
// app.get('/api/v1/drivers/test', (req, res) => {
//   client.getAsync('drivers').then((data) => {
//     console.log('-----------------------', typeof JSON.parse(data));
//     console.log('++++++++++++++++', Array.isArray(JSON.parse(data)));
//     console.log(JSON.parse(data));
//     res.end(data);
//   })
// })

// app.get('/api/v1/drivers/available', (req, res) => {
//   query.getDrivers()
//     .then((data) => {
//       // console.log('look at the data ----->', data);
//       res.end(JSON.stringify(data));
//     })
// })

// new route for drivers to update position
// tested

app.patch('/api/v1/drivers/location', (req, res) => {
  let driver = req.body.driverId;
  let location = req.body.location;
  query.updateLocation(driver, location)
    .then((data) => {
      console.log('ahahahahahahahaahahaha', data);
      res.end();
    })
})

//  booking service notification to change status of drivers after a match occurs
//  tested

app.post('/api/v1/ride', (req, res) => {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!', req.body);
  let id = req.body.rideId;
  let driver = req.body.driverId;
  query.assignRide(driver, id)
    .then((id) => {
      console.log(id);
      res.end(JSON.stringify(id));
    })
    .catch((err) => {
      console.log(err);
    })
})

//  client(driver) request to cancel a ride
//  tested, but request to booking needs a correct endpoint
app.patch('/api/v1/cancel', (req, res) => {
  let rideId = req.body.rideId;
  let driver_vehicle_id = req.body.driver_vehicle_id;
  query.cancelRide(rideId, driver_vehicle_id)
    .then((record) => {
      console.log('working');
      request.cancelAndUpdate(req, res)
      })
  })

//  client request to end a ride and reset status
//  tested but needs a correct endpoint

app.patch('/api/v1/ride/end', (req, res) => {
  let rideId = req.body.rideId;
  let driverId = req.body.driverId;
  query.endRide(rideId)
  .then((record) => {
    // console.log('got to this spot');
    request.endRide(req, res);
  })

})


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

// app.get('/', (req, res) => {
//   seed.seedAvailable();
//
// })
// just a test
// app.get('/', (req, res) => {
//   // knex(`drivers`).insert({
//   //   first_name: 'peter'
//   // });
//   for (let i = 0; i < 1500000; i++) {
//     let firstName = faker.name.firstName();
//     let lastName = faker.name.lastName();
//     db.knex(`drivers`).insert({
//       first_name: `${firstName}`,
//       last_name: `${lastName}`
//     })
//     .then((data) => {
//       //console.log('inserted!!!!');
//     })
//
//   }
//   // console.log('test, test, test');
//   // //console.log('!!!!!!!!!', typeof db, '-------', db);
//   // console.log('before db connection');
//   // //db2();
//   // knex.select().table('drivers')
//   //   .then((data) => {
//   //     console.log(data);
//   //   });
//   // knex.select().table('vehicles')
//   //   .then((data) => {
//   //     console.log(data);
//   //   });
//   // knex.select().table('drivers_vehicles')
//   //   .then((data) => {
//   //     console.log(data);
//   //   });
//   // knex.select().table('available_rides')
//   //   .then((data) => {
//   //     console.log(data);
//   //   });
//   // knex('available_rides').where({
//   //   status: 1
//   // }).select('id')
//   // .then((data) => {
//   //   console.log('HEY', data);
//   // });
//   // console.log('after db connection');
//   // db.connection.query('select * from drivers', (err, rows, fields) => {
//   //   console.log(Array.isArray(rows), '123456789', rows[1]);
//   // });
//   // .then((data) => {
//   //   console.log('data', typeof data, '----', data);
//   // });
//
// //res.send();
// });


app.listen(9100, () => {
  console.log('listening on port 9100');
});

// request({
//   uri: '127.0.0.1:9100/api/v1/ride',
//   method: 'POST',
//   form: {
//     driverId: 2,
//     rideId: 5
//   }
// }, function(err, response, body) {
//   if (err) {
//
//     console.log('this is an error', err);
//   } else {
//
//     console.log('this is the response', response);
//     console.log('this is the body', body);
//   }
// })
// axios.post('localhost:9100/api/v1/ride', {
//   rideId: 5,
// driverId: 2})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

/* advice from beth: use faker (npm)
random data generator for cars
*/
