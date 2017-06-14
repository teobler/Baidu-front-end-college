var keyword = document.getElementById("appellation");
var btn = document.getElementById("appellation-btn");
var tip = document.getElementById("appellation-tip");
var warp = document.getElementById("warp");

btn.onclick = function(){
    var key = keyword.value;
    var len = key.length;
    var codeval;
    var code_sum = 0;

    for (var i = 0; i < key.length; i++){
        codeval = key.charCodeAt(i);
        if(codeval <= 0XFF && codeval >= 0X00){
            code_sum++;
        }
        else{
            code_sum += 2;
        }
    }

    if (key == "") {
        tip.textContent = "姓名不能为空";
        tip.style.color = "red";
        warp.style.border = "1px solid #DC143C";
    }
    else if (codeval < 4 || codeval > 16){
        tip.textContent = "字符长度为4~16";
    }
    else{
        tip.textContent = "格式名称正确";
        tip.style.color = "#00FF7F";
        warp.style.border = "1px solid #00FF7F";
    }
}
