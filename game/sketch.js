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
  //console.log(mouseX + ", " + mouseY);

  fill(255, 0, 0, 25);
  rectMode(CENTER);


  for(let i = 82; i < 861; i += 74){

    for(let j = 313; j < 558; j += 46){

      rect(i, j, 60, 25);

    }

  }

  rect(139, 237, 90, 40);

  circle(1000, 222, 30);

  rect(92, 30, 120, 40);

}

function mousePressed(){

  for(let i = 53; i < 860; i += 73){

    for(let j = 112; j < 860 ; j += 73){

        if(mouseX > i && mouseX < j && mouseY > 299 && mouseY < 326){

          console.log("e string");

        }

    } 

  }

  /*if(mouseX > 53 && mouseX < 112 && mouseY > 299 && mouseY < 326){

    console.log("F4");

  }*/
}