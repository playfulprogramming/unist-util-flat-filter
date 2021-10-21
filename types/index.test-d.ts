import {Node, Parent} from 'unist';
import {expectError} from 'tsd';
import flatFilter from './index.js';

const n1: Node<{value: string}> = {type: 'a', data: {value: 'a'}};
const parent: Parent = {type: 'root', children: [n1]};

/**
 * Incorrect number of arguments
 */
expectError(flatFilter(parent));

/**
 * Incorrect types of arguments
 */
expectError(flatFilter((v: Node) => !v));
expectError(flatFilter(n1, (v: Node) => Boolean(v)));

/**
 * Incorrect test type
 */
expectError(flatFilter(parent, true));

/**
 * Correct test type
 */
flatFilter(parent, (v) => Boolean(v));
