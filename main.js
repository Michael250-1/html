function preload(){

}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.hide();
    tintcolor="";
}
function draw(){
    image(video,0,0,500,400);
    tint(tintcolor);
}
function take_snapshot(){
save("Michael.png");
}
function filter(){
    tintcolor=document.getElementById("colorname").value;
}