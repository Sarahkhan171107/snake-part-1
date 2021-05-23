var PLAY = 1;
var END = 0;
var gameState = PLAY;

var snake, snakeImage, apple , appleImage ,germs ,germsImage



var score=0;

var gameOver, restart;



function preload(){
  
  snakeImage = loadImage("snake.gif");
  
  appleImage = loadImage("apple.gif");
  
  germsImage = loadImage("germs.gif");
}

function setup() {
  createCanvas(1800, 600);
  
  snake = createSprite(50,180,20,50);
  
  
 snake .scale= 0.5
  
  
  snake.addImage("snake",snakeImage);
  
}

function draw() {
  //trex.debug = true;
  background("lightblue");
  text("Score: "+ score, 500,50);
  
  if (gameState===PLAY){
    
  
    if(keyDown(UP_ARROW)) {
      snake.y = snake.y-5;
    }

    if(keyDown(DOWN_ARROW)) {
      snake.y = snake.y+5;
    }

    if(keyDown(RIGHT_ARROW)) {
      snake.x = snake.x+5;
    }
  
    if(keyDown(LEFT_ARROW)) {
      snake.x = snake.x-5;
    }

    snake .debug= true
    spawnapples();
    spawngerms();

  }
    /*
    trex.velocityY = trex.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    trex.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
  
    if(obstaclesGroup.isTouching(trex)){
        gameState = END;
    }
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.changeAnimation("pic.gif");
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
    }
  }
  
*/
  drawSprites();
}

function spawnapples() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var apple = createSprite(600,120,40,10);
    apple.y = Math.round(random(0,600));
     apple.x = Math.round(random(1200,0));
    apple.addImage(appleImage);
    apple.scale = 0.1;
    
  }
  
}
  

function spawngerms() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var germs = createSprite(600,120,40,10);
    germs.y = Math.round(random(0,600));
     germs.x = Math.round(random(1200,0));
    germs.addImage(germsImage);
    germs.scale = 0.1;
    
  }
  
}
  