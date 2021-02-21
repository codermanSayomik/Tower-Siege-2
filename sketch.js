const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21;
var block22;
var polygon;
var ground1, ground2, ground3;

var sling;

var ball;
var img;

function preload(){
  img = loadImage("polygon.png");

}

function setup() {
    createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;
  
  
    block1 = new Block(600,400,30,40);
    block2 = new Block(570,400,30,40);
    block3 = new Block(540,400,30,40);
    block4 = new Block(630,400,30,40);
    block5 = new Block(660,400,30,40);
  
    block6 = new Block(585,360,30,40);
    block7 = new Block(555,360,30,40);
    block8 = new Block(615,360,30,40);
    block9 = new Block(645,360,30,40);
  
    block10 = new Block(600,310,30,40);
    block11 = new Block(570,320,30,40);
    block12 = new Block(630,320,30,40);
  
    block13 = new Block(600,280,30,40);




    block14 = new Block(940,170,30,40);
    block15 = new Block(970,170,30,40);
    block16 = new Block(910,170,30,40);
    block17 = new Block(880,170,30,40);
    block18 = new Block(1000,170,30,40);
  
    block19 = new Block(940,140,30,40);
    block20 = new Block(970,140,30,40);
    block21 = new Block(910,140,30,40);
  
    block22 = new Block(940,110,30,40);
  


    ground1 = new Ground(600,425,200,10);
    ground2 = new Ground(940,195,200,10);
    ground3 = new Ground(750, 600, 1500, 10)
  
    polygon = new Polygon(50,200,30,30);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    sling = new Sling(this.ball,{x:150, y:160});

}

function draw(){
  background("grey");
  Engine.update(engine);

  fill(rgb(135, 205, 236));

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("blue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  block10.display();
  block11.display();
  block12.display();
  fill(rgb(47, 48, 48));

  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("red");

  block19.display();
  block20.display();
  block21.display();
  fill("lightGreen");

  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    sling.fly();
  }
  
  function keyPressed(){
      if(keyCode === 32)
      {
          Matter.Body.setPosition(ball.body,{x:235, y:420})
          sling.attach(this.ball);
      }
  }
