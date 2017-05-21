var num = document.querySelector("#num");
var leftIn = document.querySelector("#leftIn");
var rightIn = document.querySelector("#rightIn");
var leftOut = document.querySelector("#leftOut");
var rightOut = document.querySelector("#rightOut");
var tip = document.querySelector("#tip");
var que = document.querySelector("#queue");


function check(item){//输入数字检查
  var reg=/^[0-9]+$/;

  if(item == ""){//空
    tip.textContent = "Please input a number";
    return false;
  }
  else if(!reg.test(item)){//非纯数字
    tip.textContent = "Please input only number";
    return false;
  }
  else{
      tip.textContent = "";
      return true;
  }
}

leftIn.onclick = function(){//左插入
  var item = num.value;
  var flag = check(item);
  var len = que.children.length;
  var square = document.createElement("div");
  var content = document.createElement("p");

  if(flag){
    if (len > 0){//如果队列中已经有元素，则左插入
      que.insertBefore(square, que.firstChild);
      square.appendChild(content);
      content.textContent = item;
    }
    else{//如果队列中无元素，直接插入
      que.appendChild(square);
      square.appendChild(content);
      content.textContent = item;
    }
  }
  
  num.value = "";
}

rightIn.onclick = function(){//右插入
  var item = num.value;
  var flag = check(item);
  var len = que.children.length;
  var square = document.createElement("div");
  var content = document.createElement("p");

  if(flag){
    que.appendChild(square);
    square.appendChild(content);
    content.textContent = item;
  }

  num.value = "";
}

leftOut.onclick = function(){//左删除
  var len = que.children.length;
  if(len > 0){
      que.removeChild(que.firstChild);
  }
  else{
    tip.textContent = "There is no Element";
  }
}

rightOut.onclick = function(){//右删除
  var len = que.children.length;
  if(len > 0){
      que.removeChild(que.lastChild);
  }
  else{
    tip.textContent = "There is no Element";
  }
}
