var Player,PlayerImg,left_boundary,right_boundary,i;
var Path,PathImg;
var coinGroup,bombGroup,energyGroup,powerGroup;
var coinImg,bombImg,energyImg,powerImg;
var treasure = 0;

function preload(){
  //pre-load images
  PlayerImg = loadAnimation("Runner-1.png", "Runner-2.png");
  PathImg = loadImage("path.png");
coinImg = loadImage("coin.png");
bombImg = loadImage("bomb.png");
energyImg = loadImage("energyDrink.png");
powerImg = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
 // background('blue');
  //create sprites here
 

Path = createSprite(200,200);
 Path.addImage(PathImg);
  Path.velocityY = 6;
  Path.scale = 1.45;



Player = createSprite(250,300,20,20);
Player.addAnimation("movingPlayer", PlayerImg);
Player.scale = 0.05

coinGroup = new Group();
bombGroup = new Group();
energyGroup = new Group();
powerGroup = new Group();



left_boundary = createSprite(0,0,100,800);
left_boundary.visible = false;

right_boundary = createSprite(410,0,100,800);
right_boundary.visible = false



}




function draw() {
background(0)
 Path.velocityY = 6


 Player.x = World.mouseX;

 edges = createEdgeSprites()
 Player.collide(edges[3]);
 Player.collide(left_boundary);
 Player.collide(right_boundary);

 if(Path.y > 400) {
  Path.y = height/2;
}


createCoin();
if(coinGroup.isTouching(Player)) {
coinGroup.destroyEach();
treasure = treasure+50;
}

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure:" + treasure,150,30);
}

function createCoin() {
  if(World.frameCount % 200 == 0 ){
    var coin = createSprite(Math.round(random(50,350),40,10,10));
    coin.addImage(coinImg);
    coin.scale = 0.3;
    coin.velocityY = 3;
    coin.lifeTime = 150;
    coinGroup.add(coin);
  }

}
