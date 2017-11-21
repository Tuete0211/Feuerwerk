// Check support
if (!BABYLON.Engine.isSupported()) {
    window.alert('Browser not supported');
} else {
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.25, 0.41, 0.50);
var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", -Math.PI/3.0, 0.4*Math.PI, 80, new BABYLON.Vector3(0,30, 0), scene);

    var ground = BABYLON.Mesh.CreateGround("ground1", 8000, 8000, 0, scene);
    ground.material = new BABYLON.StandardMaterial("groundMat", scene);
    //ground.material.backFaceCulling = false;
    ground.material.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);

//Funktion um das Aufplatschen auf dem Boden zu simulieren
    function rainEnd(x, z){
      var platschSystem = new BABYLON.ParticleSystem("platsch", 5, scene);
      platschSystem.particleTexture = new BABYLON.Texture("assets/Raindrop.png", scene);
      platschSystem.emitter = new BABYLON.Vector3(0, 0, 0); // the starting object, the emitter
      platschSystem.minEmitBox = new BABYLON.Vector3(x, 0.1, z); // Starting all From
      platschSystem.maxEmitBox = new BABYLON.Vector3(x, 0.1, z); // To...
      platschSystem.minSize = 0.5;
      platschSystem.maxSize = 1.0;
      //platschSystem.minLifeTime = 2.0;
      //platschSystem.maxLifeTime = 2.0;
      particleSystem.manualEmitCount = 5;
      platschSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
      platschSystem.direction1 = new BABYLON.Vector3(0.9, 0.8, 0.9);
      platschSystem.direction2 = new BABYLON.Vector3(-0.9, 0.8, -0.9);
      platschSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
      platschSystem.minEmitPower = 4;
      platschSystem.maxEmitPower = 7;
      platschSystem.updateSpeed = 0.05;
      platschSystem.targetStopDuration = 1;
      platschSystem.disposeOnStop = true;
      platschSystem.start();

      platschSystem.updateFunction = function(particles) {
       for (var index = 0; index < particles.length; index++) {
             var particle = particles[index];

             if (particle.position.y <= 0) { // Recycle
               particles.splice(index, 1);
               index--;
               continue;
              }
              else {
                   particle.direction.scaleToRef(this._scaledUpdateSpeed, this._scaledDirection);
                   particle.position.addInPlace(this._scaledDirection);

                   this.gravity.scaleToRef(this._scaledUpdateSpeed, this._scaledGravity);
                   particle.direction.addInPlace(this._scaledGravity);
              }
        }
      }
    }

    //Creating a particle System for rain
    var particleSystem = new BABYLON.ParticleSystem("particles", 50000, scene);
    particleSystem.particleTexture = new BABYLON.Texture("assets/Raindrop.png", scene);

    // Where the particles comes from
    particleSystem.emitter = new BABYLON.Vector3(0, 0, 0); // the starting object, the emitter
    particleSystem.minEmitBox = new BABYLON.Vector3(-200, 350, -200); // Starting all From
    particleSystem.maxEmitBox = new BABYLON.Vector3(200, 350, 200); // To...

    // Colors of all particles (splitted in 2 + specific color before dispose)
    particleSystem.color1 = new BABYLON.Color4(1.0, 1.0, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(1.0, 1.0, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(1.0, 1.0, 1.0, 1.0);

    // Size of each particle (random between...)
    particleSystem.minSize = 1;
    particleSystem.maxSize = 2;
/*
    // Life time of each particle (random between...)
    particleSystem.minLifeTime = 5.0;
    particleSystem.maxLifeTime = 5.0;
*/
    particleSystem.emitRate = 80;

    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    particleSystem.direction1 = new BABYLON.Vector3(0.3, -1, 0.3);
    particleSystem.direction2 = new BABYLON.Vector3(-0.3, -1, -0.3);

    //Set the gravity of all particles (not necessary down)
    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

    particleSystem.minEmitPower = 10;
    particleSystem.maxEmitPower = 20;

    particleSystem.updateSpeed = 0.05;

    particleSystem.disposeOnStop = true;

    particleSystem.start();

//Updatefunktion um neues System zu erstellen um das Aufprallen zu simulieren.
//Alter und Farbe werden nicht gebraucht und fallen somit aus der Funktion hearus. Damit wird sie 'dünner' und möglicherweise schneller
    particleSystem.updateFunction = function(particles) {
     for (var index = 0; index < particles.length; index++) {
           var particle = particles[index];

           if (particle.position.y < 0) { // Recycle
             //Neues System erstellen
             rainEnd(particle.position.x, particle.position.z);

             particles.splice(index, 1);
             index--;
             continue;
        }
        else {
             particle.direction.scaleToRef(this._scaledUpdateSpeed, this._scaledDirection);
             particle.position.addInPlace(this._scaledDirection);

             this.gravity.scaleToRef(this._scaledUpdateSpeed, this._scaledGravity);
             particle.direction.addInPlace(this._scaledGravity);
        }
  }
}

    scene.activeCamera.attachControl(canvas);

// Render loop
var renderLoop = function () {
  // Start new frame
  engine.beginFrame();

  scene.render();

  // Present
  engine.endFrame();

  // Register new frame
  BABYLON.Tools.QueueNewFrame(renderLoop);
};
BABYLON.Tools.QueueNewFrame(renderLoop);

    // Resize
    window.addEventListener("resize", function () {
        engine.resize();
    });
};
