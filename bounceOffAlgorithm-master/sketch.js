var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 fixedRect.velocityX = -25;
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX = 7;
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject1.velocityX = -10;
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject2.velocityY = 5;
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject3.velocityX = 15;
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
  gameObject4.velocityY = 21;
}


function draw() {
  background(0,0,0);  

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  bounceOff(movingRect, gameObject4);
  bounceOff (fixedRect, gameObject1);
  drawSprites();
}

