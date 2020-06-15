class Log {
    constructor(x,y,width,height){
    var log_options = {
        isStatic:true ,
        restituition:0.3 ,
        friction:1.0 ,
        density:1.3
    } 
    this.body=Bodies.rectangle(x,y,width,height,log_options);
     this.width=width ;
     this.height= height ;
     World.add(world,this.body)
    }
    display (){
    fill("red");
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}