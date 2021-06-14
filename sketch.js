var playerImg, player;
var groundImg;
var ground;
var invisibleGround;
var pillar2Img, pillar3Img, pillar4Img, pillar, pillarGroup;
var gameState = 0
var score = 0;
var system, form, code;
var gameState = "play";

function preload(){
 playerImg = loadImage("Image/Flyingplayer.png");
 groundImg = loadImage("Image/background.jpg");
 pillar2Img = loadImage("Image/pillar2.png");
 pillar3Img = loadImage("Image/pillar3.png");
 pillar4Img = loadImage("Image/pillar4.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  ground = createSprite(0,0, 2400, 2800);
  ground.addImage(groundImg);
  ground.x = ground.width/2;
  ground.velocityX = -8;
  ground.scale = 3;

  player = createSprite(400, 200, 50, 50);
  player.addImage("running", playerImg);
  player.scale = 0.4;

  invisibleGround = createSprite(0, displayHeight-200, displayWidth, 20);
  invisibleGround.visible = false;

  system = new System();
  form = new Form();

  pillarGroup = new Group();
}

function draw() {
  background(255);  
  clues();
  textSize(20);
  fill("white");
  text("Score: "+score, 450, 50);

  if(gameState === "play"){
    if(keyDown("UP_ARROW")){
      player.velocityY = -6
    }
    player.velocityY = player.velocityY +0.5;
  
    if(ground.x < 0){
      ground.x = ground.width/2;
    }  

    spawnPillar();

    if(pillarGroup.isTouching(player)){
      form.display();
      if(score === 1){
        clear();
        background(groundImg);
        fill("black");
        textSize(40);
        text("You have recovered Successfully!", 250, 200);
      }
    }
  }
  else if(gameState === "end"){
    ground.velocityX = 0;
  }

  edges = createEdgeSprites();
  player.collide(invisibleGround);
  drawSprites();
}

function spawnPillar(){
  if(frameCount % 250 === 0){
    pillar = createSprite(1400, displayHeight-370, 50, 300);
    pillar.velocityX = -4;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: pillar.addImage(pillar2Img);
      break;
      case 2: pillar.addImage(pillar3Img);
      break;
      case 3: pillar.addImage(pillar4Img);
      break;
      default: break;
    }
    pillar.scale = 1.4;
    pillar.lifetime = displayWidth;
    pillarGroup.add(pillar)
  }
}