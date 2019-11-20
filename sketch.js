var cir1, cir2 ;

function setup() {
    createCanvas(400, 400) ;

    cir1 = createSprite(200, 200, 40, 40) ;
    cir1.shapeColor = "red";
    cir1.setCollider("Circle", 0, 0, 10) ;
    cir1.debug = true ; 

    cir2 = createSprite(180, 200, 40, 40) ;
    cir2.shapeColor = "lightgreen";
    cir2.setCollider("Circle", 0, 0, 10) ;
    cir2.debug = true ;
}

function draw() {
    background (303, 250,203) ;

        cir2.x = World.mouseX ;
        cir2.y = World.mouseY ;
        if (cir1.isTouching (cir2)){
        cir1.shapeColor = "yellow" ; 
        cir2.shapeColor = "blue" ; 
        }
        
        else{
            cir1.shapeColor = "red" ; 
            cir2.shapeColor = "green" ; 
        }
        
        drawSprites() ;
}