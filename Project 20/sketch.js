var car,wall
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 100, 50);
  car.shapeColor=color("purple");
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor=color("lightblue");
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");
  car.velocityX = speed; 
  
  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}