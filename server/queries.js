const db = require('./dbconnection.js');
const axios = require('axios');

// const driverCount = () => db.knex.select()
//   .table('available_rides')
//   .where('status', 0)

const driverCount = () => db.knex('available_rides')
  .count()
  .where('status', '=', 0)

const getDrivers = () => db.knex('available_rides')
  .innerJoin('drivers', 'available_rides.driver_id', '=', 'drivers.id')
  .innerJoin('vehicles', 'available_rides.vehicle_id', '=', 'vehicles.id')
  .select('available_rides.id', 'available_rides.driver_vehicle_id', 'driver_id', 'vehicle_id',
  'status', 'type', 'location', 'license_plate', 'make', 'model', 'color', 'year', 'capacity', 'vehicles.picture',
  'first_name', 'last_name', 'phone_number', 'drivers.picture', 'rating')
  .where('status', 0)
  //  this limit is inserted to make the query faster and pervent the
  //  server from timing out
  .limit('10000')

const updateLocation = (driver, location) => db.knex('available_rides')
  .where('driver_id', '=', driver)
  .update({
    location: location
  })

const assignRide = (driver, ride) => db.knex('available_rides')
  .where('driver_id', '=', driver)
  .update({
    status: 1,
    current_ride_id: ride
  })

const cancelRide = (rideId, driver_vehicle_id) => db.knex('available_rides')
  .where('current_ride_id', '=', rideId )
  .update({
    current_ride_id: null,
    status: 0
  })

const endRide = (rideId) => db.knex('available_rides')
  .where('current_ride_id', '=', rideId)
  .update({
    current_ride_id: null,
    status: 0
  })

module.exports.driverCount = driverCount;
module.exports.getDrivers = getDrivers;
module.exports.updateLocation = updateLocation;
module.exports.assignRide = assignRide;
module.exports.cancelRide = cancelRide;
module.exports.endRide = endRide;
