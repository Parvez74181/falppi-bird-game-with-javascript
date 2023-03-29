//grabe the canvas element

let canvas = document.querySelector("canvas");

// get the canvas context "2d"
let ctx = canvas.getContext("2d");
canvas.height = innerHeight / 1.2;
canvas.width = innerWidth / 1.2;
let angle = 0;
let score = 0;
let hue = 0;
let animationId;

function animate() {

    animationId = requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeText(score, canvas.width / 1.5, 30);
    if (collisionDetection()) {
        cancelAnimationFrame(animationId)
    }

    bird.update();
    obstacleHandle();
    collisionDetection();
    particleHandle();


    ctx.font = "40px Georgia"
    ctx.strokeStyle = 'red';
    // ctx.fillText(score, canvas.width / 1.5, 30);

    angle += 0.3;
    frame++;
    hue++;
    // score++;
}

requestAnimationFrame(animate);