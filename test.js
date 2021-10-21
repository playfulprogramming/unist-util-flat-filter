import {test} from 'tap';
import flatFilter from './index.js';

test('unist-util-flat-filter', (test) => {
  test.doesNotThrow(() => {
    const tree = {
      type: 'root',
      children: [
        {
          type: 'node',
          children: [{type: 'leaf', value: '1'}]
        },
        {type: 'leaf', value: '2'}
      ]
    };

    test.deepEqual(
      flatFilter(tree, (node) => node.type === 'leaf'),
      {
        type: 'root',
        children: [
          {type: 'leaf', value: '1'},
          {type: 'leaf', value: '2'}
        ]
      }
    );
  }, 'filters flatly');

  test.doesNotThrow(() => {
    const tree = {
      type: 'root',
      children: [
        {
          type: 'node',
          children: [{type: 'leaf', value: '1'}]
        },
        {type: 'leaf', value: '2'}
      ]
    };

    test.equal(
      flatFilter(tree, (node) => node.type === 'test'),
      null
    );
  }, 'returns null when no results');

  test.end();
});
