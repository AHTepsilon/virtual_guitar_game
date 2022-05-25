let imgBg;

function preload(){
  
}

function setup() {
  createCanvas(1080, 720);
  loadImage("imgs/background1.png", imgBg => {
    image(imgBg, 0, 0);
  });
}

function draw() {
  // put drawing code here
}