const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paperBall;
var ground;
var Box1,Box2,Box3;
function setup() {
  createCanvas(800,400);
  engine=Engine.create(); 
  world=engine.world;

  paperBall = new Paper(56,45,20);
  ground = new Ground(400,height,800,20);
  fill("white"); 
	Box1 = new Dustbin(650,340,15,100);
	fill("white");
	Box2 = new Dustbin(725,380,150,20);
	fill("white");
	Box3 = new Dustbin(800,340,15,100);
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  paperBall.display();
  Box1.display();
  Box2.display();
  Box3.display();

  drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:30,y:-30});
}

}