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

//creating fighter object
fighter = {
    x:140,
    y:100,
    w:50,
    h:50,
    speed : 10,
    color: "green"
}

}


function draw(){
   //clear the old frame
   pen.clearRect(0,0,W,H)

    pen.fillStyle = fighter.color; 
    pen.fillRect(fighter.x , fighter.y , fighter.w , fighter.h)

}

function update() {
    
    // go in reverse if it reaches its boundaries
    if(fighter.y > H-fighter.h || fighter.y < 0 ){
        fighter.speed *= -1;
    }
    //movement of fighter up and down
    fighter.y += fighter.speed;


}


function gameLoop() {
    console.log(`In game Loop`)
    draw()
    update()
}

load_images()
init()
var f = setInterval(gameLoop , 100)