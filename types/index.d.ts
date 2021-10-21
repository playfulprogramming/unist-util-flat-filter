// TypeScript Version: 3.5

import {Node, Parent} from 'unist';
import {Test} from 'unist-util-is';

/**
 * Create a new tree consisting of copies of all nodes that pass test.
 * The tree is walked in preorder (NLR), visiting the node itself, then its head, etc.
 *
 * @param tree Tree to filter
 * @param filter unist-util-is compatible test
 */
declare function unistUtilFilter<T extends Node>(
  tree: Parent,
  filter: Test
): T | null;

export default unistUtilFilter;
