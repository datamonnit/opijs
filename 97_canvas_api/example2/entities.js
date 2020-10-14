// Game Entities

// Player Object
function Player(x,y){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.dirction = -1;
}

Player.prototype.update = function(){
    if (this.y <= 0 || this.y + this.height >= game.fieldHeight){
        this.dirction *= -1;
    }
}

// Enemy Object
function Enemy(x,y){
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.direction = -1;
}

Enemy.prototype.update = function(){
    if (this.x <= 0 || this.x + this.width >= game.fieldWidth){
        this.direction *= -1;
    }
}

// Renderer Object
var renderer = (function() {

    
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var myImage = new Image(32, 32);
    myImage.src = '../img/ukko.png';

    function _drawEnemy(context, enemy){
        context.drawImage(myImage, this.x, this.y);
    }

    function _drawPlayer(context, player) {
        context.fillStyle = "blue";
        context.fillRect(this.x, this.y, this.width, this.height)
    }

    function _render(){

        context.fillStyle = "lightgray";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var i,
            entity,
            entities = game.entities();
        
        for (i=0; i < entities.length; i++){
            entity = entities[i];
            if ( entity instanceof Enemy ) {
                _drawEnemy(context, entity);
            }

            else if (entity instanceof Player ) {
                _drawPlayer(context, entity);
            }
        }     
    }

    return {
        render: _render
    };
})();


// Physics Object
var physics = (function(){
    function _update(){
        var i,
            entities = game.entities();

        for ( i=0; i<entities.length; i++ ){
            entities[i].y += entities[i].dirction;
        }

        return {
            update: _update
        };
    }
})();

// Game Object
var game = (function () {
    var _fieldHeight = 400;
    var _fieldWidth = 400;
    var _entities = [];

    function _start() {
        _entities.push(new Player(100,175));
        _entities.push(new Enemy(20,25));
        _entities.push(new Enemy(80,40));
        _entities.push(new Enemy(160,70));

        window.requestAnimationFrame(this.update.bind(this));
    }

    function _update(){
        physics.update();
        var i;
        for ( i=0; i<_entities.length; i++ ) {
            _entities[i].update();
        }

        renderer.render();

        window.requestAnimationFrame(this.update.bind(this));
    }

    return {
        start: _start,
        update: _update,
        entities: function () { return _entities; },
        fieldHeight: function () { return _fieldHeight },
        fieldWidth: function () { return _fieldWidth }
    };
})();

game.start();


