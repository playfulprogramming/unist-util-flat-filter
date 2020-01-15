const flatFilter = require("./index");

test("filters flatly", () => {
  const tree = {
    type: "root",
    children: [
      {
        type: "node",
        children: [{ type: "leaf", value: "1" }]
      },
      { type: "leaf", value: "2" }
    ]
  };

  const expected = {
    type: "root",
    children: [
      { type: "leaf", value: "1" },
      { type: "leaf", value: "2" }
    ]
  };

  expect(flatFilter(tree, node => node.type === "leaf")).toMatchObject(
    expected
  );
});

test("returns null when no results", () => {
  const tree = {
    type: "root",
    children: [
      {
        type: "node",
        children: [{ type: "leaf", value: "1" }]
      },
      { type: "leaf", value: "2" }
    ]
  };

  expect(flatFilter(tree, node => node.type === "test")).toBe(null);
});
