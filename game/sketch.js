let imgBg;

let loopBeat;

let interfaceX, interfaceY;
let isChordMode;

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

    interfaceX = 0;
    interfaceY = 0;

    isChordMode = false;
  
    startAudioBtn = document.getElementById("startAudioButton");
  
    activateAudioProcessor();

    lowEarr = ["E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3"];
    Aarr = ["A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4"];
    Darr = ["D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4"];
    Garr = ["G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"];
    Barr = ["B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5"];
    highEarr = ["E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5"];

    e2 = new Tone.Synth().toDestination();
  }
  
  p5.draw = function draw() {
    console.log(p5.mouseX + ", " + p5.mouseY);
  
    p5.loadImage("imgs/background1.png", imgBg => {
      p5.image(imgBg, interfaceX, interfaceY);
    });

    p5.loadImage("imgs/background2.png", imgBg2 =>{
      p5.image(imgBg2, interfaceX, interfaceY + 720);
    })

    p5.fill(255, 0, 0, 25);
    changeCursor();
    p5.rectMode(p5.CENTER);
  
    //Estos rectángulos muestran las sonas sensibles de la interfaz
  
    /*for(let i = 82; i < 861; i += 74){
  
      for(let j = 313; j < 558; j += 46){
  
        p5.rect(i, j, 60, 25);
  
      }
      
    }
  
    p5.rect(139, 237, 90, 40);
  
    p5.circle(1000, 222, 30);
  
    p5.rect(92, 30, 120, 40);*/
  
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

    if(p5.mouseY > 530 && p5.mouseY < 553){ //Cuerda E baja

      if(p5.mouseX > 2 && p5.mouseX < 33){

        if(!isChordMode){
          e2.triggerAttackRelease("E2", "4n");
        }
  
      }
  
      if(p5.mouseX > 53 && p5.mouseX < 112){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("F2", "4n");
        }
  
      }
  
      if(p5.mouseX > 127 && p5.mouseX < 183){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("F#2", "4n");
          
        }
  
      }
  
      if(p5.mouseX > 199 && p5.mouseX < 260){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("G2", "4n");
          
        }
  
      }
    
      if(p5.mouseX > 272 && p5.mouseX < 332){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("G#2", "4n");
          
        }
  
      }
  
      if(p5.mouseX > 350 && p5.mouseX < 406){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("A2", "4n");
          
        }
  
      }
      
      if(p5.mouseX > 421 && p5.mouseX < 482){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("A#2", "4n");
          
        }
  
      }
  
      if(p5.mouseX > 497 && p5.mouseX < 557){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("B2", "4n");
          
        }
  
      }
  
      if(p5.mouseX > 572 && p5.mouseX < 627){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("C3", "4n");
          
        }
  
      }
  
      if(p5.mouseX > 643 && p5.mouseX < 702){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("C#3", "4n");
          
        }
  
      }
  
      if(p5.mouseX > 718 && p5.mouseX < 778){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D3", "4n");
          
        }
      }
  
      if(p5.mouseX > 793 && p5.mouseX < 851){
        if(!isChordMode){
          
                e2.triggerAttackRelease("D#3", "4n");
          
        }
      }
  
      if(p5.mouseX > 863 && p5.mouseX < 912){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("E3", "4n");
          
        }
  
      } 
  
      if(p5.mouseX > 926 && p5.mouseX < 957){
  
        
        if(!isChordMode){
          e2.triggerAttackRelease("F3", "4n");
          
        }
  
      } 
  
      if(p5.mouseX > 972 && p5.mouseX < 994){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F#3", "4n");
          
        }
      } 
  
      if(p5.mouseX > 1006 && p5.mouseX < 1033){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G3", "4n");
          
        }
      } 
      
      if(p5.mouseX > 1047 && p5.mouseX < 1075){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G#3", "4n");
          
        }
      } 
    }

    if(p5.mouseY > 483 && p5.mouseY < 508){ //Cuerda A

      if(p5.mouseX > 2 && p5.mouseX < 33){

        if(!isChordMode){
          
          e2.triggerAttackRelease("A2", "4n");
        }
      }
  
      if(p5.mouseX > 53 && p5.mouseX < 112){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A#2", "4n");
          
        }
      }
  
      if(p5.mouseX > 127 && p5.mouseX < 183){
  
        if(!isChordMode){
          e2.triggerAttackRelease("B2", "4n");
          
        }
      }
  
      if(p5.mouseX > 199 && p5.mouseX < 260){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C3", "4n");
          
        }
      }
    
      if(p5.mouseX > 272 && p5.mouseX < 332){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C#3", "4n");
          
        }
      }
  
      if(p5.mouseX > 350 && p5.mouseX < 406){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D3", "4n");
          
        }
      }
      
      if(p5.mouseX > 421 && p5.mouseX < 482){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D#3", "4n");
          
        }
      }
  
      if(p5.mouseX > 497 && p5.mouseX < 557){
  
        if(!isChordMode){
          e2.triggerAttackRelease("E3", "4n");
          
        }
      }
  
      if(p5.mouseX > 572 && p5.mouseX < 627){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F3", "4n");
          
        }
      }
  
      if(p5.mouseX > 643 && p5.mouseX < 702){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F#3", "4n");
          
        }
      }
  
      if(p5.mouseX > 718 && p5.mouseX < 778){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G3", "4n");
          
        }
      }
  
      if(p5.mouseX > 793 && p5.mouseX < 851){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G#3", "4n");
          
        }
      }
  
      if(p5.mouseX > 863 && p5.mouseX < 912){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A3", "4n");
          
        }
      } 
  
      if(p5.mouseX > 926 && p5.mouseX < 957){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A#3", "4n");
          
        }
      } 
  
      if(p5.mouseX > 972 && p5.mouseX < 994){
  
        if(!isChordMode){
          e2.triggerAttackRelease("B3", "4n");
          
        }
      } 
  
      if(p5.mouseX > 1006 && p5.mouseX < 1033){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C4", "4n");
          
        }
      } 
      
      if(p5.mouseX > 1047 && p5.mouseX < 1075){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C#4", "4n");
          
        }
      } 
    }
    
    if(p5.mouseY > 435 && p5.mouseY < 466){ //Cuerda D

      if(p5.mouseX > 2 && p5.mouseX < 33){

        if(!isChordMode){
          e2.triggerAttackRelease("D3", "4n");
          
        }
      }
  
      if(p5.mouseX > 53 && p5.mouseX < 112){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D#3", "4n");
          
        }
      }
  
      if(p5.mouseX > 127 && p5.mouseX < 183){
  
        if(!isChordMode){
          e2.triggerAttackRelease("E3", "4n");
          
        }
      }
  
      if(p5.mouseX > 199 && p5.mouseX < 260){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F3", "4n");
          
        }
      }
    
      if(p5.mouseX > 272 && p5.mouseX < 332){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F#3", "4n");
          
        }
      }
  
      if(p5.mouseX > 350 && p5.mouseX < 406){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G3", "4n");
          
        }
      }
      
      if(p5.mouseX > 421 && p5.mouseX < 482){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G#3", "4n");
          
        }
      }
  
      if(p5.mouseX > 497 && p5.mouseX < 557){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A3", "4n");
          
        }
      }
  
      if(p5.mouseX > 572 && p5.mouseX < 627){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A#3", "4n");
          
        }
      }
  
      if(p5.mouseX > 643 && p5.mouseX < 702){
  
        if(!isChordMode){
          e2.triggerAttackRelease("B3", "4n");
          
        }
      }
  
      if(p5.mouseX > 718 && p5.mouseX < 778){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C4", "4n");
          
        }
      }
  
      if(p5.mouseX > 793 && p5.mouseX < 851){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 863 && p5.mouseX < 912){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D4", "4n");
          
        }
      } 
  
      if(p5.mouseX > 926 && p5.mouseX < 957){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D#4", "4n");
          
        }
      } 
  
      if(p5.mouseX > 972 && p5.mouseX < 994){
  
        if(!isChordMode){
          e2.triggerAttackRelease("E4", "4n");
          
        }
      } 
  
      if(p5.mouseX > 1006 && p5.mouseX < 1033){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F4", "4n");
          
        }
      } 
      
      if(p5.mouseX > 1047 && p5.mouseX < 1075){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F#4", "4n");
          
        } 
      }
    }
    
    if(p5.mouseY > 391 && p5.mouseY < 415){ //Cuerda G

      if(p5.mouseX > 2 && p5.mouseX < 33){

        if(!isChordMode){
          e2.triggerAttackRelease("G3", "4n");
          
        }
      }
  
      if(p5.mouseX > 53 && p5.mouseX < 112){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G#3", "4n");
          
        }
      }
  
      if(p5.mouseX > 127 && p5.mouseX < 183){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A3", "4n");
          
        }
      }
  
      if(p5.mouseX > 199 && p5.mouseX < 260){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A#3", "4n");
          
        }
      }
    
      if(p5.mouseX > 272 && p5.mouseX < 332){
  
        if(!isChordMode){
          e2.triggerAttackRelease("B3", "4n");
          
        }
      }
  
      if(p5.mouseX > 350 && p5.mouseX < 406){
  
        if(!isChordMode){
          e2.triggerAttackRelease("B#3", "4n");
          
        }
      }
      
      if(p5.mouseX > 421 && p5.mouseX < 482){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C4", "4n");
          
        }
      }
  
      if(p5.mouseX > 497 && p5.mouseX < 557){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 572 && p5.mouseX < 627){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D4", "4n");
          
        }
      }
  
      if(p5.mouseX > 643 && p5.mouseX < 702){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 718 && p5.mouseX < 778){
  
        if(!isChordMode){
          e2.triggerAttackRelease("E4", "4n");
          
        }
      }
  
      if(p5.mouseX > 793 && p5.mouseX < 851){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G4", "4n");
          
        }
      }
  
      if(p5.mouseX > 863 && p5.mouseX < 912){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G#4", "4n");
          
        }
      } 
  
      if(p5.mouseX > 926 && p5.mouseX < 957){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A4", "4n");
          
        }
      } 
  
      if(p5.mouseX > 972 && p5.mouseX < 994){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A#4", "4n");
          
        }
      } 
  
      if(p5.mouseX > 1006 && p5.mouseX < 1033){
  
        if(!isChordMode){
          e2.triggerAttackRelease("B4", "4n");
          
        }
      } 
      
      if(p5.mouseX > 1047 && p5.mouseX < 1075){
  
        if(!isChordMode){
          e2.triggerAttackRelease("B#4", "4n");
          
        }
      } 
    }

    if(p5.mouseY > 343 && p5.mouseY < 371){ //Cuerda G

      if(p5.mouseX > 2 && p5.mouseX < 33){

        if(!isChordMode){
          e2.triggerAttackRelease("B3", "4n");
          
        }
      }
  
      if(p5.mouseX > 53 && p5.mouseX < 112){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C4", "4n");
          
        }
      }
  
      if(p5.mouseX > 127 && p5.mouseX < 183){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 199 && p5.mouseX < 260){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D4", "4n");
          
        }
      }
    
      if(p5.mouseX > 272 && p5.mouseX < 332){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 350 && p5.mouseX < 406){
  
        if(!isChordMode){
          e2.triggerAttackRelease("E4", "4n");
          
        }
      }
      
      if(p5.mouseX > 421 && p5.mouseX < 482){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F4", "4n");
          
        }
      }
  
      if(p5.mouseX > 497 && p5.mouseX < 557){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 572 && p5.mouseX < 627){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G4", "4n");
          
        }
      }
  
      if(p5.mouseX > 643 && p5.mouseX < 702){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 718 && p5.mouseX < 778){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A4", "4n");
          
        }
      }
  
      if(p5.mouseX > 793 && p5.mouseX < 851){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 863 && p5.mouseX < 912){
  
        if(!isChordMode){
          e2.triggerAttackRelease("B4", "4n");
          
        }
      } 
  
      if(p5.mouseX > 926 && p5.mouseX < 957){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C5", "4n");
          
        }
      } 
  
      if(p5.mouseX > 972 && p5.mouseX < 994){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C#5", "4n");
          
        }
      } 
  
      if(p5.mouseX > 1006 && p5.mouseX < 1033){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D5", "4n");
          
        }
      } 
      
      if(p5.mouseX > 1047 && p5.mouseX < 1075){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D#5", "4n");
          
        }
      } 
    }

    if(p5.mouseY > 297 && p5.mouseY < 325){ //Cuerda E alta

      if(p5.mouseX > 2 && p5.mouseX < 33){

        if(!isChordMode){
          e2.triggerAttackRelease("E4", "4n");
          
        }
      }
  
      if(p5.mouseX > 53 && p5.mouseX < 112){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F4", "4n");
          
        }
      }
  
      if(p5.mouseX > 127 && p5.mouseX < 183){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 199 && p5.mouseX < 260){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G4", "4n");
          
        }
      }
    
      if(p5.mouseX > 272 && p5.mouseX < 332){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 350 && p5.mouseX < 406){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A4", "4n");
          
        }
      }
      
      if(p5.mouseX > 421 && p5.mouseX < 482){
  
        if(!isChordMode){
          e2.triggerAttackRelease("A#4", "4n");
          
        }
      }
  
      if(p5.mouseX > 497 && p5.mouseX < 557){
  
        if(!isChordMode){
          e2.triggerAttackRelease("B4", "4n");
          
        }
      }
  
      if(p5.mouseX > 572 && p5.mouseX < 627){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C5", "4n");
          
        }
      }
  
      if(p5.mouseX > 643 && p5.mouseX < 702){
  
        if(!isChordMode){
          e2.triggerAttackRelease("C#5", "4n");
          
        }
      }
  
      if(p5.mouseX > 718 && p5.mouseX < 778){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D5", "4n");
          
        }
      }
  
      if(p5.mouseX > 793 && p5.mouseX < 851){
  
        if(!isChordMode){
          e2.triggerAttackRelease("D#5", "4n");
          
        }
      }
  
      if(p5.mouseX > 863 && p5.mouseX < 912){
  
        if(!isChordMode){
          e2.triggerAttackRelease("E5", "4n");
          
        }
      } 
  
      if(p5.mouseX > 926 && p5.mouseX < 957){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F5", "4n");
          
        }
      } 
  
      if(p5.mouseX > 972 && p5.mouseX < 994){
  
        if(!isChordMode){
          e2.triggerAttackRelease("F#5", "4n");
          
        }
      } 
  
      if(p5.mouseX > 1006 && p5.mouseX < 1033){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G5", "4n");
          
        }
      } 
      
      if(p5.mouseX > 1047 && p5.mouseX < 1075){
  
        if(!isChordMode){
          e2.triggerAttackRelease("G#5", "4n");
          
        }
      } 
    }

    //go back
    if(p5.mouseX > 32 && p5.mouseX < 150 && p5.mouseY > 10 && p5.mouseY < 45){
  
      console.log("Go Back");
  
      window.location.href = "https://ahtepsilon.github.io/shopRepo/dist";
    }
  
    //Change mode
    if(p5.mouseX > 95 && p5.mouseX < 175 && p5.mouseY > 215 && p5.mouseY < 251){
      
      console.log("Change mode");

      switchMode();
    }

    //Muted
    
    if (p5.dist(p5.mouseX, p5.mouseY, 1000, 222) < 20 && !isChordMode) {
      console.log("muted");
    }

    if(p5.dist(p5.mouseX, p5.mouseY, 937, 223) < 50 && isChordMode){
      console.log("playing");
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
  
    else if (p5.dist(p5.mouseX, p5.mouseY, 1000, 222) < 20 && !isChordMode ) {
      p5.cursor(p5.HAND);
    }

    else if (p5.dist(p5.mouseX, p5.mouseY, 937, 223) < 50 && isChordMode ) {
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

  function switchMode(){
    isChordMode = !isChordMode;

    if(isChordMode){

      while(interfaceY > -720){

        interfaceY--;

      }

    }

    else if(!isChordMode){

      while(interfaceY < 0){

        interfaceY++;
      }

    }
    

  }

});