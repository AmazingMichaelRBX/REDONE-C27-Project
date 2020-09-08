
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

bobObject1 = new Bob(300,500,25);
bobObject2 = new Bob(350,500,25);
bobObject3 = new Bob(400,500,25);
bobObject4 = new Bob(450,500,25);
bobObject5 = new Bob(500,500,25);
roofObject = new Roof(400,250,270,35)
rope1 = new Rope(bobObject1.body,roofObject.body,-100,0);
rope2 = new Rope(bobObject2.body,roofObject.body,-50,0);
rope3 = new Rope(bobObject3.body,roofObject.body,0,0);
rope4 = new Rope(bobObject4.body,roofObject.body,50,0);
rope5 = new Rope(bobObject5.body,roofObject.body,100,0);
}


function draw() {
  rectMode(CENTER);
  background(255);
  





bobObject1.display();

bobObject2.display();

bobObject3.display();

bobObject4.display();

bobObject5.display();

roofObject.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


  //drawSprites();
}

function keyPressed(){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
		
	}
}


