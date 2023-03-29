// create a object for bird
function Bird(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.gravity = 0;

    //create a bird draw method
    this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();
        }
        //create a bird update method

    this.update = function() {

            //    for flying the bird when the bird touch on the floor
            let curve = Math.sin(angle) * 5;


            if (this.y + this.r >= canvas.height - 100) {
                this.y += curve; //if the bird touch on the floor, by using sin curve, the bird will fly
                this.gravity = curve;
            } else {
                this.gravity = 5 * 0.9; //0.9 is fraction
                this.y += this.gravity;
            }
            if (spacePressed) {
                this.flap(curve); //if space is pressed then fly up the bird
            }

            this.draw();
        }
        // this function will help the bird to fly
    this.flap = function(curve) {
        if (this.y + this.r <= 50) {
            this.y = curve;
        } else {

            this.y -= 15 * 0.9 + curve;
        }
    }
}

let x = 50;
let y = innerHeight / 2;
let r = 10;
let bird = new Bird(x, y, r);