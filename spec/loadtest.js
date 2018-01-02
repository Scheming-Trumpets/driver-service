const request = require('supertest');
const express = require('express');
const app = require('../server/index.js');

request(app)
  .post('/api/v1/ride')
  .expect(function(res) {
    console.log(res);
  })
