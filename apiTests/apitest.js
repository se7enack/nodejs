#!/usr/local/bin/node

const querystring = require('querystring');
const https = require('https');

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

var req = https.request(options, (res) => {
  //console.log(`STATUS: ${res.statusCode}`);
  //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    //console.log('No more data in response.');
    return;
  });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

//req.write(postData);

JSON.stringify(req.end());

