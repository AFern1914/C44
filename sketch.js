var canvas;
var backgroundImage;
var database, gameState;
var form, playerCount;
var bob, bobImg;
var bobAttackImg

function preload() {
  backgroundImage = loadImage("/assets/Stage.jfif");
  bobImg = loadAnimation("/assets/Bob.gif");
  bobAttackImg = loadAnimation("/assets/Attack.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  bob = createSprite(100,height/2,20,30);
  bob.addAnimation("bob",bobImg);
  bob.scale = 0.5;
  //game = new Game();
  //game.getState();
  //game.start();
}

function draw() {
  background(backgroundImage);
  if (keyIsDown("space")) {
    bob.changeAnimation("Attack",bobAttackImg);
  }
  //if (playerCount === 2) {
    //game.update(1);
  //}

  //if (gameState === 1) {
    //game.play();
  //}
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
