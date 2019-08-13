function Pipe() {    
    this.speed = 2;
    this.xup = w;
    this.yup = 0;
    this.h = floor(random(0.25*h, 0.65*h));
    this.xdow = w;
    this.ydow = this.h + hole;

    this.update = function() {
        this.xup -= this.speed;
        this.xdow -= this.speed;       
        
    };

    this.show = function() {
        fill(255)
        rect(this.xup, this.yup, holex, this.h);
        rect(this.xdow, this.ydow, holex, h - this.ydow);

    };

    this.overBackground = function() {
        if (this.xup < -holex) {
            check = true;
            return true;
        } ;
    };
};