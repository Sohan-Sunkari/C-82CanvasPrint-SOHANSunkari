var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var lastPositionX, lastPosistionY;

var color = "black";

var widthOfLine = "1";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

    current_posistion_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_posistion_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastPositionX , lastPosistionY);
        ctx.lineTo(current_posistion_of_mouse_x , current_posistion_of_mouse_y);
        ctx.stroke();
    }

    lastPositionX = current_posistion_of_mouse_x;
    lastPosistionY = current_posistion_of_mouse_y;
}
