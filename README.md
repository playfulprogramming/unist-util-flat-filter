# unist-util-filter

[**unist**](https://github.com/syntax-tree/unist) utility to create a new tree with all nodes that pass the
given test.

## Install

[npm](https://docs.npmjs.com/cli/install):

```sh
npm install unist-util-flat-filter
```

## Usage

```js
import u from 'unist-builder';
import flatFilter from 'unist-util-flat-filter';

const tree = u('root', [
  u('leaf', '1'),
  u('node', [u('leaf', '2'), u('node', [u('leaf', '3')])]),
  u('leaf', '4')
])

const newTree = flatFilter(tree, node => node.type === 'leaf')

console.dir(newTree, {depth: null})
```

Yields:

```js
{
  type: 'root',
  children: [
    { type: 'leaf', value: '1' },
    { type: 'leaf', value: '2' },
    { type: 'leaf', value: '3' },
    { type: 'leaf', value: '4' }
  ]
}
```

## API

### `filter(tree[, test])`

Create a new [tree](https://github.com/syntax-tree/unist#tree) consisting of copies of all nodes that pass `test`.
The tree is walked in [inorder](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/), visiting the parent, then the children nodes node itself, etc.

###### Parameters

*   `tree` ([`Node?`](https://github.com/syntax-tree/unist#node))
    — [Tree](https://github.com/syntax-tree/unist#tree) to filter
*   `test` ([`Test`](https://github.com/syntax-tree/unist-util-is), optional) — [`is`](https://github.com/syntax-tree/unist-util-is)-compatible test (such as a
    [type](https://github.com/syntax-tree/unist#type))

###### Returns

[`Node?`](https://github.com/syntax-tree/unist#node) — New filtered [tree](https://github.com/syntax-tree/unist#tree).
`null` is returned if `tree` itself didn’t pass the test, or is cascaded away.
