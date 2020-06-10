const { bfs } = require('../src/graph');
const pairs = require('./fixture/data.json');

describe('BFS', () => {
  test('Should give true if nodes are connected', () => {
    expect(bfs(pairs, 'mm', 'aa')).toBeTruthy();
  });

  test('Should give false if nodes are connected', () => {
    expect(bfs(pairs, 'mm', 'jj')).toBeFalsy();
  });

  test('Should give false if source and target not provided', () => {
    expect(bfs(pairs)).toBeFalsy();
    expect(bfs(pairs, 'mm')).toBeFalsy();
  });

  test('Should give true if node connected to itself', () => {
    expect(bfs(pairs)).toBeFalsy();
    expect(bfs(pairs, 'aa', 'aa')).toBeTruthy();
  });

  test('Should give false if single node not connected to itself', () => {
    expect(bfs(pairs)).toBeFalsy();
    expect(bfs(pairs, 'mm', 'mm')).toBeFalsy();
  });
});
