var content = document.querySelector("#con");
var insert = document.querySelector("#insert");
var inquire = document.querySelector("#inquire");
var quirBtn = document.querySelector("#inquBtn");
var del = document.querySelector("#del");
var que = document.querySelector("#queue");
var tipOne = document.querySelector("#tipOne");
var tipTwo = document.querySelector("#tipTwo");


function parting(){
  var reg = /[,，.。、\s\n]/;
  var text = content.value;
  var items = text.split(reg);
  return items;
}

insert.onclick = function(){
  var items = parting();
  for(var i = 0; i < items.length; i++){
    var div = document.createElement("div");
    var p = document.createElement("p");
    que.appendChild(div);
    div.appendChild(p);
    p.textContent = items[i];
  }
}

quirBtn.onclick = function(){
  var key = inquire.value
  var temp;
  var qReg = eval("/" + key + "/g");
  var spoReg = /<span>/g;
  var sptReg = /<\/span>/g
  var queLength = que.children.length;
  var re = "<span>" + inquire.value + "</span>";

  for(var i = 0; i < queLength; i++){
    temp = que.children[i].firstChild.innerHTML.replace(spoReg, "");
    que.children[i].firstChild.innerHTML = temp;
    temp = que.children[i].firstChild.innerHTML.replace(sptReg, "");
    que.children[i].firstChild.innerHTML = temp;
  }

  for(var i = 0; i < queLength; i++){
    temp = que.children[i].firstChild.innerHTML.replace(qReg, re);
    que.children[i].firstChild.innerHTML = temp;
  }
}

del.onclick = function(){
  content.value = "";
  inquire.value = "";

  while(que.firstChild != null){
    que.removeChild(que.firstChild);
  }
}
