$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   
    


    // TODO 2 - Create Platforms
    createPlatform(200,700,200,10,"white")
    createPlatform(400,600,200,10,"white")
    createPlatform(600,500,200,10,"white")
    createPlatform(400,400,200,10,"white")
    createPlatform(600,300,300,10,"white")
    createPlatform(1000,300,100,10,"white")
    createPlatform(1300,300,100,10,"white")
    createPlatform(900,500,200,10,"white")
    createPlatform(1200,400,100,10,"white")
    createPlatform(300,200,200,10,"white")
    createPlatform(1200,200,100,10,"white")
    createPlatform(600,100,100,10,"white")
    createPlatform(800,100,300,10,"white")
    createPlatform(1200,700,200,10,"white")
    createPlatform(1100,600,100,10,"white")
    createPlatform(100,300,200,10,"white")
    createPlatform(845,100,10,100,"white")
    createPlatform(495,300,10,100,"white")
    createFakePlatform(700,100,100,10,"white")
    createFakePlatform(800,500,100,10,"white")
    createBadPlatform(900,300,100,10)




    // TODO 3 - Create Collectables
    createCollectable("mercury",780,20,)
    createCollectable("venus",1230,150)
    createCollectable("earth",1280,650)
    createCollectable("mars",830,220)
    createCollectable("jupiter",180,260)
    createCollectable("saturn",830,350)
    createCollectable("uranus",480,500)
    createCollectable("neptune",480,250)



    
    // TODO 4 - Create Cannons
    createCannon("left",400,2000)
    createCannon("right",300,2000)
    createCannon("bottom",300,2000)
    createCannon("bottom",1100,2000)
    createCannon("right",800,1)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
