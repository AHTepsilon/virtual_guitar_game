let imgBg;

let loopBeat;

let startAudioBtn;

let e2;

let sketch = new p5(function(p5){

    p5.preload = function preload(){
    
    }
    
    p5.setup = function setup() {

      p5.createCanvas(1080, 720);
  
      p5.loadImage("imgs/bassShowCase.png", imgBg => {
        p5.image(imgBg, 0, 0);
      });
    
      startAudioBtn = document.getElementById("startAudioButton");
      activateAudioProcessor();

      e2 = new Tone.Synth().toDestination();

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
    
      /*p5.circle(1000, 222, 30);
    
      p5.rect(92, 30, 120, 40);*/
    
    }


    p5.mousePressed = function mousePressed(){

      if(p5.mouseY > 510 && p5.mouseY < 553){ //Cuerda E baja

        if(p5.mouseX > 2 && p5.mouseX < 33){
            e2.triggerAttackRelease("E1", "4n");
        }
    
        if(p5.mouseX > 53 && p5.mouseX < 112){
            e2.triggerAttackRelease("F1", "4n");
        }
    
        if(p5.mouseX > 127 && p5.mouseX < 183){
            e2.triggerAttackRelease("F#1", "4n");
        }
    
        if(p5.mouseX > 199 && p5.mouseX < 260){
            e2.triggerAttackRelease("G1", "4n");
        }
      
        if(p5.mouseX > 272 && p5.mouseX < 332){
            e2.triggerAttackRelease("G#1", "4n");
        }
    
        if(p5.mouseX > 350 && p5.mouseX < 406){
            e2.triggerAttackRelease("A1", "4n");
        }
        
        if(p5.mouseX > 421 && p5.mouseX < 482){
            e2.triggerAttackRelease("A#1", "4n");
        }
    
        if(p5.mouseX > 497 && p5.mouseX < 557){
            e2.triggerAttackRelease("B1", "4n");
        }
    
        if(p5.mouseX > 572 && p5.mouseX < 627){
            e2.triggerAttackRelease("C2", "4n");
        }
    
        if(p5.mouseX > 643 && p5.mouseX < 702){
            e2.triggerAttackRelease("C#2", "4n");
        }
    
        if(p5.mouseX > 718 && p5.mouseX < 778){
            e2.triggerAttackRelease("D2", "4n");
        }
    
        if(p5.mouseX > 793 && p5.mouseX < 851){
            e2.triggerAttackRelease("D#2", "4n");
        }
    
        if(p5.mouseX > 863 && p5.mouseX < 912){
            e2.triggerAttackRelease("E2", "4n");
        } 
    
        if(p5.mouseX > 926 && p5.mouseX < 957){
            e2.triggerAttackRelease("F2", "4n");
        } 
    
        if(p5.mouseX > 972 && p5.mouseX < 994){
            e2.triggerAttackRelease("F#2", "4n");
        } 
    
        if(p5.mouseX > 1006 && p5.mouseX < 1033){
            e2.triggerAttackRelease("G2", "4n");
        } 
        
        if(p5.mouseX > 1047 && p5.mouseX < 1075){
            e2.triggerAttackRelease("G#2", "4n");
        } 
      }

      if(p5.mouseY > 435 && p5.mouseY < 486){
        if(p5.mouseX > 2 && p5.mouseX < 33){
          e2.triggerAttackRelease("A1", "4n");
      }
  
      if(p5.mouseX > 53 && p5.mouseX < 112){
          e2.triggerAttackRelease("A#1", "4n");
      }
  
      if(p5.mouseX > 127 && p5.mouseX < 183){
          e2.triggerAttackRelease("B1", "4n");
      }
  
      if(p5.mouseX > 199 && p5.mouseX < 260){
          e2.triggerAttackRelease("C2", "4n");
      }
    
      if(p5.mouseX > 272 && p5.mouseX < 332){
          e2.triggerAttackRelease("C#2", "4n");
      }
  
      if(p5.mouseX > 350 && p5.mouseX < 406){
          e2.triggerAttackRelease("D2", "4n");
      }
      
      if(p5.mouseX > 421 && p5.mouseX < 482){
          e2.triggerAttackRelease("D#2", "4n");
      }
  
      if(p5.mouseX > 497 && p5.mouseX < 557){
          e2.triggerAttackRelease("E2", "4n");
      }
  
      if(p5.mouseX > 572 && p5.mouseX < 627){
          e2.triggerAttackRelease("F2", "4n");
      }
  
      if(p5.mouseX > 643 && p5.mouseX < 702){
          e2.triggerAttackRelease("F#2", "4n");
      }
  
      if(p5.mouseX > 718 && p5.mouseX < 778){
          e2.triggerAttackRelease("G2", "4n");
      }
  
      if(p5.mouseX > 793 && p5.mouseX < 851){
          e2.triggerAttackRelease("G#2", "4n");
      }
  
      if(p5.mouseX > 863 && p5.mouseX < 912){
          e2.triggerAttackRelease("A2", "4n");
      } 
  
      if(p5.mouseX > 926 && p5.mouseX < 957){
          e2.triggerAttackRelease("A#2", "4n");
      } 
  
      if(p5.mouseX > 972 && p5.mouseX < 994){
          e2.triggerAttackRelease("B2", "4n");
      } 
  
      if(p5.mouseX > 1006 && p5.mouseX < 1033){
          e2.triggerAttackRelease("C3", "4n");
      } 
      
      if(p5.mouseX > 1047 && p5.mouseX < 1075){
          e2.triggerAttackRelease("C#3", "4n");
      } 
      }

      if(p5.mouseY > 362 && p5.mouseY < 413){
        if(p5.mouseX > 2 && p5.mouseX < 33){
          e2.triggerAttackRelease("D2", "4n");
      }
  
      if(p5.mouseX > 53 && p5.mouseX < 112){
          e2.triggerAttackRelease("D#2", "4n");
      }
  
      if(p5.mouseX > 127 && p5.mouseX < 183){
          e2.triggerAttackRelease("E2", "4n");
      }
  
      if(p5.mouseX > 199 && p5.mouseX < 260){
          e2.triggerAttackRelease("F2", "4n");
      }
    
      if(p5.mouseX > 272 && p5.mouseX < 332){
          e2.triggerAttackRelease("F#2", "4n");
      }
  
      if(p5.mouseX > 350 && p5.mouseX < 406){
          e2.triggerAttackRelease("G2", "4n");
      }
      
      if(p5.mouseX > 421 && p5.mouseX < 482){
          e2.triggerAttackRelease("G#2", "4n");
      }
  
      if(p5.mouseX > 497 && p5.mouseX < 557){
          e2.triggerAttackRelease("A2", "4n");
      }
  
      if(p5.mouseX > 572 && p5.mouseX < 627){
          e2.triggerAttackRelease("A#2", "4n");
      }
  
      if(p5.mouseX > 643 && p5.mouseX < 702){
          e2.triggerAttackRelease("B2", "4n");
      }
  
      if(p5.mouseX > 718 && p5.mouseX < 778){
          e2.triggerAttackRelease("C3", "4n");
      }
  
      if(p5.mouseX > 793 && p5.mouseX < 851){
          e2.triggerAttackRelease("C#3", "4n");
      }
  
      if(p5.mouseX > 863 && p5.mouseX < 912){
          e2.triggerAttackRelease("D3", "4n");
      } 
  
      if(p5.mouseX > 926 && p5.mouseX < 957){
          e2.triggerAttackRelease("D#3", "4n");
      } 
  
      if(p5.mouseX > 972 && p5.mouseX < 994){
          e2.triggerAttackRelease("E3", "4n");
      } 
  
      if(p5.mouseX > 1006 && p5.mouseX < 1033){
          e2.triggerAttackRelease("F3", "4n");
      } 
      
      if(p5.mouseX > 1047 && p5.mouseX < 1075){
          e2.triggerAttackRelease("F#3", "4n");
      } 
      }

      if(p5.mouseY > 305 && p5.mouseY < 346){
        if(p5.mouseX > 2 && p5.mouseX < 33){
          e2.triggerAttackRelease("G2", "4n");
      }
  
      if(p5.mouseX > 53 && p5.mouseX < 112){
          e2.triggerAttackRelease("G#2", "4n");
      }
  
      if(p5.mouseX > 127 && p5.mouseX < 183){
          e2.triggerAttackRelease("A2", "4n");
      }
  
      if(p5.mouseX > 199 && p5.mouseX < 260){
          e2.triggerAttackRelease("A#2", "4n");
      }
    
      if(p5.mouseX > 272 && p5.mouseX < 332){
          e2.triggerAttackRelease("B2", "4n");
      }
  
      if(p5.mouseX > 350 && p5.mouseX < 406){
          e2.triggerAttackRelease("C3", "4n");
      }
      
      if(p5.mouseX > 421 && p5.mouseX < 482){
          e2.triggerAttackRelease("C#3", "4n");
      }
  
      if(p5.mouseX > 497 && p5.mouseX < 557){
          e2.triggerAttackRelease("D3", "4n");
      }
  
      if(p5.mouseX > 572 && p5.mouseX < 627){
          e2.triggerAttackRelease("D#3", "4n");
      }
  
      if(p5.mouseX > 643 && p5.mouseX < 702){
          e2.triggerAttackRelease("E3", "4n");
      }
  
      if(p5.mouseX > 718 && p5.mouseX < 778){
          e2.triggerAttackRelease("F3", "4n");
      }
  
      if(p5.mouseX > 793 && p5.mouseX < 851){
          e2.triggerAttackRelease("F#3", "4n");
      }
  
      if(p5.mouseX > 863 && p5.mouseX < 912){
          e2.triggerAttackRelease("G3", "4n");
      } 
  
      if(p5.mouseX > 926 && p5.mouseX < 957){
          e2.triggerAttackRelease("G#3", "4n");
      } 
  
      if(p5.mouseX > 972 && p5.mouseX < 994){
          e2.triggerAttackRelease("A3", "4n");
      } 
  
      if(p5.mouseX > 1006 && p5.mouseX < 1033){
          e2.triggerAttackRelease("A#3", "4n");
      } 
      
      if(p5.mouseX > 1047 && p5.mouseX < 1075){
          e2.triggerAttackRelease("B3", "4n");
      } 
      }
  
        //go back
    if(p5.mouseX > 32 && p5.mouseX < 150 && p5.mouseY > 10 && p5.mouseY < 45){
  
        console.log("Go Back");
    
        window.location.href = "https://ahtepsilon.github.io/shopRepo/dist";
      }
    }

    function changeCursor(){
  
        if(p5.mouseX > 32 && p5.mouseX < 150 && p5.mouseY > 10 && p5.mouseY < 45){
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
    
  
  });