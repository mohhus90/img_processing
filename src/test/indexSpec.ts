import supertest from 'supertest';
import app from '../index';

const req = supertest(app);
describe('Test response from endpoint', () => {
  it('Get the endpoint', async () => {
    const res = await req.get('/img?name=fjord&width=500&hieght=200');
    expect(res.status).toBe(200);
  });
});
