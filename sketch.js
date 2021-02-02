var fixedRect, movingRect;
var ob1,ob2,ob3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(300,300,50,50);
  ob1.shapeColor="orange"
  ob2 = createSprite(500,300,50,50)
  ob2.shapeColor="orange"
  ob3 = createSprite(800,300,50,50)
  ob3.shapeColor="orange"



}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
//  movingRect.y = World.mouseY;

 if( isTouching(movingRect,ob3))
 {
    ob3.shapeColor="red"
    movingRect.shapeColor='red'
 
 }
 else
 {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }


  drawSprites();
}


function isTouching(object1,object2)
{

  if (object1.x - object2.x < object2.width/2 +object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y <object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  
      return true;
}
else {
  return false;

}

}