
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = new Dustbin(900,670,200,20);
	side2 = new Dustbin(800,630,20,100);
	side3 = new Dustbin(1000,630,20,100);
ball1=new PaperBall(20,670,15);
	ground1= new Ground(600,680,1400,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  side1.display();
  side2.display();
  side3.display();
  ground1.display();
  ball1.display();
  drawSprites();
}
function KeyPressed(){
	if(keyCode===UP_ARROW){
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
	}
}


