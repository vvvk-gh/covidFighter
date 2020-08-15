//overlap

function isOverlap(rect1 , rect2 ){
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
        console.log(`Game won`)    
    }
    
}




//loads images of fighter, enemies ,
function load_images(){
    enemy_img = new Image();
    enemy_img.src = "assets/virus.png"

    fighter_girl = new Image()
    fighter_girl.src = "assets/girl2.png"

    fighter_boy = new Image()
    fighter_boy.src = "assets/man.png"

    mask_img = new Image();
    mask_img.src = "assets/mask.png"
}


function getUserGender( ) {
    userGender = genderOptions.options[genderOptions.selectedIndex].text
    console.log(`${userGender}`)
    selectedGender = userGender;
}

//Creates an Random_mask
// function createMask(){
//     maskX = Math.round(Math.random()*((W-fighter.w)/fighter.w)) 
//     maskY = Math.round(Math.random()*((H-fighter.h)/fighter.h))
    
//     mask = {
//         x : maskX,
//         y: maskY
//     }
//     return mask
//   }

function init(){
//setup canvas
canvas = document.getElementById('mycanvas');
W = canvas.width = 1200;
H = canvas.height = 700;

//Select Gender
genderOptions = document.getElementById("userGender")
selectedGender = 'Male';

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

//creating figther
fighter = {
    x: 20,
    y: H/2,
    h:90,
    w:90,
    speed:20,
    moving:"false",
}

//creating mask
mask = {
    x : W-100,
    y :H/2,
    w : 90,
    h : 90
}

//event Listeners 
canvas.addEventListener("mousedown" , ()=>{
    console.log('mouseDown');
    fighter.moving = true 
});

canvas.addEventListener("mouseup" , ()=>{
    console.log('mouse Released');
    fighter.moving = false
});
//RandomMask
//randomMask = createMask() 
//console.log(randomMask)
}


function draw(){
//draw Enemies
   pen.clearRect(0,0,W,H)
   for(let i in enemies){
    pen.drawImage(enemy_img,enemies[i].x , enemies[i].y , enemies[i].w , enemies[i].h)
   }

//draw GenderPic
   if(selectedGender == "Male"){
     pen.drawImage(fighter_boy, fighter.x,fighter.y , fighter.w , fighter.h)
   }
   else{
    pen.drawImage(fighter_girl, fighter.x,fighter.y , fighter.w , fighter.h)
   }
   
//Draw Mask
pen.drawImage(mask_img , mask.x , mask.y , mask.w , mask.h)


}

function update() {
//enemies movement
    for(let i in enemies){
        enemies[i].y += enemies[i].speed;
        //boundary limits
        if(enemies[i].y > H - enemies[i].h || enemies[i].y < 0){
            enemies[i].speed *= -1; 
        }
    }
//updates selected gender 
   genderOptions.addEventListener('change' , getUserGender)
   //console.log(selectedGender)

//Check overlap
isOverlap(fighter , mask)
//player movement 
if (fighter.moving == true) {
       fighter.x += fighter.speed;
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