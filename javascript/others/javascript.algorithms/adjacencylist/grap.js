//顶点用数字表示，边用邻接表表示。
function Graph(v) { //v:图的顶点数
  this.vertices = v;
  this.edges = 0; //图的边数
  this.adj = []; //用作邻接表
  this.marked = []; //在深度优先搜索中标记某顶点是否访问过。
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = []; //顶点i的邻接表初始化
  }
  this.addEdge = addEdge; //在图中添加边
  this.showGraph = showGraph; //显示图
  this.dfs = dfs; //深度优先搜索
  this.bfs = bfs; //广度优先搜索
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
}

function addEdge(v, w) {
  this.adj[v].push(w); //v的邻接表添加顶点w
  this.adj[w].push(v); //w的邻接表添加顶点v
  this.edges++; //图的边数加1
}

function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    document.write(i + " -> ");
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined)
        document.write(this.adj[i][j] + ' ');
    }
    document.write("<br>");
  }
}

function dfs(v) { //深度优先搜索
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    document.write("Visited vertex: " + v + "<br>");
  }
  for (var k = 0; k < this.adj[v].length; k++) {
    var w = this.adj[v][k];
    if (w != undefined && !this.marked[w]) {
      this.dfs([w]);
    }
  }
}

function bfs(v) {
  var que = []; //队列用来保存被访问节点的分支节点
  que.push(v); //起点入队列
  while (que.length != 0) {
    v = que.shift(); //出队
    if (!this.marked[v]) { //如果当前顶点没有被访问过
      document.write("Visited vertex: " + v + "<br>"); //访问当前顶点
      this.marked[v] = true; //标记为已访问过
    }
    //将当前节点的分支(邻接表）节点加入到队列中
    for (var i = 0; i < this.adj[v].length; i++) {
      if (this.adj[v][i] != undefined && !this.marked[this.adj[v][i]]) {
        que.push(this.adj[v][i]);
      }
    }
  }
}
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
document.write("深度优先搜索: <br>");
g.dfs(0);
document.write("<hr>");

bg = new Graph(5);
bg.addEdge(0, 1);
bg.addEdge(0, 2);
bg.addEdge(1, 3);
bg.addEdge(2, 4);
bg.showGraph();
document.write("广度优先搜索: <br>");
bg.bfs(0);
