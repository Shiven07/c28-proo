class Mango {

    constructor(x, y, r) {
    
    var options={
    isStatic: false,
    restitution: 0,
    friction: 1, 
    density: 1.2
    }
    this.body = Bodies.rectangle(x, y, r, options);
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("sprites/mango.png");  
    World.add(world, this.body);    
    }
    display() {
    
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    
    
    
    }
    
    }   