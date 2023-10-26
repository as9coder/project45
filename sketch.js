var rs=0, usd=0;
var machine, machineImg;
var makeMoney;
var bound;

function preload(){
  machineImg= loadImage("machine.gif");
}

function setup() {
  createCanvas(windowWidth-8, windowHeight-8);

  bound= createSprite(width/5, height-1, 20,height*2-10);

  machine= createSprite(width/2, height/2-100, 20,20);
  machine.addImage(machineImg);
  machine.scale= 0.4;

  makeMoney= createButton("CLICK FOR MONEY");
  makeMoney.position(width/2-80, height/2);
}

function draw() 
{
  background("pink");

  textSize(40);
  fill("red");
  text("RICHNESS TYCOON", width/3+20, height/6);

  textSize(30);
  text("YOUR BALANCE", width/65, height/8);

  textSize(20);
  text("RUPEE: "+rs, width/20, height/3);
  text("USD: "+usd, width/20, height/2-10);

  drawSprites();

}




