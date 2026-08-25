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
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200,700,200,10)
    createPlatform(400,600,200,10)
    createPlatform(600,500,200,10)
    createPlatform(400,400,200,10)
    createPlatform(600,300,500,10)
    createPlatform(1300,300,100,10)
    createPlatform(900,500,200,10)
    createPlatform(1200,400,100,10)
    createPlatform(300,200,200,10)
    createPlatform(1200,200,100,10)
    createPlatform(600,100,500,10)
    createPlatform(1200,700,200,10)
    createPlatform(1100,600,100,10)
    createPlatform(100,300,200,10)
    createPlatform(845,300,10,-100)




    // TODO 3 - Create Collectables
    createCollectable("diamond",780,20,)
    createCollectable("grace",1230,150)
    createCollectable("kennedi",1280,650)
    createCollectable("max",830,130)
    createCollectable("steve",180,260)



    
    // TODO 4 - Create Cannons
    createCannon("left",400,2000)
    createCannon("right",300,2000)
    createCannon("bottom",300,2000)
    createCannon("bottom",1100,2000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
