var num = document.querySelector("#num");
var leftIn = document.querySelector("#leftIn");
var rightIn = document.querySelector("#rightIn");
var leftOut = document.querySelector("#leftOut");
var rightOut = document.querySelector("#rightOut");
var tip = document.querySelector("#tip");
var que = document.querySelector("#queue");
var sort = document.querySelector("#sort");
var items = 0;


function check(item){//输入数字检查
  var reg=/^[0-9]+$/;

  if(item > 100 || item < 10){
    tip.textContent = "Please input a number between 10 an 100";
    return false;
  }
  else if(!reg.test(item)){//非纯数字
    tip.textContent = "Please input only a number";
    console.log(item);
    return false;
  }
  else{
      tip.textContent = "";
      return true;
  }
}

leftIn.onclick = function(){//左插入
  var item = parseInt(num.value);
  var flag = check(item);
  var len = que.children.length;
  var square = document.createElement("div");
  var content = document.createElement("p");

  if(flag && items <= 60){
    if (len > 0){//如果队列中已经有元素，则左插入
      que.insertBefore(square, que.firstChild);
      square.appendChild(content);
      content.textContent = item;
      square.style.height = item * 5 + "px";
      items++;
    }
    else{//如果队列中无元素，直接插入
      que.appendChild(square);
      square.appendChild(content);
      square.style.height = item * 5 + "px";
      content.textContent = item;
      items++;
    }
  }
  else if(item >= 60){
    alert("the elements you have inset were full!")
  }

  num.value = "";
}

rightIn.onclick = function(){//右插入
  var item = num.value;
  var flag = check(item);
  var len = que.children.length;
  var square = document.createElement("div");
  var content = document.createElement("p");

  if(flag && items <= 60){
    que.appendChild(square);
    square.appendChild(content);
    square.style.height = item * 5 + "px";
    content.textContent = item;
    items++;
  }
  else if(item >= 60){
    alert("the elements you have inset were full!")
  }

  num.value = "";
}

leftOut.onclick = function(){//左删除
  var len = que.children.length;
  if(len > 0){
      que.removeChild(que.firstChild);
      items--;
  }
  else{
    tip.textContent = "There is no Element";
  }
}

rightOut.onclick = function(){//右删除
  var len = que.children.length;
  if(len > 0){
      que.removeChild(que.lastChild);
      items--;
  }
  else{
    tip.textContent = "There is no Element";
  }
}

sort.onclick = function(){
  var children = que.children;
  var hei = [];
  var len = que.children.length;
  var temp = 0;

  if(len > 1){
    for(var i = 0;i < len;i++){
      hei[i] = children[i].style.height;
    }
  }

  for(var i = 0; i < hei.length - 1; i++){
    for(var j =i + 1; j <= hei.length; j++){
      if(hei[i] > hei[j]){
        temp = hei[j];
        hei[j] = hei[i];
        hei[i] = temp;
      }
    }
  }

  for(var i = 0;i < len;i++){
    children[i].style.height = hei[i];
    children[i].firstChild.textContent = parseInt(children[i].style.height) / 5;
  }
}
