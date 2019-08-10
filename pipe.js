function Pipe() {    
    this.w = 40;
    this.xup = w;
    this.yup = 0;
    this.h = floor(random(50, h - 150));
    this.xdow = w;
    this.ydow = this.h + hole;

    this.update = function () {
        this.xup -= 2;
        this.xdow -= 2;
    };

    this.show = function() {
        rect(this.xup, this.yup, this.w, this.h);
        rect(this.xdow, this.ydow, this.w, h - this.ydow);

    };
};