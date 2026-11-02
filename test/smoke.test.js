import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const html = readFileSync('dist/index.html', 'utf8');

test('built page contains the real text and no client JS', () => {
  for (const text of ['Software Engineer', 'Backend and distributed systems', 'raft-kv', 'ChessLab', 'Playkit']) {
    assert.ok(html.includes(text), `missing: ${text}`);
  }
  assert.ok(!html.includes('<script'), 'page should ship no scripts');
});

test('built page has no placeholders or removed content', () => {
  for (const text of ['TODO', 'XDP', 'eBPF', 'React App', 'chesslab.club', 'Blog']) {
    assert.ok(!html.includes(text), `should not appear: ${text}`);
  }
});

test('download link points at a shipped CV', () => {
  assert.ok(html.includes('href="/Joao-Sousa-CV.pdf"'));
  assert.ok(existsSync('dist/Joao-Sousa-CV.pdf'));
});
