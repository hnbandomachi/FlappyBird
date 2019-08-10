var bird, pipes = [];
const w = 1000, h = 600, hole = 100, holex = 100;

function setup() { 
    createCanvas(w, h);
    bird = new Bird();
    // frameRate(500)
    pipes.push(new Pipe());
};

function draw() {
    background(0, 0, 0);
    if (frameCount%100 == 0) {
        pipes.push(new Pipe());
    };
    bird.flap();
    bird.update();
    if (bird.dead(pipes)) reset();       
    bird.show(); 
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].update();
        pipes[i].show();
    };
};

function reset() {
    bird = new Bird();
    pipes = [];    
};