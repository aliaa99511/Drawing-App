





var canvas=document.querySelector("canvas")

var ctx=canvas.getContext("2d")

canvas.width=753;
canvas.height=662;
canvas.style.border="1px solid gray"




canvas.addEventListener("mousedown",start)
canvas.addEventListener("mousemove",draw)
canvas.addEventListener("mouseup",end)

var myBoolean=false;

function start(){
    myBoolean=true;
}

function draw(e){

    var color=document.getElementById("color");
    var range=document.getElementById("range")
    
    var x=e.clientX-canvas.offsetLeft;
    var y=e.clientY-canvas.offsetTop;

    if(!myBoolean) return;

    ctx.lineCap="round"
    ctx.lineJoin="round"
    ctx.lineWidth = range.value;
    ctx.strokeStyle = color.value;

    ctx.lineTo(x,y);
    ctx.stroke();
}

function end(){
    myBoolean=false;
    ctx.beginPath();
}



var reset=document.querySelector("button");
reset.addEventListener("click",clearCanvas);

function clearCanvas(e){
    var x=e.clientX-canvas.offsetLeft;
    var y=e.clientY-canvas.offsetTop;

    ctx.clearRect(0,0,canvas.width,canvas.height)
}