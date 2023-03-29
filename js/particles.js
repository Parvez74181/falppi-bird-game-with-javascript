let speed = {
    x: 2.5,
    y: (Math.random() + 1)
}
class Particle {
    constructor() {
        this.x = bird.x;
        this.y = bird.y;
        this.r = Math.random() * 2 + 3;

    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(" + hue * 0.5 + ",50%,50%)"
        ctx.fill();
    }

    update() {
        this.x -= speed.x;
        this.y -= speed.y;
        this.draw();
    }
}
let particleArr = [];

function particleHandle() {
    particleArr.unshift(new Particle())
    for (i = 0; i < particleArr.length; i++) {
        particleArr[i].update();
    }
    if (particleArr.length > 50) {
        for (i = 0; i < particleArr.length; i++) {
            particleArr.pop(particleArr[i]);
        }
    }
}