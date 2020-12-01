
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.constraint

var engine, world;

function setup() {
  createCanvas(1500,600);

  engine = Engine.create();
    world = engine.world;

    ground = new Ground(750,580,1500,25);

    ball = new Ball(750,450,60,60)
    
    rope = new Rope(ball.body,{x:750,y:100})
}
function draw() {
  background("black");  
 Engine.update(engine);
  ground.display();
  ball.display();
  rope.display();
}