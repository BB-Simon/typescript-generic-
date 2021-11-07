const { formatName } = require('./format-name.js');

const obj = {
    last: "Chowdery",
    first: "Simon"
};

test("format should be Chowdery, Simon", () => {
    expect(formatName(obj)).toBe("Chowdery, Simon")
})
test("should not be Simon Chowdery", () => {
    expect(formatName(obj)).not.toBe("Simon Chowdery")
})
test("should not be empty", () => {
    expect(formatName(obj)).toBeTruthy()
})
