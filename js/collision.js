//collision detection
function collisionDetection() {

    for (let i = 0; i < obstacleArr.length; i++) {

        if (bird.x + bird.r < obstacleArr[i].x + obstacleArr[i].width &&
            bird.x + bird.r > obstacleArr[i].x &&
            ((bird.y + bird.r >= canvas.height - obstacleArr[i].top) ||
                (bird.y < bird.r + obstacleArr[i].top))) {
            ctx.font = "30px Georgia";

            ctx.fillText("Your Score: " + score, canvas.width / 2.5, canvas.height / 2);
            // ctx.strokeText()
            return true;
        }
    }
}