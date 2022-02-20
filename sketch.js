//Projeto do  Coelho
//Autor: Matheus Henrique
//Data:20/02

//Declaração de variáveis
var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;

// função que executa antes do programa
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

// função para configuração do sistema
function setup(){
  createCanvas(400,400);
  // criando o fundo
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating coelho running
  rabbit = createSprite(160,340,20,20);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

// função principal
function draw() {
  background(0);
  
  // rabbit moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
   
  //Alimeta a variável com um numero randomico entre 1 e 3
  // var select_sprites = Math(random(1,3));
  // var select_sprites = Math.random(random(1,3));
  //var select_sprites = Math.round(1,3);
   var select_sprites = Math.round(random(1,3));

  /*
   if (frameCount % 50 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
       createRed();
     }
  // }
*/

  //verifica se a contagem de frames atual é divisil por 80
  // toda vez que o contador frameCount tiver um valor que dividido por 80 dê resto 0
  // entao entra no if
  if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     }
     if (select_sprites == 2) {
       createOrange();
     }
     if (select_sprites == 3) {
      createRed();
    }
  }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }



}// fim draw

//função para criar os sprite de maças
function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

// função para criar os sprites da folha laranja
function createOrange() {
  orangeL = createSprite(random(50, 350),40, 10, 10);
  orangeL.addImage(orangeImg);
  orangeL.scale=0.08;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150;
}

// criar as sprites da folha vermelha
function createRed() {
  redL = createSprite(random(50, 350),40, 10, 10);
  redL.addImage(redImg);
  redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
