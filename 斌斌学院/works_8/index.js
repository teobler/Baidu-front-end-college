var DFS = document.getElementById("DFS");
var BFS = document.getElementById("BFS");
var keyword = document.getElementById("keyword");
var search = document.getElementById("search");
var _root = document.getElementById("root");
var timer = 0;


function travel(Node){//使用 temier += 500 使每个setTimeout能够依次执行
  setTimeout(function(){
    Node.classList.add("ing");
  }, timer += 300);

  setTimeout(function(){
    Node.classList.remove("ing");
  }, timer += 300);
}





DFS.onclick = function () {
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
  })(DFS(Node, Nodelist));
}

BFS.onclick = function (){
  timer = 0;
  var Node = _root;
  var Nodelist = [];
  var i = 0;

  (function BFS(Node, Nodelist){
    if(Node){
      travel(Node)
      Nodelist.push(Node);
      BFS(Node.nextElementSibling, Nodelist)
      Node = Nodelist[i++];
      BFS(Node.firstElementChild, Nodelist);
    }
  })(BFS(Node, Nodelist));

}

search.onclick = function(){
  var key = keyword.value;
  var flag = 0;

  if(Node){
    travel(Node)
    if(Node.childNodes[0].nodeValue == key){
      flag = 1;
      Node.classList.add("ing");

    }
    Nodelist.push(Node);
    BFS(Node.nextElementSibling, Nodelist)
    Node = Nodelist[i++];
    BFS(Node.firstElementChild, Nodelist);
  }

  if(flag ==1){

  }
}
