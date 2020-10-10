
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImg;
var boyImg;
var fruit1,fruit2,fruit3,fruit4,fruit5,fruit6,fruit7,fruit8;
var stoneObj,mangotree,groundObj;

function preload()
{
	boyImg = loadImage("boy.png")
	
	treeImg = loadImage("tree.png")
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	fruit1 = new mango(1000,100,35);
	fruit2 = new mango(800,300,30);
	fruit3 = new mango(900,200,20);
	fruit4 = new mango(1000,300,30);
	fruit5 = new mango(1100,200,30);
	fruit6 = new mango(1200,300,20);
	fruit7 = new mango(1200,150,20);
	fruit8 = new mango(1300,250,20);

	stoneObj = new stone(250,450,20);

	groundObj = new groundClass(600,height,1600,40);


	slingthrow = new slingshot(stoneObj.body,{x:110,y:480});

	
	
	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background("green");

  push()

  slingthrow.display();

  drawSprites();

  imageMode(CENTER);
  image(treeImg,1000,360,700,700);
  image(boyImg,200,570,300,400);
 
  stoneObj.display();
  groundObj.display();

  fruit1.display();
  fruit2.display();
  fruit3.display();
  fruit4.display();
  fruit5.display();
  fruit6.display();
  fruit7.display();
  fruit8.display();

  detectCollision(stoneObj,fruit1)
  detectCollision(stoneObj,fruit2)
  detectCollision(stoneObj,fruit3)
  detectCollision(stoneObj,fruit4)
  detectCollision(stoneObj,fruit5)
  detectCollision(stoneObj,fruit6)
  detectCollision(stoneObj,fruit7)
  detectCollision(stoneObj,fruit8)
 
 stroke("yellow");
 strokeWeight(5)
  fill("blue");
 textSize(20);
  text("PRESS SPACE To HOLD STONE AGAIN" , 50,50);
  text("DRAG & RELEASE THE STONE TO SHOOT" , 500,50)
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
	
}

function mouseReleased(){
	slingthrow.fly();
	
}

function keyPressed() {
    if(keyCode === 32){
	   Matter.Body.setPosition(stoneObj.body,{x:250,y:350})
		slingthrow.attach(stoneObj.body);
    }
}

function detectCollision(lstone,lmango) {
	mangoBodyPostion = lmango.body.position
	stoneBodyPostion = lstone.body.position

	var distance = dist(stoneBodyPostion.x,stoneBodyPostion.y,mangoBodyPostion.x,mangoBodyPostion.y)

	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false)

	}
	
} 