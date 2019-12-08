/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//document.getElementById("btn").addEventListener("click", function(){
// alert("Hello World");
// });
window.onload = function () {
    document.getElementById("txt").value = "";
    
};

const fontSize =  parseInt(getComputedStyle(document.getElementById("txt")).getPropertyValue('font-size')); 
var f1 = 0;
var i = 2;
document.getElementById("btn").onclick = function () {  
    delayMsg(fontSize);    
    if(document.getElementById("checked").checked === true){
        document.getElementById("txt").style.fontWeight = "bold";
        document.getElementById("txt").style.color = "green";
        document.getElementById("txt").style.textDecoration = "underline";        
        onchange();
    }else if(document.getElementById("checked").checked === false){ 
        document.getElementById("txt").style.fontWeight = "normal";        
        document.getElementById("txt").style.color = null;
        document.getElementById("txt").style.textDecoration = null;                
        onchange();        
    }
};

function onchange(){
    alert("Bling has been added!!!");
}

var timer = null;
function delayMsg(fontSize) {
  if (timer === null) {
    timer = setInterval(increaseFont, 5000, fontSize);
  } else {
    clearInterval(timer);
    timer = null;
  }
}
function increaseFont(fontSize) {
   f1 = fontSize+ i; i+= 2;
  document.getElementById("txt").style.fontSize = f1 +"pt";
}


