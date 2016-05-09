/**
 * Created by cx on 2016/3/28.
 */
var canvaswidth=800;
var canvasheight=600;

var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
canvas.width=canvaswidth;
canvas.height=canvasheight;
var img=new Image();
var clippingregion={x:400,y:200,r:50};
img.src="1.jpg";

img.onload= function (e) {
    initcanvas();
};
function initcanvas () {
    clippingregion={x:Math.random()*700+50,y:Math.random()*500+50,r:50};
    draw(img,clippingregion);
}
function setclippingregion(clippingregion){
    context.beginPath();
    context.arc(clippingregion.x,clippingregion.y,clippingregion.r,0,Math.PI*2,false);
    context.clip();
}
function draw(img,clippingregion) {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    setclippingregion(clippingregion);
    context.drawImage(img,0,0);
    context.restore();
}
function show(){

    var ani=setInterval(function(){
        clippingregion.r=clippingregion.r+20;
        if(clippingregion.r>1000){
            clearInterval(ani);
        }
        draw(img,clippingregion)
    },30)
}
function reset(){
    initcanvas();
}

