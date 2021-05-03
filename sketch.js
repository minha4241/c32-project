const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimg;
var staticimg

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()

    staticimg=loadImage('sunset12.png')
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundimg ){
    background(backgroundimg)
}
else{
    background(staticimg)
}

    Engine.update(engine);

    // write code to display time in correct format here

    

}

async function getBackgroundImg(){

    // write code to fetch time from API
 var response= await fetch ('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    //change the data in JSON format
var responsejson= await response.json()
    // write code slice the datetime
    var datetime= responsejson.datetime
    var hour= datetime.slice(11,13)
    console.log(hour)

    // add conditions to change the background images from sunrise to sunset
       if (hour>= 6 && hour<=8){
           bg="sunrise1.png"
       }
       else if(hour>= 9 && hour<=10){
           bg="sunrise2.png"
       }
       

       
       backgroundimg=loadImage(bg)
    //load the image in backgroundImg variable here

}
