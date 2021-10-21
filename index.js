import {convert} from 'unist-util-is';

function flatFilterGeneric(node, test) {
  const is = convert(test);
  if (!node) return [];
  if (is(node)) return [node];
  if (!node.children) return [];
  const acceptedChildren = [];
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    const flatFilterResult = flatFilterGeneric(child, test);
    if (flatFilterResult && flatFilterResult.length > 0) {
      // Take array results and push to the returned array to flatten it
      for (const element of flatFilterResult) {
        acceptedChildren.push(element);
      }
    }
  }

  return acceptedChildren;
}

function flatFilter(node, test) {
  const results = flatFilterGeneric(node, test);
  if (!results || results.length === 0) return null;
  return {
    type: 'root',
    children: results
  };
}

export default flatFilter;
