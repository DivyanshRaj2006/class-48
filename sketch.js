var canvas;
var backgroundImage, bike1_img, bike2_img, bike3_img, bike4_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, bike1, bike2, bike3, bike4, fuels, powerCoins, obstacles;
var bikes = [];

function preload() {
  backgroundImage = loadImage("assets/background.png");
  bike1_img = loadImage("bikeA.png");
  bike2_img = loadImage("assets/bike 2.jpg");
  bike3_img = loadImage("assets/bike 3.jpg");
  bike4_img = loadImage("assets/bike 4.jpeg");
  track = loadImage("track[259].jpg");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  lifeImage = loadImage("assets/life.png");
  blastImage = loadImage("assets/blast.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
