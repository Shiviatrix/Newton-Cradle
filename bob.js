class Bob{
    constructor(x,y,width,height){
        var prop={
            restitution:2,
            isStatic:false,
            density:5,
            friction:1
            
        }  

        this.myObjects=Bodies.rectangle(x,y,width-40,height-40,prop);
        World.add(world,this.myObjects);


        this.width=width;
        this.height=height;
        this.X=x;
        this.Y=y;
    }

    display(){

        var angle=this.myObjects.angle;
        var position=this.myObjects.position;

        push();
        translate(position.x,position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0,this.width,this.height);
        pop();

    }
}
