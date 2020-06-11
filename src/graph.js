const createGraph = (pairs) => {
  return pairs.reduce((graph, [from, to]) => {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
    return graph;
  }, {});
};

const bfs = function (pairs, source, target) {
  const graph = createGraph(pairs);
  const queue = [source];
  const visited = [];
  while (queue.length) {
    const nodeToVisit = queue.shift();
    const nodes = graph[nodeToVisit] || [];
    if (nodes.includes(target)) return true;
    visited.push(nodeToVisit);
    nodes.forEach((node) => {
      if (!visited.includes(node) && !queue.includes(node)) queue.push(node);
    });
  }
  return false;
};

module.exports = { bfs };
