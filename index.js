var bird, bg, score = 0, frame = 100, speed = 2;
var pipes = [], check = true;
const w = 600, h = 600, hole = 75, holex = 40;


function setup() { 
    createCanvas(w, h);
    textSize(25);
    bg = new Background();
    bird = new Bird();
    pipes.push(new Pipe());
};

function draw() {
    background(0, 0, 0);    

    if (frameCount < 400) {
        if (frameCount%100 == 0) {
            pipes.push(new Pipe());
        };                
    };

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].update();
        if (pipes[i].overBackground()) {
            pipes.splice(0, 1);
            if (frameCount > 400) {
                pipes.push(new Pipe());
            };

        };
        pipes[i].show();
    };

    bird.flap();
    bird.update();    
    bird.show();
    if (bird.dead(pipes)) reset();
    
};

function reset() {
    frameRate(0);
};