var request = require('supertest'),
    express = require('express'),
    assert = require("assert");

var url = 'http://localhost:8000';

var calculation = {
  numA: 6,
  numB: 3
}

describe('POST TO ADD TWO NUMBERS', function(){
  it('responds with a json success message', function(done){
    request(url)
    .post('/add')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .send(calculation)
    .expect(200)
    .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.text, 9); 
            done();
        });
  });
});

describe('POST TO SUBTRACT TWO NUMBERS', function(){
  it('responds with a json success message', function(done){
    request(url)
    .post('/sub')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .send(calculation)
    .expect(200)
    .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.text, 3); 
            done();
        });
  });
});

describe('POST TO MULTIPLY TWO NUMBERS', function(){
  it('responds with a json success message', function(done){
    request(url)
    .post('/mult')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .send(calculation)
    .expect(200)
    .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.text, 18); 
            done();
        });
  });
});

describe('POST TO DIVIDE TWO NUMBERS', function(){
  it('responds with a json success message', function(done){
    request(url)
    .post('/div')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .send(calculation)
    .expect(200)
    .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.text, 2); 
            done();
        });
  });
});