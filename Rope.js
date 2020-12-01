class Rope{
    constructor(x,y){
    var options = {
        bodyA:x,
        pointB:y,
        stiffness:0.5
    }  
        this.body = Constraint.create(options)
        World.add(world,this.body)
    }
    display(){
        pointA = this.body.bodyA.position
        pointB = this.body.pointB
        stroke("yellow")
        strokeWeight(3)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
    }

}