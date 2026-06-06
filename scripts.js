function addNum(num){
let pass=document.getElementById("passcode");
if(pass.value.length<4){
pass.value+=num;
}
}

function clearPass(){
let pass=document.getElementById("passcode");
pass.value=pass.value.slice(0,-1);
}

function checkPass(){
let pass=document.getElementById("passcode").value;

if(pass==="2106"){
window.location.href="home.html";
}else{
alert("Guthna Lra Pgli😂 Galat hai fir se try kr!");
}
}