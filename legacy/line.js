class Line {
    constructor() {
        this.Start = createVector();
        this.End = createVector();
    }

    SetParameters(x1, y1, x2, y2) {
        this.Start.x = x1;
        this.Start.y = y1;
        this.End.x = x2;
        this.End.y = y2;
    }

    Render() {
        push();
        stroke(128, 128, 128);
        strokeWeight(2);
        line(this.Start.x, this.Start.y, this.End.x, this.End.y);
        pop();
    }
}
