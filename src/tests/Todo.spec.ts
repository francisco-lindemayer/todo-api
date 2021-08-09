import request from 'supertest';
import app from '../app';

describe('Todo baby steps Route', () => {

  it('Should be any return to get all', async () => {
    return await request(app)
      .get('/todo')
      .expect(200)
  })


  it('Should be any return to get one', async () => {
    return await request(app)
      .get('/todo/4')
      .expect(200)
  })

})