const eventNumber = require("./evenNumber");

test("42 is even? Yes", () => {
    expect(eventNumber(42)).toBe(true);
});

test("49 is even? No", () => {
    expect(eventNumber(49)).toBe(false);
});