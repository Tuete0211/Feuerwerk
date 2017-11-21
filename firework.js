// Check support
if (!BABYLON.Engine.isSupported()) {
    window.alert('Browser not supported');
} else {
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0, 0, 0);
var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", -Math.PI/3.0, 0.62*Math.PI, 4000, new BABYLON.Vector3(0,1500, 0), scene);

    var ground = BABYLON.Mesh.CreateGround("ground1", 8000, 8000, 0, scene);
    ground.material = new BABYLON.StandardMaterial("groundMat", scene);
    //ground.material.backFaceCulling = false;
    ground.material.emissiveColor = new BABYLON.Color3(0.1, 0.05, 0.05);

    var box = BABYLON.Mesh.CreateBox("Box", 30, scene);
		box.material = new BABYLON.StandardMaterial("groundMat", scene);
		box.material.backFaceCulling = false;
		box.material.emissiveColor = new BABYLON.Color3(0.5, 0.2, 0.2);

    var start_time = new Date().getTime();

/*Subsystem grünes Feuerwerk*/
    function fireworkGrun(x, y, z){
      var fountain = BABYLON.Mesh.CreateBox("fountain", 0.001, scene);
      var grunSystem = new BABYLON.ParticleSystem("boom", 50, scene);
      grunSystem.particleTexture = new BABYLON.Texture("assets/Flare.png", scene);
      grunSystem.emitter = fountain; // the starting object, the emitter
      grunSystem.minEmitBox = new BABYLON.Vector3(x, y, z); // Starting all From
      grunSystem.maxEmitBox = new BABYLON.Vector3(x, y, z); // To...
      grunSystem.color1 = new BABYLON.Color4(0, 1.0, 0, 1.0);
      grunSystem.color2 = new BABYLON.Color4(0, 1.0, 0, 0.5);
      grunSystem.colorDead = new BABYLON.Color4(0, 1.0, 0, 0.1);
      grunSystem.minSize = 14;
      grunSystem.maxSize = 16;
      grunSystem.minLifeTime = 1.0;
      grunSystem.maxLifeTime = 1.4;
      grunSystem.manualEmitCount = 50;
      grunSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
      grunSystem.direction1 = new BABYLON.Vector3(1, 1, 1);
      grunSystem.direction2 = new BABYLON.Vector3(-1, -1, -1);
      grunSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
      grunSystem.minAngularSpeed = 0;
      grunSystem.maxAngularSpeed = 0;
      grunSystem.minEmitPower = 500;
      grunSystem.maxEmitPower = 800;
      grunSystem.updateSpeed = 0.01;
  		grunSystem.targetStopDuration = 1;
      grunSystem.disposeOnStop = true;

      grunSystem.start();

    }

/*Subsystem rotes Feuerwerk*/
    function fireworkRot(x, y, z){
      var fountain = BABYLON.Mesh.CreateBox("fountain", 0.001, scene);
      var rotSystem = new BABYLON.ParticleSystem("boom", 50, scene);
      rotSystem.particleTexture = new BABYLON.Texture("assets/Flare.png", scene);
      rotSystem.emitter = fountain; // the starting object, the emitter
      rotSystem.minEmitBox = new BABYLON.Vector3(x, y, z); // Starting all From
      rotSystem.maxEmitBox = new BABYLON.Vector3(x, y, z); // To...
      rotSystem.color1 = new BABYLON.Color4(1.0, 0, 0, 1.0);
      rotSystem.color2 = new BABYLON.Color4(1.0, 0, 0, 0.75);
      rotSystem.colorDead = new BABYLON.Color4(1.0, 0, 0, 0.1);
      rotSystem.minSize = 14;
      rotSystem.maxSize = 16;
      rotSystem.minLifeTime = 1.0;
      rotSystem.maxLifeTime = 1.4;
      rotSystem.manualEmitCount = 50;
      rotSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
      rotSystem.direction1 = new BABYLON.Vector3(1, 1, 1);
      rotSystem.direction2 = new BABYLON.Vector3(-1, -1, -1);
      rotSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
      rotSystem.minAngularSpeed = 0;
      rotSystem.maxAngularSpeed = 0;
      rotSystem.minEmitPower = 500;
      rotSystem.maxEmitPower = 800;
      rotSystem.updateSpeed = 0.01;
  		rotSystem.targetStopDuration = 1;
      rotSystem.disposeOnStop = true;

      rotSystem.start();

    }

