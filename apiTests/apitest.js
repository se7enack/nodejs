#!/usr/local/bin/node

const querystring = require('querystring');
const https = require('https');
const regex = require("regex");

/*
var postData = querystring.stringify({
  'user_url' : 'se7enack'
});
*/

thePath='/users/se7enack'

var options = {
  hostname: 'api.github.com',
  port: 443,
  path: thePath,
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'se7enack'
  }
};

var x;
var req = https.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(`${chunk}`);
  });
  res.on('end', () => {
    return;
  });
});

req.replace(/\n$/, '');
//req.on('error', (e) => {
//  console.log(`problem with request: ${e.message}`);
//});

//req.write(postData);

JSON.stringify(req.end());

