const { bfs } = require('../src/graph');

describe('BFS', () => {
  test('Should give true if nodes are connected', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
    ];
    expect(bfs(pairs, 'a', 'b')).toBeTruthy();
  });

  test('Should give false if nodes are not connected', () => {
    const pairs = [
      ['a', 'b'],
      ['c', 'd'],
    ];
    expect(bfs(pairs, 'a', 'd')).toBeFalsy();
  });

  test('Should give true if node is directly connected to itself', () => {
    const pairs = [['a', 'a']];
    expect(bfs(pairs, 'a', 'a')).toBeTruthy();
  });

  test('Should give false if node is not connected to itself', () => {
    const pairs = [['a', 'b']];
    expect(bfs(pairs, 'a', 'a')).toBeFalsy();
  });

  test('Should give true if node is connected to itself by cyclic', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'a'],
    ];
    expect(bfs(pairs, 'a', 'a')).toBeTruthy();
  });
});
