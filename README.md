# unist-util-filter

[**unist**][unist] utility to create a new tree with all nodes that pass the
given test.

## Install

[npm][]:

```sh
npm install unist-util-flat-filter
```

## Usage

```js
var u = require('unist-builder')
var flatFilter = require('unist-util-flat-filter')

var tree = u('root', [
  u('leaf', '1'),
  u('node', [u('leaf', '2'), u('node', [u('leaf', '3')])]),
  u('leaf', '4')
])

var newTree = flatFilter(tree, node => node.type === 'leaf')

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

Create a new [tree][] consisting of copies of all nodes that pass `test`.
The tree is walked in [order][], visiting the parent, then the children nodes node itself, etc.

###### Parameters

*   `tree` ([`Node?`][node])
    — [Tree][] to filter
*   `test` ([`Test`][is], optional) — [`is`][is]-compatible test (such as a
    [type][])

###### Returns

[`Node?`][node] — New filtered [tree][].
`null` is returned if `tree` itself didn’t pass the test, or is cascaded away.
