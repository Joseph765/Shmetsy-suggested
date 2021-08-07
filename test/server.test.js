const api = require("../server/api.js");

test("Gets all data from specific id and specific table", () => {
  api.get("products", 1, (err, result) => {
    expect(err).toBe(null);
  });
});

test("Gets 8 items from a specified shop", () => {
  api.get8Random(1, (err, result) => {
    expect(err).toBe(null);
  });
});

test("Gets 6 random products from database", () => {
  api.get6Random((err, result) => {
    expect(err).toBe(null);
  });
});
