class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:0.4,
            friction:1,
            density:0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("cube.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("yellow");
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}