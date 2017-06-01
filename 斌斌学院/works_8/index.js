var front = document.getElementById("front");
var mid = document.getElementById("mid");
var hind = document.getElementById("hind");
var _root = document.getElementById("root");
var timer = 0;


function travel(Node){//使用 temier += 500 使每个setTimeout能够依次执行
  setTimeout(function(){
    Node.classList.add("ing");
  }, timer += 500);

  setTimeout(function(){
    Node.classList.remove("ing");
  }, timer += 500);
}


function Node(_div){
  this.data = _div.textContent;
  this.parent = null;
  this.children = [];
}

function Tree(_div){
  var node = new Node(_div);
  this.root = _div;
}

var tree = new Tree(_root);





front.onclick = function a(callback) {

    // this is a recurse and immediately-invoking function
    (function recurse(currentNode) {
        // step 2

        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3

            recurse(currentNode.children[i]);
            travel(currentNode);

        }

        // step4 回调
        (currentNode);

        // step 1
    })(tree.root);

}






























// function travel(Node){//使用 temier += 500 使每个setTimeout能够依次执行
//   setTimeout(function(){
//     Node.classList.add("ing");
//   }, timer += 500);
//
//   setTimeout(function(){
//     Node.classList.remove("ing");
//   }, timer += 500);
// }
//
// function preOrder(Node){//先序遍历
//   if(Node){
//     travel(Node);
//     preOrder(Node.children[0]);
//     preOrder(Node.children[1]);
//   }
// }
//
// function midOrder(Node){//中序遍历
//   if(Node){
//     midOrder(Node.children[0]);
//     travel(Node);
//     midOrder(Node.children[1]);
//   }
// }
//
// function reaOrder(Node){//后序遍历
//   if(Node){
//     reaOrder(Node.children[0]);
//     reaOrder(Node.children[1]);
//     travel(Node);
//   }
// }
//
// front.onclick = function(){//每次点击初始化timer，否则第二次执行遍历，时间将延长很多
//   timer = 0;
//   preOrder(_root);
// }
//
// mid.onclick = function(){
//   timer = 0;
//   midOrder(_root);
// }
//
// hind.onclick = function(){
//   timer = 0;
//   reaOrder(_root);
// }
