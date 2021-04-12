const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var umbrella_man, thunder1Img, thunder2Img, thunder3Img,thunder4Img;
var drops = [];

function preload(){
    umbrella_man = loadImage("Walking Frame/walking_1.png");
    thunder1Img = loadImage("thunderbolt/1.png");
    thunder2Img = loadImage("thunderbolt/2.png");
    thunder3Img = loadImage("thunderbolt/3.png");
    thunder4Img = loadImage("thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(300, 500);

    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    Engine.update(engine);

}   

