class Tree {
costructor(x,y) {
    var options = {
    density :0,
    restitution :0,
    friction :0
    };
    this.image = loadImage("sprites/tree.png");

    this.body = Bodies.rectangle(x, y, 10, 10, options);
    this.x = x;
    this.y = y;
        World.add(world, this.body);
}





display() {
    //push();
    //translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 30, 300, 450, 600);
    //pop();

}
}