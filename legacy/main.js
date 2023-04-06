rocket = new Rocket(200, 200, 35, 125);

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
