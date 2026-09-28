const request = require('supertest');
const app = require('../server');

describe('API тесты', () => {
  test('GET /api/health возвращает status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
