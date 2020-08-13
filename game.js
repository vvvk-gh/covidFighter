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

//creating Enemies
Enemy1 = {
    x:140,
    y:100,
    w:50,
    h:50,
    speed : 10,
    color: "green"
}

Enemy2 = {
    x: Enemy1.x +300,
    y: Enemy1.y+100,
    w: Enemy1.w,
    h: Enemy1.h,
    speed :Enemy1.speed + 4,
    color :Enemy1.color
}

Enemy3 = {
    x: Enemy2.x +200,
    y: Enemy2.y+100,
    w: Enemy2.w,
    h: Enemy1.h,
    speed :Enemy2.speed +2,
    color :Enemy2.color
    
}

}


function draw(){
   //clear the old frame
   pen.clearRect(0,0,W,H)
    pen.fillStyle = Enemy2.color;

    pen.fillRect(Enemy1.x, Enemy1.y , Enemy1.w , Enemy1.h)
    pen.fillRect(Enemy2.x, Enemy2.y , Enemy2.w , Enemy2.h)
    pen.fillRect(Enemy3.x, Enemy3.y , Enemy3.w , Enemy3.h)

}

function update() {
    
    if(Enemy1.y > H - Enemy1.h || Enemy1.y < 0 ){
        Enemy1.speed *= -1;
    }
    //movement of fighter up and down
    Enemy1.y += Enemy1.speed;

    if(Enemy2.y > H - Enemy2.h || Enemy2.y < 0 ){
        Enemy2.speed *= -1
    }
    //movement of fighter up and down
    Enemy2.y += Enemy2.speed;

    // go in reverse if it reaches its boundaries
    if(Enemy3.y > H - Enemy3.h || Enemy3.y < 0 ){
        Enemy3.speed *= -1;
    }
    //movement of fighter up and down
    Enemy3.y += Enemy3.speed;


}


function gameLoop() {
    console.log(`In game Loop`)
    draw()
    update()
}

load_images()
init()
var f = setInterval(gameLoop , 100)