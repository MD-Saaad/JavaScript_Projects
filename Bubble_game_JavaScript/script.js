var timer = 60;
var score = 0;
var hitrn = 0;



function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}



function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}



function makebubble(){
    var clutter = "";

for(var i=1; i<=168; i++){

    var no = Math.floor(Math.random()*10)

    clutter += `<div class="bubble">${no}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runtimer(){
    var timerint =setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML= `<h1>GAME OVER</h1>`;
        }
        
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickekdum= (Number(dets.target.textContent));

    if(clickekdum === hitrn){
        increaseScore();
        makebubble();
        newHit();
    }
})


newHit();
runtimer();
makebubble();