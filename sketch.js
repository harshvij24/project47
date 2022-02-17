var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14;
var wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25;
var bone1,bone2,bone3,bone4,bone5,bone6,bone7,bone8,bone9,bone10,bone11,bone12,boneImage,boneVImage;
var bone13,bone14,bone15,bone16,bone17,bone18,bone19,bone20,bone21,bone22,bone23,bone24
var bone25,bone26,bone27,bone28,bone29,bone30,bone31,bone32,bone33,bone34,bone35,bone36;
var bone37,bone38,bone39,bone40,bone41,bone42,bone43,bone44,bone45,bone46,bone47,bone48;
var edges
var form;

var dog, dogImage;

var score = 0;

function preload(){
 boneImage= loadImage("Bone.png")
 boneVImage= loadImage("BoneV.png")
 dogImage = loadImage("dog1.png")
}
function setup() {
  createCanvas(windowWidth-50,600);
  
   form = new Heading();

   //creating boundaries
   wall1 = createSprite(750,100,1000,10);
   wall1.shapeColor="blue";
   wall2 = createSprite(750,500,1000,10);
   wall2.shapeColor="blue";
   wall3 = createSprite(250,270,10,350);
   wall3.shapeColor="blue";
   wall4 = createSprite(360,300,10,250);
   wall4.shapeColor="blue";
   wall5 = createSprite(540,300,10,250);
   wall5.shapeColor="blue"; 
   wall6 = createSprite(450,300,40,10);
   wall6.shapeColor="blue"; 
   wall7 = createSprite(700,200,200,10);
   wall7.shapeColor="blue";
   wall8 = createSprite(700,400,200,10);
   wall8.shapeColor="blue";
   wall9 = createSprite(1250,300,10,410);
   wall9.shapeColor="blue";
   wall10 = createSprite(1170,300,10,280);
   wall10.shapeColor="blue";
   //wall10 = createSprite(1030,300,10,200);
  // wall10.shapeColor="blue";
   wall11 = createSprite(1100,260,40,10);
   wall11.shapeColor="blue"; 
   wall12 = createSprite(1100,350,40,10);
   wall12.shapeColor="blue";
   wall13 = createSprite(700,260,130,10);
   wall13.shapeColor="blue";  
   wall14 = createSprite(700,340,130,10);
   wall14.shapeColor="blue";
   wall15 = createSprite(640,300,10,80);
   wall15.shapeColor="blue"; 
   wall16 = createSprite(760,270,10,20);
   wall16.shapeColor="blue"; 
   wall17 = createSprite(760,330,10,20);
   wall17.shapeColor="blue"; 
   wall18 = createSprite(990,200,80,10);
   wall18.shapeColor="blue";
   wall19 = createSprite(970,340,10,150);
   wall19.shapeColor="blue";
   wall20 = createSprite(880,260,60,10);
   wall20.shapeColor="blue";
   wall21 = createSprite(880,350,10,60);
   wall21.shapeColor="blue"; 


  
   // creating food sprites
   bone1= createSprite(300,130)
   bone1.addImage(boneImage);
   bone1.scale = 0.1;

   bone2= createSprite(380,130)
   bone2.addImage(boneImage);
   bone2.scale = 0.1;

   bone3= createSprite(460,130)
   bone3.addImage(boneImage);
   bone3.scale = 0.1;

   bone4= createSprite(540,130)
   bone4.addImage(boneImage);
   bone4.scale = 0.1;

   bone5= createSprite(620,130)
   bone5.addImage(boneImage);
   bone5.scale = 0.1;

   bone6= createSprite(700,130)
   bone6.addImage(boneImage);
   bone6.scale = 0.1;

   bone7= createSprite(780,130)
   bone7.addImage(boneImage);
   bone7.scale = 0.1;

   bone8= createSprite(860,130)
   bone8.addImage(boneImage);
   bone8.scale = 0.1;

   bone9= createSprite(940,130)
   bone9.addImage(boneImage);
   bone9.scale = 0.1;

   bone10= createSprite(1020,130)
   bone10.addImage(boneImage);
   bone10.scale = 0.1;

   bone11= createSprite(1100,130)
   bone11.addImage(boneImage);
   bone11.scale = 0.1;

   bone12= createSprite(1180,130)
   bone12.addImage(boneImage);
   bone12.scale = 0.1;

   bone13= createSprite(300,460)
   bone13.addImage(boneImage);
   bone13.scale = 0.1;

   bone14= createSprite(380,460)
   bone14.addImage(boneImage);
   bone14.scale = 0.1;

   bone15= createSprite(460,460)
   bone15.addImage(boneImage);
   bone15.scale = 0.1;

   bone16= createSprite(540,460)
   bone16.addImage(boneImage);
   bone16.scale = 0.1;

   bone17= createSprite(620,460)
   bone17.addImage(boneImage);
   bone17.scale = 0.1;

   bone18= createSprite(700,460)
   bone18.addImage(boneImage);
   bone18.scale = 0.1;

   bone19= createSprite(780,460)
   bone19.addImage(boneImage);
   bone19.scale = 0.1;

   bone20= createSprite(860,460)
   bone20.addImage(boneImage);
   bone20.scale = 0.1;

   bone21= createSprite(940,460)
   bone21.addImage(boneImage);
   bone21.scale = 0.1;

   bone22= createSprite(1020,460)
   bone22.addImage(boneImage);
   bone22.scale = 0.1;

   bone23= createSprite(1100,460)
   bone23.addImage(boneImage);
   bone23.scale = 0.1;

   bone24= createSprite(1180,460)
   bone24.addImage(boneImage);
   bone24.scale = 0.1;

   bone25= createSprite(300,190)
   bone25.addImage(boneVImage);
   bone25.scale = 0.1;

   bone26= createSprite(300,280)
   bone26.addImage(boneVImage);
   bone26.scale = 0.1;

   bone27= createSprite(300,370)
   bone27.addImage(boneVImage);
   bone27.scale = 0.1;

   bone28= createSprite(1210,190)
   bone28.addImage(boneVImage);
   bone28.scale = 0.1;

   bone29= createSprite(1210,280)
   bone29.addImage(boneVImage);
   bone29.scale = 0.1;

   bone30= createSprite(1210,370)
   bone30.addImage(boneVImage);
   bone30.scale = 0.1;

   bone31= createSprite(400,190)
   bone31.addImage(boneVImage);
   bone31.scale = 0.1;

   bone32= createSprite(400,280)
   bone32.addImage(boneVImage);
   bone32.scale = 0.1;

   bone33= createSprite(400,370)
   bone33.addImage(boneVImage);
   bone33.scale = 0.1;

   bone34= createSprite(500,190)
   bone34.addImage(boneVImage);
   bone34.scale = 0.1;

   bone35= createSprite(500,280)
   bone35.addImage(boneVImage);
   bone35.scale = 0.1;

   bone36= createSprite(500,370)
   bone36.addImage(boneVImage);
   bone36.scale = 0.1;

   bone37= createSprite(580,190)
   bone37.addImage(boneVImage);
   bone37.scale = 0.1;

   bone38= createSprite(580,280)
   bone38.addImage(boneVImage);
   bone38.scale = 0.1;

   bone39= createSprite(580,370)
   bone39.addImage(boneVImage);
   bone39.scale = 0.1;

   bone40= createSprite(820,190)
   bone40.addImage(boneVImage);
   bone40.scale = 0.1;

   bone41= createSprite(820,280)
   bone41.addImage(boneVImage);
   bone41.scale = 0.1;

   bone42= createSprite(820,370)
   bone42.addImage(boneVImage);
   bone42.scale = 0.1;

   bone43= createSprite(930,190)
   bone43.addImage(boneVImage);
   bone43.scale = 0.1;

   bone44= createSprite(930,280)
   bone44.addImage(boneVImage);
   bone44.scale = 0.1;

   bone45= createSprite(930,370)
   bone45.addImage(boneVImage);
   bone45.scale = 0.1;

   bone46= createSprite(1060,190)
   bone46.addImage(boneVImage);
   bone46.scale = 0.1;

   bone47= createSprite(1060,280)
   bone47.addImage(boneVImage);
   bone47.scale = 0.1;

   bone48= createSprite(1060,370)
   bone48.addImage(boneVImage);
   bone48.scale = 0.1;

   //creating player sprite
   dog= createSprite(230,470)
   dog.addImage(dogImage);
   dog.scale = 0.09;

}


