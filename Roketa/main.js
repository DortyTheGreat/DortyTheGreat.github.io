rocket = new Rocket(200, 200, 10, 30);

function setup() {
    createCanvas(windowWidth, windowHeight);
    rocket.SetupRocket();
}

function draw() {
    background(220);
    rocket.ApplyGravity();
    rocket.Control();
    rocket.Update();
    rocket.Render(172);
}
