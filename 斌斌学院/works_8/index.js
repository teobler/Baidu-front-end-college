var bDFS = document.getElementById("DFS");
var bBFS = document.getElementById("BFS");
var keyword = document.getElementById("keyword");
var search = document.getElementById("search");
var _root = document.getElementById("root");
var timer = 0;
var i = 0;

function BFS(Node, Nodelist){
  if(Node){
    travel(Node);
    Nodelist.push(Node);
    BFS(Node.nextElementSibling, Nodelist);
    Node = Nodelist[i++];
    BFS(Node.firstElementChild, Nodelist);
  }
}

function travel(Node){//使用 temier += 500 使每个setTimeout能够依次执行
  setTimeout(function(){
    Node.classList.add("ing");
  }, timer += 300);

  setTimeout(function(){
    Node.classList.remove("ing");
  }, timer += 300);
}



bDFS.onclick = function () {
  timer = 0;
  var Node = _root;
  var Nodelist = [];

  (function DFS(Node, Nodelist){
    if(Node){
      travel(Node)
      Nodelist.push(Node)
      for(var i = 0; i < Node.children.length; i++){
        DFS(Node.children[i], Nodelist)
      }
    }
  })(Node, Nodelist);
}

bBFS.onclick = function (){
  timer = 0;
  var Node = _root;
  var Nodelist = [];
  var i = 0;
  BFS(Node, Nodelist);
}

search.onclick = function(){
  var key = keyword.value;
  var flag;
  var Node = _root;
  var node;
  var Nodelist = []

  if(Node){
    travel(Node)
    Nodelist.push(Node);
    BFS(Node.nextElementSibling, Nodelist)
    Node = Nodelist[i++];
    BFS(Node.firstElementChild, Nodelist);
    console.log(Node)
  }

  for(var j = 0; j < Nodelist.length; j++){
    if(key == Nodelist[j]){
      node = Nodelist[j].childNodes[0].nodeValue

    }
    console.log(Nodelist[j].childNodes[0].nodeValue)
  }

  if(node == undefined){
    alert("can not find that value")
  }
  else(
    node.classList.add("ing")
  )
}
