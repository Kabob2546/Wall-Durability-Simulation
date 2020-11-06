var bullet, wall;
var speed, weight, thickness, damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  damage = 0;

  bullet = createSprite(300, 200, 15, 5);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(10,10,10);  

  bullet.velocityX = speed;

  if(touching(wall,bullet)){
    damage = (0.5* weight * speed * speed) /(thickness * thickness * thickness); 
    if(damage >= 10){
      wall.shapeColor = "red";
    } else {
      wall.shapeColor = "green";
    }
    bullet.velocityX = 0;
  }

  drawSprites();

  //Damage = (weight * speed^2) / 2 * thickness^3
}

function touching(sprite1, sprite2){
  if(sprite1.x - sprite2.x < (sprite1.width + sprite2.width)){
    return true;
  }
}