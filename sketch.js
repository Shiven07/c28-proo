var stone, tree, ground, boy, boyIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
boyIMG = loadImage("sprites/boy.png"); 
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone = new Stone(600, 500, 40);
    tree = new Tree(700, 450);
	Engine.run(engine);
  
}


function draw() {
  background("green");
  rectMode(CENTER);
  Engine.update(engine);
  stone.display();
  drawSprites();
  tree.display();

}
