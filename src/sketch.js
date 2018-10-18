const p5 = require('p5');

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(640, 480);
    p.background(200);
  }
  
  p.draw = ()  => {
    p.fill(204, 101, 192, 127);
    p.stroke(127, 63, 120);
  
    // A rectangle
    p.rect(40, 120, 120, 40);
    p.ellipse(240, 240, 80, 80);
  }
}

new p5(sketch);