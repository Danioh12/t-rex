var boat, boat_diving;
var sea;

function preload(){
boat_diving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(1000,1000);
  
boat = createSprite(50,180, 20, 40);
boat.addAnimation("dive", boat_diving);
boat.sacale = 0.00000000001;

}

function draw() {
  background("blue");

  drawSprites();

}



