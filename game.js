function load_images(){
    //load fighter , enemies
    enemy_img = new Image();
    enemy_img.src = "assets/virus.png"
}


function init(){
//setup canvas
canvas = document.getElementById('mycanvas');
W = canvas.width = 1000;
H = canvas.height = 700;

//creating canvas Context
pen = canvas.getContext('2d');

//creating Enemies
e1 = {
    x:240,
    y:100,
    w:70,
    h:70,
    speed : 15,
    color: "red"
}

e2 = {
    x: e1.x +300,
    y: e1.y+100,
    w: e1.w,
    h: e1.h,
    speed :e1.speed + 10,
    color :e1.color
}

e3 = {
    x: e2.x +200,
    y: e2.y+100,
    w: e2.w,
    h: e1.h,
    speed :e2.speed +5,
    color :e2.color
    
}

enemies = [e1 ,e2 ,e3]

}


function draw(){

   //clear the old frame
   pen.clearRect(0,0,W,H)
   pen.fillStyle = e2.color;

   for(let i in enemies){
       //pen.fillRect(enemies[i].x , enemies[i].y , enemies[i].w , enemies[i].h)
        pen.drawImage(enemy_img,enemies[i].x , enemies[i].y , enemies[i].w , enemies[i].h)

   }
}

function update() {
    for(let i in enemies){
        enemies[i].y += enemies[i].speed;
        if(enemies[i].y > H - enemies[i].h || enemies[i].y < 0){
            enemies[i].speed *= -1; 
        }
    }
}

function gameLoop() {
    console.log(`In game Loop`)
    draw()
    update()
}

load_images()
init()
var f = setInterval(gameLoop , 100)