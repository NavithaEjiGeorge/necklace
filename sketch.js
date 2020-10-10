function preload(){
M1 = loadImage("N1.png")
M2 = loadImage("N2.png")
M3 = loadImage("N3.png")
M4 = loadImage("N4.png")
M5 = loadImage("N5.png")
M6 = loadImage("N6.png")
M7 = loadImage("N7.png")
goI = loadImage("go.png")
}

function setup() {
  createCanvas(600,500)
  face = createSprite(450,200, 20, 20);
  face.addAnimation("1",M1);
  face.addAnimation("2",M2)
  face.addAnimation("3",M3)
  face.addAnimation("4",M4)
  face.addAnimation("5",M5)
  face.addAnimation("6",M6)
  face.addAnimation("7",M7)
  face.scale = 1.4;
  go = createSprite(100,450,20,20);
  go.addImage(goI);
  go.scale =0.5;
  go.scale = 0.3;
  red = createSprite(100, 140, 20, 20);
  red.shapeColor = "gold"
  pink = createSprite(100, 200, 20, 20);
  pink.shapeColor = "gold"
  green = createSprite(100, 255, 20, 20);
  green.shapeColor = "gold";
  blue = createSprite(100, 310, 20, 20);
  blue.shapeColor = "gold";
  black = createSprite(50, 365, 20, 20);
  black.shapeColor = "gold";
  violet = createSprite(150, 365, 20, 20);
  violet.shapeColor = "gold"
  gold = createSprite(100, 365, 20, 20);
  gold.shapeColor = "gold"
}

function draw() {
 background("white")
 drawSprites();
    if (mousePressedOver(red)) {
    face.changeAnimation("1",M1)
  }
  if (mousePressedOver(green)) {
    face.changeAnimation("2",M2)
  } 
   if (mousePressedOver(pink)) {
    face.changeAnimation("7",M3)
  } 
     if (mousePressedOver(blue)) {
    face.changeAnimation("5",M4)
  }
  
       if (mousePressedOver(violet)) {
    face.changeAnimation("6",M5)
  }
  
       if (mousePressedOver(black)) {
    face.changeAnimation("4",M6)
  }
         if (mousePressedOver(gold)) {
    face.changeAnimation("3",M7)
  }
  textSize(15);
   fill("red");
    textSize(15);
    text("When you click the go button",50,80);
    text("you will receive a click here message",10,100);
    text("After getting the message click on it to play further..",10,120)
    text("CLICK THE COLOURED BLOCKS TO GET THE DESIRED NAIL POLISH",10,30)
  text("Click these blocks to see the necklaces",10,400)
if(mousePressedOver(go)){
  link = createA("https://navithaejigeorge.github.io/dressM/","Click Here")
  link.position(200,200)
}
}
