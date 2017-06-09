var bDFS = document.getElementById("DFS");
var bBFS = document.getElementById("BFS");
var keyword = document.getElementById("keyword");
var key = document.getElementById("key");
var add = document.getElementById("add");
var del = document.getElementById("del");
var search = document.getElementById("search");
var _root = document.getElementById("root");
var targets = [];     //点击事件中target的存储数组
var t = 0;            //点击事件的计时器
var timer = 0;        //计时器，进行自叠加运算，使每个访问travel函数能够依次执行
var i = 0;            //广度优先遍历的计时器，依次选择每一层的节点
var node = ''         //所搜索节点的临时存储变量


function BFS(Node, Nodelist){  //广度优先搜索的递归实现
  if(Node){
    travel(Node);
    Nodelist.push(Node);
    BFS(Node.nextElementSibling, Nodelist);
    Node = Nodelist[i++];
    BFS(Node.firstElementChild, Nodelist);
  }
}


function DFS(Node, Nodelist){ //深度优先搜索的递归实现
  if(Node){
    travel(Node)
    Nodelist.push(Node)
    for(var i = 0; i < Node.children.length; i++){
      DFS(Node.children[i], Nodelist)
    }
  }
}


function travel(Node){        //访问节点，增加class，改变背景色，只有再删除
  setTimeout(function(){
    Node.classList.add("ing");
  }, timer += 300);

  setTimeout(function(){
    Node.classList.remove("ing");
  }, timer += 300);
}


function clear(node){
  if(node != ''){               //移除前一次搜索的搜索结果
    node.classList.remove("ing")
    key = ''
  }
}

_root.onclick = function(){
  var target = event.target; //触发事件的对象的引用，用来获取鼠标点击事件中点击的元素
  targets.push(target);      //将当前dom元素节点加入数组
  i++;                       //计时器+1
  if(i > 1){
    targets[i-2].classList.remove("ing");  //删除前一个所选节点的颜色
  }
  target.classList.add("ing");         //为当前所选节点加上颜色
}

add.onclick = function(){
  var div = document.createElement("div");    //创建节点并加入所选节点子元素的末尾
  div.textContent = key.value
  targets[i-1].appendChild(div);
}

del.onclick = function(){
  targets[i-1].remove();      //删除当前节点
}

bDFS.onclick = function () {  //DFS按钮
  timer = 0;
  var Node = _root;
  var Nodelist = [];

  clear(node)
  DFS(Node, Nodelist)
}


bBFS.onclick = function (){ //BFS按钮
  timer = 0;
  var Node = _root;
  var Nodelist = [];

  clear(node)
  BFS(Node, Nodelist);
  i = 0;
}


search.onclick = function(){  //搜索按钮，使用BFS
  var key = keyword.value;
  var Node = _root;
  var Nodelist = []
  timer = 0;
  clear(node)

  BFS(Node, Nodelist);

  for (var j = 0; j < Nodelist.length; j++){    //遍历所有节点值，与搜索值相比较
    var temp = Nodelist[j].childNodes[0].nodeValue;

    while (temp.indexOf(" ") != -1){
      temp = temp.replace(" ", "");
      temp = temp.replace("\n", "");
    }

    if(key == temp){
      node = Nodelist[j]
    }
  }

  if (node == undefined){              //没找到
    setTimeout(function(){
      alert("can not find that value")
    }, timer += 500)
  }
  else (
    setTimeout(function(){            //找到之后标记
      node.classList.add("ing")
    }, timer += 500)
  )

  i = 0;
}
