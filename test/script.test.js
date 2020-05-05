const script = require('../scripts/script.js');

test('Gets a random date between 2006 and 2020', () => {
  const randomDate = parseInt(script.getRandomDate());
  expect(randomDate).toBeGreaterThanOrEqual(2006);
  expect(randomDate).toBeLessThan(2021);
});

test('Gets a random date between 2006 and 2020', () => {
  const randomDate = parseInt(script.getRandomDate());
  expect(randomDate).toBeGreaterThanOrEqual(2006);
  expect(randomDate).toBeLessThan(2021);
});
