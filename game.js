function load_images(){
    //load fighter , enemies

}


function init(){

//setup canvas
canvas = document.getElementById('mycanvas');
W = canvas.width = 1000;
H = canvas.height = 700;

//creating canvas Context
pen = canvas.getContext('2d');

}


function draw(){


}

function update() {
    

}


function gameLoop() {
    console.log(`In game Loop`)
    draw()
    update()
}

init()
var f = setInterval(gameLoop , 100)