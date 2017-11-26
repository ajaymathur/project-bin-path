'use strict';
import * as path from 'path';
import test from 'ava';
import projectBin from '.';

test('async returns path to bin for packages', async t => {
  t.is(await projectBin(path.join(__dirname, '__fixatures__', 'foo')), path.join(__dirname, '__fixatures__', 'foo', 'node_modules', '.bin'));
});

test('sync returns path to bin for packages', t => {
  t.is(projectBin.sync(path.join(__dirname, '__fixatures__', 'foo')), path.join(__dirname, '__fixatures__', 'foo', 'node_modules', '.bin'));
});
