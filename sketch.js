var igUpload;

function preload(){
    igUpload = loadImage("rih.jpg")
}

function setup(){
    createCanvas(400,400);
    background(0);
}
function draw(){
    
    
   image(igUpload,0,0)
    loadPixels();
    
    for(var row=0; row<height; row++){
        for(var col=0; col<width; col++){
            var index = (row * width + col)* 4;
            
            r = pixels[index];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];
            
            if(keyIsPressed){
                if(key=="r"){
                    rainbow(index, col, row, g, a);   
                } 
                if(key=="1"){
                    hotdog(index, g);
                }
                if(key=="2"){
                pixels[index] = 0;
                pixels[index + 1] = g;
                pixels[index + 2] = 0;
                pixels[index + 3] = a;    
                }
            }
        }
    }
    
    updatePixels();
}

function rainbow(index, col, row, g, a){
    pixels[index] = col;
    pixels[index + 1] = g;
    pixels[index + 2] = row;
    pixels[index + 3] = a;
}

function hotdog(index, g){
     pixels[index] = g;
     pixels[index + 1] = g;
     pixels[index + 2] = g;
     pixels[index + 3] = a; 
}