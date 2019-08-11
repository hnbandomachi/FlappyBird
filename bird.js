function keyPressed() {
    return true;
}

function Bird() {
    this.x = 70;
    this.y = 70;
    this.v = 0;
    this.a = 0.4;
    this.size = 15;

    this.update = function() {
        this.v += this.a;
        this.y += this.v;                
    };

    this.dead = function(pipes) {
        if (this.y >= h || this.y < 0) {  
            return true;
        }; 
        for (let i = 0; i < pipes.length; i++) {              
            if (this.x >= pipes[i].xup - 15 && this.x < pipes[i].xup + holex) {
                if (this.y < pipes[i].h) {
                    return true;
                }
                else if (this.y > hole + pipes[i].h) {
                    return true;
                }
                else {
                    let h1 = this.y - pipes[i].h;
                    let h2 = hole - h1;
                    if (h1 < this.size || h2 < this.size) {
                        return true;
                    }
                };

            };
        };


    };

    this.flap = function() {
        if (keyIsPressed === true) {
            this.v = -8;
            keyIsPressed = false;
        };
    };

    this.show = function() {
        fill(244, 5, 37)
        ellipse(this.x, this.y, this.size*2, this.size*2);
        fill(63, 76, 214);
        text(score, w - 100, 50);
    };

    this.overcome = function() {
        if (pipes[score].xup <= holex - this.size/2) {
            return true;
        }
    };
};