function draw() {
  background(0);

  //giving controls to player to move in different directions
  if(keyDown("right")){
    dog.velocityX=5
  }
  if(keyDown("left")){
    dog.velocityX= -5
  }
  if(keyDown("up")){
    dog.velocityY= -5
  }
  if(keyDown("down")){
    dog.velocityY=5
  }

//colloding the player with boundaries
  dog.collide(wall1);
  dog.collide(wall2);
  dog.collide(wall3);
  dog.collide(wall4);
  dog.collide(wall5);
  dog.collide(wall6);
  dog.collide(wall7);
  dog.collide(wall8);
  dog.collide(wall9);
  dog.collide(wall10);
  dog.collide(wall11);
  dog.collide(wall12);
  dog.collide(wall13);
  dog.collide(wall14);
  dog.collide(wall15);
  dog.collide(wall16);
  dog.collide(wall17);
  dog.collide(wall18);
  dog.collide(wall19);
  dog.collide(wall20);
  dog.collide(wall21);
 
  //player sprite touching food

  if(dog.isTouching(bone1))
    {
      bone1.destroy();
      score = score+1;
    }
  if(dog.isTouching(bone2))
    {
      bone2.destroy();
      score = score+1;
    }
    if(dog.isTouching(bone3))
    {
      bone3.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone4))
    {
      bone4.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone5))
    {
      bone5.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone6))
    {
      bone6.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone7))
    {
      bone7.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone8))
    {
      bone8.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone9))
    {
      bone9.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone10))
    {
      bone10.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone11))
    {
      bone11.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone12))
    {
      bone12.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone13))
    {
      bone13.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone14))
    {
      bone14.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone15))
    {
      bone15.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone16))
    {
      bone16.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone17))
    {
      bone17.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone18))
    {
      bone18.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone19))
    {
      bone19.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone20))
    {
      bone20.destroy();
      score = score+1;
    }
    if(dog.isTouching(bone21))
    {
      bone21.destroy();
      score = score+1;
    }

    if(dog.isTouching(bone22))
    {
      bone22.destroy();
      score = score+1;
    }
   
   





textSize(30);
  fill("yellow")
  text("Score: "+score, 1300,50);
  drawSprites();




  form.display();

  
  
}
