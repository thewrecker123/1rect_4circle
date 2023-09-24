function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);

}

function draw() {
    stroke("green");
    strokeWeight(10);
    noFill();
    rect(50, 35, 500, 300);
    fill("red");
    strokeWeight(2);
    circle(50, 30, 40);
    circle(550, 30, 40);
    circle(50, 340, 40);
    circle(550, 340, 40);

}

function take_snapshot(){
    save('student_name.png');
}


