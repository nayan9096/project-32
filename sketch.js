const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var Slingshot;
var polygonImage;
var block;

function preload()
{
	polygonImage=loadImage("polygon.png");
 
}

function setup() {
	
  engine = Engine.create();
	world = engine.world;
createCanvas(800,700)
	Ground= new ground(400,700,800,5);
  
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
 slingshot = new Slingshot(this.polygon,{x:100,y:200});

 imageMode(CENTER);
 image(polygon_img,plygon.position.x,polygon.position.y,40,40);

  //level1
  block1 = new Block(200,275,30,40);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);

  //level2
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);

  //level3
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);

  //level4
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);

  //level5
  block21 = new Block(335,115,30,40);

  
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  Ground.display();
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  drawSprites()
}