/*Subsystem gelbes Feuerwerk*/
    function fireworkGelb(x, y, z){
      var fountain = BABYLON.Mesh.CreateBox("fountain", 0.001, scene);
      var gelbSystem = new BABYLON.ParticleSystem("boom", 50, scene);
      gelbSystem.particleTexture = new BABYLON.Texture("assets/Flare.png", scene);
      gelbSystem.emitter = fountain; // the starting object, the emitter
      gelbSystem.minEmitBox = new BABYLON.Vector3(x, y, z); // Starting all From
      gelbSystem.maxEmitBox = new BABYLON.Vector3(x, y, z); // To...
      gelbSystem.color1 = new BABYLON.Color4(1.0, 1.0, 0, 1.0);
      gelbSystem.color2 = new BABYLON.Color4(1.0, 1.0, 0, 0.5);
      gelbSystem.colorDead = new BABYLON.Color4(1.0, 1.0, 0, 0.1);
      gelbSystem.minSize = 14;
      gelbSystem.maxSize = 16;
      gelbSystem.minLifeTime = 1.0;
      gelbSystem.maxLifeTime = 1.4;
      gelbSystem.manualEmitCount = 50;
      gelbSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
      gelbSystem.direction1 = new BABYLON.Vector3(1, 1, 1);
      gelbSystem.direction2 = new BABYLON.Vector3(-1, -1, -1);
      gelbSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
      gelbSystem.minAngularSpeed = 0;
      gelbSystem.maxAngularSpeed = 0;
      gelbSystem.minEmitPower = 500;
      gelbSystem.maxEmitPower = 800;
      gelbSystem.updateSpeed = 0.01;
  		gelbSystem.targetStopDuration = 1;
      gelbSystem.disposeOnStop = true;

      gelbSystem.start();

    }

/*Subsystem goldener Regen*/
    function fireworkGold(x, y, z){
      var fountain = BABYLON.Mesh.CreateBox("fountain", 0.001, scene);
      var goldSystem = new BABYLON.ParticleSystem("boom", 50, scene);
      goldSystem.particleTexture = new BABYLON.Texture("assets/Flare.png", scene);
      goldSystem.emitter = fountain; // the starting object, the emitter
      goldSystem.minEmitBox = new BABYLON.Vector3(x, y, z); // Starting all From
      goldSystem.maxEmitBox = new BABYLON.Vector3(x, y, z); // To...
      goldSystem.color1 = new BABYLON.Color4(1.0, 0.76, 0.22, 1.0);
      goldSystem.color2 = new BABYLON.Color4(1.0, 0.76, 0.22, 0.5);
      goldSystem.colorDead = new BABYLON.Color4(1.0, 0.76, 0.22, 0.1);
      goldSystem.minSize = 14;
      goldSystem.maxSize = 16;
      goldSystem.minLifeTime = 2.0;
      goldSystem.maxLifeTime = 3.4;
      goldSystem.manualEmitCount = 50;
      goldSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
      goldSystem.direction1 = new BABYLON.Vector3(1, 1, 1);
      goldSystem.direction2 = new BABYLON.Vector3(-1, 0, -1);
      goldSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
      goldSystem.minAngularSpeed = 0;
      goldSystem.maxAngularSpeed = 0;
      goldSystem.minEmitPower = 250;
      goldSystem.maxEmitPower = 400;
      goldSystem.updateSpeed = 0.02;
  		goldSystem.targetStopDuration = 1;
      goldSystem.disposeOnStop = true;

      goldSystem.start();

      //damit die Partikel stärker fallen und es eine Illusion des Regens gibt
      goldSystem.updateFunction = function(particles) {
       for (var index = 0; index < particles.length; index++) {
             var particle = particles[index];
             particle.age += this._scaledUpdateSpeed;

             if (particle.age >= particle.lifeTime) { // Recycle
                  particles.splice(index, 1);
                  this._stockParticles.push(particle);
                  index--;
                  continue;
             }
             else {
                  if(particle.age >= 1){
                              goldSystem.gravity = new BABYLON.Vector3(0, -500, 0);
                            }
                  particle.colorStep.scaleToRef(this._scaledUpdateSpeed, this._scaledColorStep);
                  particle.color.addInPlace(this._scaledColorStep);

                  if (particle.color.a < 0)
                               particle.color.a = 0;

                  particle.angle += particle.angularSpeed * this._scaledUpdateSpeed;

                  particle.direction.scaleToRef(this._scaledUpdateSpeed, this._scaledDirection);
                  particle.position.addInPlace(this._scaledDirection);

                  this.gravity.scaleToRef(this._scaledUpdateSpeed, this._scaledGravity);
                  particle.direction.addInPlace(this._scaledGravity);
             }
       }
  }

    }

