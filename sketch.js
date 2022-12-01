const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher, player2, alvo;
var baseimage, alvoIMG;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcher = loadImage("./assets/playerArcher.png");
  alvoIMG = loadImage("./assets/board.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  var options = {
    isStatic: true
  }

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);
  //criar corpo do jogador
  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);

  player2 = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);

  alvo = Bodies.rectangle(850, 190 , 50, 180, options);
  World.add(world, player);


}

function draw() {
  background(backgroundImg);

  //exibir a imagem da base do jogador usando a função image()
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150);

  //exibir a imagem do jogador usando a função image()
  image(playerimage, player.position.x, player.position.y, 50, 180);
  image(playerArcher, player.position.x + 10, player.position.y - 20, 110, 150);


  image(alvoIMG, alvo.position.x, alvo.position.y, 110, 110);
  Engine.update(engine);

    if (keyIsDown(LEFT_ARROW)) {
      lançar();
    }
  


  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}