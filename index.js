var bird, bg, score = 0, frame = 100;
var pipes = [];
const w = 600, h = 600, hole = 150, holex = 40;


function setup() { 
    createCanvas(w, h);
    textSize(50);
    bg = new Background();
    bird = new Bird();
    pipes.push(new Pipe());
};

function draw() {
    background(0, 0, 0);    
    bird.flap();
    bird.update();    
    bird.show();
    if (bird.dead(pipes)) reset();

    if (frameCount < 400) {
        if (frameCount%100 == 0) {
            pipes.push(new Pipe());
        };                
    }
    else {
        if (pipes[0].xup == -holex) {
            pipes.push(new Pipe());
        };
    };


    for (let i = 0; i < pipes.length; i++) {
        pipes[i].update();
        if (pipes[i].overBackground()) pipes.splice(0, 1);
        pipes[i].show();
    };
    
};

function reset() {
    // bird.x = 70; bird.y = 70; bird.v = 0;
    // pipes = [];
    // pipes.push(new Pipe());
};