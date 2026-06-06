const text =
"Thank you for being in my life. I love you endlessly ❤️";

let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,50);
    }
}

typeWriter();