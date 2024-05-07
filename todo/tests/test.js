import request from 'supertest';
import app from '../app.js';
import { expect } from 'chai';

describe('GET /', () => {
    it('should return 200 OK', (done) => {
        request(app)
            .get('/')
            .expect(200, done);
    });
});

describe('GET /about', () => {
    it('should return 200 OK', (done) => {
        request(app)
            .get('/about')
            .expect(200, done);
    });
});

describe('GET /todo', () => {
    it('should return 200 OK', (done) => {
        request(app)
            .get('/todo')
            .expect(200, done);
    });
});

describe('POST /todo', () => {
    it('should return 302 Redirect', (done) => {
        request(app)
            .post('/todo')
            .send({ todo: 'Test todo' })
            .expect(302, done);
    });
});

describe('DELETE /todo/:id', () => {
    it('should return 302 Redirect', (done) => {
        request(app)
            .delete('/todo/0')
            .expect(302, done);
    });
});