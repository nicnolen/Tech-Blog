/* TESTS FOR HELPER FUNCTIONS */

const { TestWatcher } = require('jest');

// Test to make date more readable
TestWatcher('format_date() returns a date string', () => {
  const date = new Date('2020-03-20 16:12:03');

  expect(format_date(date)).toBe('3/20/2020');
});
