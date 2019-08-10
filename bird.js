function keyPressed() {
    return true;
}

function Bird() {
    this.x = 70;
    this.y = 0;
    this.v = 0;
    this.a = 0.4;
    this.size = 10;

    this.update = function() {
        this.v += this.a;
        this.y += this.v;
                
    };

    this.dead = function(pipes) {
        if (this.y >= h) {  
            // console.log('dead1')          
            return true;
        }; 
        for (let i = 0; i < pipes.length; i++) {            
            // if (this.x > pipes[i].xup &&
            //     this.x < (pipes[i].xup + pipes[i].w) &&
            //     this.y > 0 && this.y < pipes[i].h ||
            //     this.y > pipes[i].ydow) {
            //         console.log('dead2')
            //         return true;
            //     };
            
            if (this.x > pipes[i].xup && this.x < (pipes[i].xup+pipes[i].w)) {
                if (this.y < pipes[i].h || this.y >(pipes[i].h + hole)) {
                    return true;
                };
            };
        };


    };

    this.flap = function() {
        if (keyIsPressed === true) {
            this.v = -8;
            console.log('Flap')
            keyIsPressed = false;
        };
    };

    this.show = function() {
        ellipse(this.x, this.y, this.size, this.size)
    };
};