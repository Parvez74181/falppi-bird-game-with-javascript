let spacePressed = false;

addEventListener("keydown", function(e) {
    if (e.keyCode == "32") { //32 == spaceBar 
        spacePressed = true;
    }
});



addEventListener("keyup", function(e) {
    if (e.keyCode == "32") { //32 == spaceBar 
        spacePressed = false;

    }
});

addEventListener("resize", function() {
    canvas.height = innerHeight / 1.2;
    canvas.width = innerWidth / 1.2;
})