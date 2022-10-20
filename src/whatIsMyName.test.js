const whatIsMyName = require("./whatIsMyName");

test("My name is Bruno? Yes", () => {
    expect(whatIsMyName("Bruno")).toBe(true);
});

test("My name is Fernando? No", () => {
    expect(whatIsMyName("Fernando")).toBe(false);
});