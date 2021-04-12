class Drop{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.002
        }
        
        this.body = Bodies.circle(x,y,5,options);
        World.add(world, this.body);
        
    }

    display(){
        var pos = this.body.position;
        fill("lightblue");
        ellipseMode(RADIUS);
        circle(pos.x, pos.y,5);
    }
}