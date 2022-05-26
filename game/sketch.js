let imgBg;

let loopBeat;

let startAudioBtn;

let lowEarr = [];
let Aarr = [];
let Darr = [];
let Garr = [];
let Barr = [];
let highEarr = [];

let e2, f2, fs2, g2, gs2, a2, as2, b2, c3, cs3, d3, ds3, e3, f3, fs3, g3, gs3, a3;

let sketch = new p5(function(p5){

  p5.preload = function preload(){
  
  }
  
  p5.setup = function setup() {
    p5.createCanvas(1080, 720);

    p5.loadImage("imgs/background1.png", imgBg => {
      p5.image(imgBg, 0, 0);
    });
  
    startAudioBtn = document.getElementById("startAudioButton");
  
    activateAudioProcessor();

    lowEarr = ["E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3"];

    e2 = new Tone.Synth().toDestination();
  }
  
  p5.draw = function draw() {
    console.log(p5.mouseX + ", " + p5.mouseY);
  
    p5.fill(255, 0, 0, 25);
    changeCursor();
    p5.rectMode(p5.CENTER);
  
  
    for(let i = 82; i < 861; i += 74){
  
      for(let j = 313; j < 558; j += 46){
  
        p5.rect(i, j, 60, 25);
  
      }
      
    }
  
    p5.rect(139, 237, 90, 40);
  
    p5.circle(1000, 222, 30);
  
    p5.rect(92, 30, 120, 40);
  
  }
  
  p5.mousePressed = function mousePressed(){
  
    /*for(let i = 53; i < 860; i += 73){
  
      for(let j = 112; j < 860 ; j += 73){
  
          if(p5.mouseX > i && p5.mouseX < j && p5.mouseY > 299 && p5.mouseY < 326){
  
            console.log("e string");
  
          }

          else if(p5.mouseX > i && p5.mouseX < j && p5.mouseY > 530 && p5.mouseY < 556){
            
            console.log("E string");

            lowEarr.forEach(note =>{

              e2.triggerAttackRelease(note, "4n");

            });          
          }
  
      } 
  
    }*/
    
    if(p5.mouseX > 2 && p5.mouseX < 33 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("E2", "4n");

    }

    if(p5.mouseX > 53 && p5.mouseX < 112 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("F2", "4n");

    }

    if(p5.mouseX > 127 && p5.mouseX < 183 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("F#2", "4n");

    }

    if(p5.mouseX > 199 && p5.mouseX < 260 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("G2", "4n");

    }
  
    if(p5.mouseX > 272 && p5.mouseX < 332 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("G#2", "4n");

    }

    if(p5.mouseX > 350 && p5.mouseX < 406 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("A2", "4n");

    }
    
    if(p5.mouseX > 421 && p5.mouseX < 482 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("A#2", "4n");

    }

    if(p5.mouseX > 497 && p5.mouseX < 557 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("B2", "4n");

    }

    if(p5.mouseX > 572 && p5.mouseX < 627 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("C3", "4n");

    }

    if(p5.mouseX > 643 && p5.mouseX < 702 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("C#3", "4n");

    }

    if(p5.mouseX > 718 && p5.mouseX < 778 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("D3", "4n");

    }

    if(p5.mouseX > 793 && p5.mouseX < 851 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("D#3", "4n");

    }

    if(p5.mouseX > 863 && p5.mouseX < 912 && p5.mouseY > 530 & p5.mouseY < 553){

      e2.triggerAttackRelease("E3", "4n");

    } 

    //go back
    if(p5.mouseX > 32 && p5.mouseX < 150 && p5.mouseY > 10 && p5.mouseY < 45){
  
      console.log("Go Back");
  
      window.location.href = "https://ahtepsilon.github.io/shopRepo/dist";
    }
  
    //Change mode
    if(p5.mouseX > 95 && p5.mouseX < 175 && p5.mouseY > 215 && p5.mouseY < 251){
      
      console.log("Change mode");
    }

    //Muted
    if (p5.dist(p5.mouseX, p5.mouseY, 1000, 222) < 10 ) {
      console.log("muted");
    }
  
  
    /*if(mouseX > 53 && mouseX < 112 && mouseY > 299 && mouseY < 326){
  
      console.log("F4");
  
    }*/
  }
  
  function changeCursor(){
  
    if(p5.mouseX > 32 && p5.mouseX < 150 && p5.mouseY > 10 && p5.mouseY < 45){
      p5.cursor(p5.HAND);
    }
  
    else if(p5.mouseX > 95 && p5.mouseX < 175 && p5.mouseY > 215 && p5.mouseY < 251){
      p5.cursor(p5.HAND);
    }
  
    else if (p5.dist(p5.mouseX, p5.mouseY, 1000, 222) < 10 ) {
      p5.cursor(p5.HAND);
    }
  
    else{
      p5.cursor(p5.ARROW);
    }
  
  }
  
  function activateAudioProcessor(){
    //alert("Please click the start audio button if there's no sound playing");
  
    startAudioBtn.addEventListener("click", ev =>{
    
      Tone.start();
      alert("Audio is ready");
    
    });
  }

  function song(time){
 
  }

});