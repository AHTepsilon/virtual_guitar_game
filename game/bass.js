let imgBg;

let loopBeat;

let startAudioBtn;

let sketch = new p5(function(p5){

    p5.preload = function preload(){
    
    }
    
    p5.setup = function setup() {

      p5.createCanvas(1080, 720);
  
      p5.loadImage("imgs/bassShowCase.png", imgBg => {
        p5.image(imgBg, 0, 0);
      });
    
      startAudioBtn = document.getElementById("startAudioButton");

    }
    
    p5.draw = function draw() {
      console.log(p5.mouseX + ", " + p5.mouseY);
    
      p5.fill(255, 0, 0, 25);
      p5.rectMode(p5.CENTER);
      changeCursor();
    
    
      /*for(let i = 82; i < 861; i += 74){
    
        for(let j = 313; j < 558; j += 46){
    
          p5.rect(i, j, 60, 25);
    
        }
        
      }*/
    
      p5.circle(1000, 222, 30);
    
      p5.rect(92, 30, 120, 40);
    
    }


    p5.mousePressed = function mousePressed(){
  
        //go back
    if(p5.mouseX > 32 && p5.mouseX < 150 && p5.mouseY > 10 && p5.mouseY < 45){
  
        console.log("Go Back");
    
        window.location.href = "https://ahtepsilon.github.io/shopRepo/dist";
      }
  
      //Muted
      if (p5.dist(p5.mouseX, p5.mouseY, 1000, 222) < 10 ) {
        console.log("muted");
      }
    }

    function changeCursor(){
  
        if(p5.mouseX > 32 && p5.mouseX < 150 && p5.mouseY > 10 && p5.mouseY < 45){
          p5.cursor(p5.HAND);
        }

        else if (p5.dist(p5.mouseX, p5.mouseY, 1000, 222) < 10 ) {
          p5.cursor(p5.HAND);
        }
      
        else{
          p5.cursor(p5.ARROW);
        }
      
      }
    
  
  });