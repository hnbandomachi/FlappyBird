function Pipe() {    
    this.xup = w;
    this.yup = 0;
    this.h = floor(random(50, h - 150));
    this.xdow = w;
    this.ydow = this.h + hole;

    this.update = function() {
        this.xup -= 2 + (score/20);
        this.xdow -= 2 + (score/20);

        if (score%20 == 1) frame += 10;
    };

    this.show = function() {
        fill(255)
        rect(this.xup, this.yup, holex, this.h);
        rect(this.xdow, this.ydow, holex, h - this.ydow);

    };

    this.overBackground = function() {
        if (this.xup < -holex) {
            console.log(pipes)
            return true;
        } ;
    };
};