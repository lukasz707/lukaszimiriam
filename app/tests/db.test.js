const db = require('../db');
afterAll(async () => {
  await db.end();
});
test('DB connection test', async () => {
  const conn = await db.getConnection();
  expect(conn).toBeDefined();
  await conn.release(); // ważne: zwalniasz połączenie
});

test('Query test', async () => {
  const conn = await db.getConnection();
  const [rows] = await conn.query('SELECT 1 + 1 AS result');
  expect(rows[0].result).toBe(2);
  await conn.release();
});