var backdrop,backdropimg;
var climber,climberimg;
var ghost,ghostimg;
function preload(){
  backdropimg=loadImage("tower.png");
  ghostimg=loadImage("ghost-standing.png");
   
  
  
  
}

function setup(){
  createCanvas(600,600);
  backdrop=createSprite(300,300,600,600);
  backdrop.addImage(backdropimg)
  backdrop.velocityY=3;
  ghost=createSprite(230,300,5,5)
  ghost.scale=0.37;
  ghost.addImage(ghostimg)
  
  
  
  
}
function draw(){
  if (backdrop.y>600){
    backdrop.y=300
  }
  if (keyDown("space")){
    ghost.velocityY=-10
    
  }
  ghost.velocityY=ghost.velocityY+0.4               
  
  if (keyDown("Left_Arrow")){
    ghost.x=ghost.x-5
    
  }
  
  
  
  
  
  
  
  
  drawSprites();
}