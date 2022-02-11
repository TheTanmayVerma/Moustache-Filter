var nose_x = 0;
var nose_y = 0;
function preload(){
khadak_singh = loadImage("https://i.postimg.cc/jStfxfFg/moustache-PNG45.png");
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(khadak_singh,nose_x - 13,nose_y + 7,30,30);

}
function take_snapshot(){
    save("My Selfie with nose clown.png")

}
function modelLoded(){
    console.log("Posenet is intialized");
}
function gotPoses(results){
 if (results.length>1){
console.log(results);
nose_x = results[0].pose.nose.x;
nose_y = results[0].pose.nose.y;
console.log("nose x is = " + nose_x );
console.log("nose y is = " + nose_y);
 }

}
