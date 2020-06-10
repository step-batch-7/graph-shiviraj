const createGraph = (pairs) => {
  return pairs.reduce((graph, [from, to]) => {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
    return graph;
  }, {});
};

const bfs = function (pairs, source, target) {
  if (!source || !target) return false;
  const graph = createGraph(pairs);
  const queue = [source];
  const visited = [];
  while (queue.length) {
    const nodeToVisit = queue.shift();
    if (graph[nodeToVisit].includes(target)) return true;
    visited.push(nodeToVisit);
    graph[nodeToVisit].forEach((node) => {
      if (!visited.includes(node) && !queue.includes(node)) queue.push(node);
    });
  }
  return false;
};

module.exports = { bfs };
