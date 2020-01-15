var convert = require("unist-util-is/convert");

module.exports = flatFilter;

function flatFilterGeneric(node, test) {
  var is = convert(test);
  if (!node) return [];
  if (is(node)) return [node];
  if (!node.children) return [];
  let acceptedChildren = [];
  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];
    var flatFilterResult = flatFilterGeneric(child, test);
    if (flatFilterResult && flatFilterResult.length) {
      // Take array results and push to the returned array to flatten it
      for (var ii = 0; ii < flatFilterResult.length; ii++) {
        acceptedChildren.push(flatFilterResult[ii]);
      }
    }
  }
  return acceptedChildren;
}

function flatFilter(node, test) {
  var results = flatFilterGeneric(node, test);
  if (!results || !results.length) return null;
  return {
    type: "root",
    children: results
  };
}
