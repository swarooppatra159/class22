const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;

var ground,ball;



function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
  
  var ground_options = {
  isStatic: true  
}
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myworld,ground);

 var ball_options = {
  restitution: 4.0 ,
  density: 0.5 
 }
 ball= Bodies.circle(200,100,20,ball_options);
 World.add(myworld,ball);


}
  function draw() {
  background(0);  
  Engine.update(myengine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
 




}
































