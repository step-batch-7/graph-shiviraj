const pairs = require('./data.json');
const { bfs } = require('./src/graph');

console.log(bfs(pairs, 'mm', 'jj'));
