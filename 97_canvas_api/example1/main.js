var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var myImage = new Image(32, 32);
myImage.src = '../img/ukko.png';

function Player(x,y){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.dirction = -1;
}

Player.prototype.draw = function(){
    context.fillStyle = "blue";
    context.fillRect(this.x, this.y, this.width, this.height)
};

Player.prototype.update = function(){
    this.y = this.y+this.dirction;
    if (this.y <= 0 || this.y + this.height >= canvas.height){
        this.dirction *= -1;
    }
}

function Enemy(x,y){
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.direction = -1;
}

Enemy.prototype.draw = function(){
    context.drawImage(myImage, this.x, this.y);
}

Enemy.prototype.update = function(){
    this.x = this.x+this.direction;
    if (this.x <= 0 || this.x + this.width >= canvas.width){
        this.direction *= -1;
    }
}

var player = new Player(100,200);
var enemy1 = new Enemy(32,132)
var enemy2 = new Enemy(132,232)
var enemy3 = new Enemy(232,2)

function update(){
    
    context.fillStyle = "lightgray";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    player.update();
    player.draw();

    enemy1.update(); 
    enemy1.draw();
    enemy2.update(); 
    enemy2.draw();
    enemy3.update(); 
    enemy3.draw();

    window.requestAnimationFrame(update)

}

update()


