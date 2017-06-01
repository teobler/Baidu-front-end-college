var front = document.getElementById("front");
var mid = document.getElementById("mid");
var hind = document.getElementById("hind");
var _root = document.getElementById("root");
var timer = 0;

function travel(Node){
  setTimeout(function(){
    Node.classList.add("ing");
  }, timer += 500);

  setTimeout(function(){
    Node.classList.remove("ing");
  }, timer += 500);
}

function preOrder(Node){
  if(Node){
    travel(Node);
    preOrder(Node.children[0]);
    preOrder(Node.children[1]);
  }
}

function midOrder(Node){
  if(Node){
    midOrder(Node.children[0]);
    travel(Node);
    midOrder(Node.children[1]);
  }
}

function reaOrder(Node){
  if(Node){
    reaOrder(Node.children[0]);
    reaOrder(Node.children[1]);
    travel(Node);
  }
}

front.onclick = function(){
  timer = 0;
  preOrder(_root);
}

mid.onclick = function(){
  timer = 0;
  midOrder(_root);
}

hind.onclick = function(){
  timer = 0;
  reaOrder(_root);
}
