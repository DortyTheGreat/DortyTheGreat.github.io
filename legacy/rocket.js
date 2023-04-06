const G = 0.00;
const WindX = 0;
const WindY = 0;
const RotSpeed = 2;
const RocketSpeed = 0.5;

class Rocket {
    constructor(x, y, w, h) {
        this.PosX = x;
        this.PosY = y;
        this.Width = w;
        this.Height = h;

        this.Mass = 10;
        this.Angle = 0;

        this.Velocity;
        this.Acceleration;

        this.SumOfForces;
        this.SumOfRotationalForces = 0;

        this.RotationalAcceleration = 0;
        this.RotationVelocity = 0;

        this.Edges = [];

    }

    UpdateEdges() {
        let UpperRight = createVector();
        let UpperLeft = createVector();
        let DownRight = createVector();
        let DownLeft = createVector();
        const BoxAngle = (this.Angle);
        angleMode(DEGREES);
        UpperRight.x = this.PosX + this.Width / 2 * cos(BoxAngle) - this.Height / 2 * cos(90 + BoxAngle);
        UpperRight.y = this.PosY + (this.Width / 2 * sin(BoxAngle) - this.Height / 2 * sin(90 + BoxAngle));

        UpperLeft.x = this.PosX - this.Width / 2 * cos(BoxAngle) - this.Height / 2 * cos(90 + BoxAngle);
        UpperLeft.y = this.PosY - (this.Width / 2 * sin(BoxAngle) + this.Height / 2 * sin(90 + BoxAngle));

        DownRight.x = this.PosX + this.Width / 2 * cos(BoxAngle) + this.Height / 2 * cos(90 + BoxAngle);
        DownRight.y = this.PosY + (this.Width / 2 * sin(BoxAngle) + this.Height / 2 * sin(90 + BoxAngle));

        DownLeft.x = this.PosX - this.Width / 2 * cos(BoxAngle) + this.Height / 2 * cos(90 + BoxAngle);
        DownLeft.y = this.PosY - (this.Width / 2 * sin(BoxAngle) - this.Height / 2 * sin(90 + BoxAngle));

        this.Edges[0].SetParameters(UpperRight.x, UpperRight.y, UpperLeft.x, UpperLeft.y);
        this.Edges[1].SetParameters(UpperRight.x, UpperRight.y, DownRight.x, DownRight.y);
        this.Edges[2].SetParameters(DownLeft.x, DownLeft.y, DownRight.x, DownRight.y);
        this.Edges[3].SetParameters(DownLeft.x, DownLeft.y, UpperLeft.x, UpperLeft.y);

    }

    SetupRocket() {
        this.SumOfForces = createVector(0, 0);
        this.Acceleration = createVector(0, 0);
        this.Velocity = createVector(0, 0);
        for (let i = 0; i < 4; ++i) {
            let Edge = new Line();
            this.Edges.push(Edge);
        }
    }

    SetAngle(a) {
        this.Angle = a;
    }

    SetCoordinats(x, y) {
        this.PosX = x;
        this.PosY = y;
    }

    SetMass(m) {
        this.Mass = m;
    }

    SetSize(w, h) {
        this.Width = w;
        this.Height = h;
    }

    ApplyGravity() {
        const GravitationalForce = createVector(0, G * this.Mass);
        this.SumOfForces.add(GravitationalForce)
    }

    ApplyForce(Force) {
        this.SumOfForces.add(Force);
    }

    Update() {
		this.PosX += WindX;
		this.PosY += WindY;
        this.Acceleration = this.SumOfForces.div(this.Mass);
        this.Velocity.add(this.Acceleration);
        this.PosX += this.Velocity.x;
        this.PosY += this.Velocity.y;
        this.SumOfRotationalForces += this.RotationVelocity * -0.3;
        this.RotationalAcceleration = this.SumOfRotationalForces / this.Mass;
        this.RotationVelocity += this.RotationalAcceleration;
        this.Angle += this.RotationVelocity;
        this.SumOfRotationalForces = 0;
        this.UpdateEdges();
    }

    Control() {
        if (keyIsDown(87)) {
            const BoxAngle = (this.Angle);
            angleMode(DEGREES);
            const ThrustForce = createVector(sin(BoxAngle) * RocketSpeed, -cos(BoxAngle) * RocketSpeed);
            this.SumOfForces.add(ThrustForce);
        }
        if (keyIsDown(81)) {
            const LeftThrustForce = -RotSpeed;
            this.SumOfRotationalForces += LeftThrustForce;
        }
        if (keyIsDown(69)) {
            const RightThrustForce = RotSpeed;
            this.SumOfRotationalForces += RightThrustForce;
        }
    }

    Render(Color) {
        push();
        if (Color) fill(Color);
        else fill(255);
        translate(this.PosX, this.PosY);
        angleMode(DEGREES);
        rotate(this.Angle);
        rectMode(CENTER);
        translate(0, 0);
        rect(0, 0, this.Width, this.Height);
        pop();
        for (let Edge of this.Edges) {
            Edge.Render();
        }
        fill(127, 207, 255);
        noStroke()
		
		const BoxAngle = (this.Angle);
        angleMode(DEGREES);
		
        circle(this.PosX + 40*sin(BoxAngle), this.PosY -  40*cos(BoxAngle) , 25);
    }
}
