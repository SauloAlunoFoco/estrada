var ator,carro1,carro2,carro3,carro4,carro5,carro6,estrada
var imagemcarro1,imagemcarro2,imagemcarro3,imagemcarro4,imagemcarro5,imagemcarro6,imagemAtor
var vidas,pontos

function preload(){
  
  imagemator = loadImage('imagens/ator-1.png')
  
  imagemcarro1 = loadImage('imagens/carro-1.png')
  
  imagemcarro2 = loadImage('imagens/carro-2.png')
  
  imagemcarro3 = loadImage('imagens/carro-3.png')
  
  imagemcarro4 = loadImage('imagens/carro-1.png')
  
  imagemcarro5 = loadImage('imagens/carro-2.png')
  
  imagemcarro6 = loadImage('imagens/carro-3.png')
  
  estrada = loadImage('imagens/estrada.png')
}

function setup(){
  createCanvas(600,350)
  carro1 =  createSprite(600,50,20,20)
  carro1.addImage(imagemcarro1)
  carro1.scale = 0.5
  carro1.velocityX = -10
  carro2 =  createSprite(600,100,20,20)
  carro2.addImage(imagemcarro2)
  carro2.scale = 0.5
  carro2.velocityX = -9
  carro3 =  createSprite(600,150,20,20)
  carro3.addImage(imagemcarro3)
  carro3.scale = 0.5
  carro3.velocityX = -8
  carro4 =  createSprite(600,200,20,20)
  carro4.addImage(imagemcarro4)
  carro4.scale = 0.5
  carro4.velocityX = -7
  carro5 =  createSprite(600,250,20,20)
  carro5.addImage(imagemcarro5)
  carro5.scale = 0.5
  carro5.velocityX = -5
  carro6 =  createSprite(600,300,20,20)
  carro6.addImage(imagemcarro6)
  carro6.scale = 0.5
  carro6.velocityX = -6
  
  ator =  createSprite(300,334,20,20)
  ator.addImage(imagemator)
  ator.scale = 0.2
  
  vidas = 3
  pontos = 0
}


function draw(){
  
  background(estrada)
  
  if(carro1.x < 0){
    carro1.x = 650
  }
  if(carro2.x < 0){
    carro2.x = 750
  }
  if(carro3.x < 0){
    carro3.x = 750
  }
  if(carro4.x < 0){
    carro4.x = 750
  }
  if(carro5.x < 0){
    carro5.x = 750
  }
  if(carro6.x < 0){
    carro6.x =  750
  }
  
  if(keyDown('up')){
     ator.y -= 4
     }
  if(keyDown('down')){
    ator.y += 4
  }
     
  if(ator.y < 20){
    ator.y = 334
    pontos = pontos +1
    
  }
  if(ator.y > 335){
    ator.y = 334
  }
  
  
  if(
  ator.isTouching(carro1)||
  ator.isTouching(carro2)||
  ator.isTouching(carro3)||
  ator.isTouching(carro4)||
  ator.isTouching(carro5)||
  ator.isTouching(carro6)
  ){
  ator.y = 335
   vidas = vidas -1
    
  }
 if(vidas <= 0) {
   carro1.remove()
   carro2.remove()
   carro3.remove()
   carro4.remove()
   carro5.remove()
   carro6.remove()
   
   ator.remove()
  fill('red') 
    textSize(30)
   text('GAME OVER',200,180)
   
  
 }
   
  
  fill('red') 
  textSize(20)
  text('vidas: '+vidas,500,20)
    text('pontos: '+pontos,20,20)
  
  
  drawSprites() 

}