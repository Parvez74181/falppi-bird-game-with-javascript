function Obstacle() {
    this.extraHeightForObstacle = 120;
    this.x = canvas.width;
    this.y = 0;
    this.width = 25;
    this.condition = false;

    this.top = (Math.random() * canvas.height / 5) + this.extraHeightForObstacle;
    this.bottom = (Math.random() * canvas.height / 5) + this.extraHeightForObstacle;

    this.draw = function() {

        ctx.rect(this.x, this.y, this.width, this.top);
        ctx.rect(this.x + 5, canvas.height - this.top, this.width, this.top);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
    }
    this.update = function() {

        this.x -= 5;
        if (!this.condition && this.x < bird.x) {
            this.condition = true;
            score++;
            console.log(!this.condition)
        }
        this.draw();
    }

}


let obstacleArr = [];
let frame = 0;

function obstacleHandle() {
    if (frame % 40 === 0) {

        obstacleArr.unshift(new Obstacle());
    }
    for (i = 0; i < obstacleArr.length; i++) {
        obstacleArr[i].update();
    }
    if (obstacleArr.length > 20) {
        for (let i = 0; i < obstacleArr.length; i++) {
            obstacleArr.pop(obstacleArr[i]);

        }
    }
}