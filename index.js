var bird, bg, pipes = [], score = 0, frame = 100;
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
    if (frameCount < 300) {
        if (frameCount % 150 == 0) pipes.push(new Pipe());
    };
    bird.flap();
    bird.update();

    
    
    bird.show();
    if (bird.dead(pipes)) reset();       
    bird.show(); 
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].update();
        pipes[i].show();
    };

    if (bird.overcome() && frameCount > 300) {        
        score++;
        pipes.push(new Pipe());
    };
};

function reset() {
    frameRate(0)
    // bird = new Bird();
    // pipes = [];    
};
