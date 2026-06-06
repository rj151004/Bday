function openLetter(){
    document.querySelector(".envelope")
    .classList.toggle("open");
}

let images=[
"images/frame.jpg",
"images/da3.jpg",
"images/frameblack.jpg",
"images/da.jpg",
"images/da2.jpg"
];

let i=0;

setInterval(()=>{
i=(i+1)%images.length;
document.getElementById("slide").src=images[i];
},3000);

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";
heart.classList.add("heart");

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},500);

