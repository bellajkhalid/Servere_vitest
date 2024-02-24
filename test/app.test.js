import { test, describe, expect } from 'vitest';
import request from 'supertest';
import app from '../app';

// GET /sum
describe('POST /sum', () => {
  

  test('should sum respond for 11 + 15 is 26', async () => {
    const userData = {
      a: 11,
      b: 15
    };
    const commonRequest = request(app).post('/sum').set('Content-Type', 'application/json');
    const res = await commonRequest.send(userData);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ result: 26 });
  });


  test('should return status 400 if a or b is missing', async () => {
    const userData = {
      a: 11
    };
    const commonRequest = request(app).post('/sum').set('Content-Type', 'application/json');
    const res = await commonRequest.send(userData);
    expect(res.status).toBe(400);
  });

  test('should return status 400 if a or b is not a number', async () => {
    const userData = {
      a: 123,
      b: 'tese'
    };
    const commonRequest = request(app).post('/sum').set('Content-Type', 'application/json');
    const res = await commonRequest.send(userData);
    expect(res.status).toBe(400);
  });

  test('should specify json in the content type header', async () => {
    const userData = {
        a: 47,
        b: 77
    };
    const commonRequest = request(app).post('/sum').set('Content-Type', 'application/json');
    const res = await commonRequest.send(userData);
    // Get the Content-Type header from the response
    const contentTypeHeader = res.headers['content-type'];
    // Check if the Content-Type header contains 'json'
    expect(contentTypeHeader).toEqual(expect.stringContaining('json'));
  });
});