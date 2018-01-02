const axios = require('axios');

const cancelAndUpdate = (req, res) => {
  let rideId = req.body.rideId;
  // console.log('----------------------->', req.body);
  axios.patch('insertBookingendpointHere', {
    ride_id: rideId,
    driver_id: null,
    driver_picture: null,
    phone_number: null,
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
  .catch((err) => {
    console.log(err);
  })
}

const endRide = (req, res) => {
  let driverId = req.body.driverId;
  axios.patch('/endride', {
    driverId: driverId,
    status: 0
  })
  .then((data) => {
    res.end();
  })
  .catch((err) => {
    console.log(err);
  })
}

module.exports.cancelAndUpdate = cancelAndUpdate;
module.exports.endRide = endRide;
