var x=0;
var Rect=[];
var c=['red', 'green', 'blue', 'purple'];
var i=0;

//execute once the programs begind
function setup(){
    
    createCanvas(700,350);
    background(0);
    
    for(var x=0; x<700; x=x+100 ){
        Rect[x]=[];
            for(var y=0; y<350; y=y+50){
                Rect[x][y]=i;
                fill(c[Rect[x][y]])
                stroke('pink');
                rect(x,y,100,50);
                
            }
        
    }
}

function mousePressed(){
    x=mouseX-(mouseX%100)
    y=mouseY-(mouseY%50)
    changeColor();
    
}

function changeColor(){
    for (var X=0; X<700; X=X+100){
         Rect[X][y]=(Rect[X][y]+1)%4
         fill(c[Rect[X][y]])
         stroke('pink');
         rect(X,y,100,50);
        
    }
    
    for (var Y=0; Y<350 ; Y=Y+50){
         
         if (Y!=y){
             Rect[x][Y]=(Rect[x][Y]+1)%4;
             fill(c[Rect[x][Y]]);
             stroke('pink');
             rect(x,Y,100,50);
         }
         
    }
   
   
}