/*Zeit-Funktion*/
    function elapsed_t(){
      var elapsed_time = new Date().getTime()-start_time;
      return elapsed_time;
    }

//Hier wird entschieden welche Farbe verwendet wird
    function final(x, y, z){
      elapsed_time = elapsed_t();
      if (elapsed_time >= 30000){
        particleSystem.stop();
        fireworkGold(x, y, z);
      }else if(elapsed_time > 15000){
        particleSystem.direction1 = new BABYLON.Vector3(0.3, 1, 0.3);
        particleSystem.direction2 = new BABYLON.Vector3(-0.3, 1, -0.3);
        particleSystem.emitRate += 1;
        fireworkGold(x, y, z);
      }else{
        particleSystem.emitRate += 0.2;
        var rnd = Math.random();
        if(rnd < 0.3){
          fireworkRot(x, y, z);
        }else if(rnd > 0.6){
          fireworkGrun(x, y, z);
        }else{
          fireworkGelb(x, y, z);
        }
      }
    }

    //Creating a particle System for fireworks
    var particleSystem = new BABYLON.ParticleSystem("particles", 50, scene);
    particleSystem.particleTexture = new BABYLON.Texture("assets/Flare.png", scene);

    // Where the particles comes from
    particleSystem.emitter = new BABYLON.Vector3(0, 0, 0); // the starting object, the emitter
    particleSystem.minEmitBox = new BABYLON.Vector3(-2, 0, -2); // Starting all From
    particleSystem.maxEmitBox = new BABYLON.Vector3(2, 0, 2); // To...

    // Colors of all particles (splitted in 2 + specific color before dispose)
    particleSystem.color1 = new BABYLON.Color4(1.0, 0.5, 0.2, 1.0);
    particleSystem.color2 = new BABYLON.Color4(1.0, 0.5, 0.2, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0);

    // Size of each particle (random between...)
    particleSystem.minSize = 25;
    particleSystem.maxSize = 30;

    // Life time of each particle (random between...)
    particleSystem.minLifeTime = 1.5;
    particleSystem.maxLifeTime = 1.6;

    particleSystem.emitRate = 2;

    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    particleSystem.direction1 = new BABYLON.Vector3(0.1, 1, 0.1);
    particleSystem.direction2 = new BABYLON.Vector3(-0.1, 1, -0.1);

    //Set the gravity of all particles (not necessary down)
    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

    particleSystem.minEmitPower = 1500;
    particleSystem.maxEmitPower = 1500;

    particleSystem.updateSpeed = 0.01;

    particleSystem.disposeOnStop = true;

    particleSystem.start();

/*Die Updatefunktion ist so modifiziert, dass sie ein neues Partikelsystem erstellt, wenn das Partikel stirbt*/
    particleSystem.updateFunction = function(particles) {
     for (var index = 0; index < particles.length; index++) {
           var particle = particles[index];
           particle.age += this._scaledUpdateSpeed;

           if (particle.age >= particle.lifeTime) { // Recycle
             final(particle.position.x, particle.position.y, particle.position.z); //Aufruf um neues System zu generieren
                particles.splice(index, 1);
                this._stockParticles.push(particle);
                index--;
                continue;
           }
           else {
                particle.colorStep.scaleToRef(this._scaledUpdateSpeed, this._scaledColorStep);
                particle.color.addInPlace(this._scaledColorStep);

                if (particle.color.a < 0)
                             particle.color.a = 0;

                particle.angle += particle.angularSpeed * this._scaledUpdateSpeed;

                particle.direction.scaleToRef(this._scaledUpdateSpeed, this._scaledDirection);
                particle.position.addInPlace(this._scaledDirection);

                this.gravity.scaleToRef(this._scaledUpdateSpeed, this._scaledGravity);
                particle.direction.addInPlace(this._scaledGravity);
           }
     }
}

    scene.activeCamera.attachControl(canvas);

/*Einspielung des Audiofiles*/
    var audio = new Audio('assets/Transformers Theme.mp3');
    audio.play();

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
