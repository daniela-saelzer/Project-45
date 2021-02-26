var sandy;
var happyElfImg;

var wToy,rToy;
var horseToy,carToy,guitarToy,boatToy;
var basketToy,treeToy,clockToy,fridgeToy;
var conveyor,conveyorImg;
var backImg;

var selectToy;

var wCount = 0, rCount = 0;



function preload(){
  happyElfImg = loadImage("Images/happyElf.png");
  conveyorImg = loadImage("Images/conveyor.png");

 //backImg = loadImage("Image");
  horseToy = loadImage("Images/horseToy.png");
  carToy = loadImage("Images/carToy.png"); 
  boatToy = loadImage("Images/boatToy.png"); 
  guitarToy = loadImage("Images/guitarToy.png");   

  basketToy = loadImage("Images/basketToy.png");
  treeToy = loadImage("Images/treeToy.png");
  fridgeToy = loadImage("Images/fridgeToy.png");
  clockToy = loadImage("Images/clockToy.png");

  backImg = loadImage("Images/backgroundImg.webp");
}

function setup() {
  createCanvas(2000,900);

sandy = createSprite(1400, 600, 50, 50);
sandy.addImage("happyElf",happyElfImg);
sandy.scale = 4;


//wToy = createSprite(600,200,50,50);

conveyor = createSprite(900,600,50,50);
conveyor.scale = 5;
conveyor.addImage(conveyorImg);
//conveyor.debug = true;
//conveyor.setCollider("rectangle",0,0,400,400);



}

function draw() {
  background(backImg);
  //stroke("black");
  textFont("Brush Script MT");
  fill("red")
  textSize(40)
  text("Wrong Presents: " + wCount,1550,100);
  text("Right Presents: " + rCount,1550,150);

  //conveyor.depth = sandy.depth + 1;

  if(World.frameCount % 80 === 0){
    selectToy=Math.round(random(1,2));
    
    if(selectToy===1){
      spawnRToy();
    }
    if(selectToy===2){
      spawnWToy();
    }
   }

  if(mousePressedOver(rToy)){
    rCount = rCount + 1;
  }

  if(mousePressedOver(wToy)){
    wCount = wCount + 1;

  }

  

  drawSprites();
}

function spawnRToy(){
  rToy = createSprite(0,600,50,50);
  rToy.velocityX = 4;
  rToy.scale = 1.5;
  if(rToy.x < 900){
    conveyor.depth = rToy.depth + 1;
  }else{
    rToy.depth = conveyor.depth + 1;
  }

  //rToy.collide(conveyor);
  var randomToy = Math.round(random(1,4));
    switch(randomToy){
      case 1: rToy.addImage(horseToy);
        break;
      case 2: rToy.addImage(carToy);
        break;
      case 3: rToy.addImage(boatToy);
        break;
      case 4: rToy.addImage(guitarToy);
        break;
    }



}


function spawnWToy(){
  wToy = createSprite(0,600,50,50);
  wToy.velocityX = 4;
  conveyor.depth = wToy.depth + 1;
  //wToy.collide(conveyor);
  var randomToy = Math.round(random(1,4));
    switch(randomToy){
      case 1: wToy.addImage(basketToy);
        break;
      case 2: wToy.addImage(clockToy);
        break;
      case 3: wToy.addImage(fridgeToy);
        break;
      case 4: wToy.addImage(treeToy);
        break;
    }
  }