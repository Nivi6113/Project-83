canvas = document.getElementById("myCanvas")
ctx= canvas.getContext("2d")
color="red";
width_of_line ="1"
MouseEvent ="empty"
last_position_of_x =0
last_position_of_y =0

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value
    width_of_line=document.getElementById("width_of_line").value;
    MouseEvent="mousedown"
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{

    MouseEvent="mouseup"
   
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{

    MouseEvent="mouseleave"
   
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{

    current_positon_of_mouse_x= e.clientX -  canvas.offsetLeft;
    current_positon_of_mouse_y= e.clientY - canvas.offsetTop;

    if(MouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth =width_of_line;

    ctx.moveTo(last_position_of_x,last_position_of_y)

    ctx.lineTo(current_positon_of_mouse_x,current_positon_of_mouse_y)
    ctx.stroke();}
    last_position_of_x=current_positon_of_mouse_x
    last_position_of_y=current_positon_of_mouse_y ;

    

 console.log("last_position_of_x and y cordinates =");
 console.log("x =" +current_positon_of_mouse_x +"y="+ current_positon_of_mouse_y)  
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}