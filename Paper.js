class Paper{
    constructor(x,y,radius){
        var options={
            
restitution:0.1,
friction:1,
density:1.3


        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        //var angle=this.body.angle;
        push(); 
        //translate(pos.x,pos.y);
        fill("pink");
        //rotate(angle);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}