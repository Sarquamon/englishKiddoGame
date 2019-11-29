import React from "react";
import {Link, Redirect} from "react-router-dom";

const Sketch = property => {
  let square;
  let circle;
  let square2;
  let circle2;

  property.setup = () => {
    property.createCanvas(400, 300);

    //circulos
    circle = new Circle(
      property.random(property.width),
      property.random(property.height),
      property.random(10, 50),
      255,
      80,
      90
    );

    circle2 = new Circle(
      property.random(property.width),
      property.random(property.height),
      property.random(10, 50),
      10,
      255,
      100
    );

    //cuadrados
    square = new Square(
      property.random(property.width),
      property.random(property.height),
      property.random(40, 50),
      property.random(40, 50),
      0,
      255,
      0
    );

    square2 = new Square(
      property.random(property.width),
      property.random(property.height),
      property.random(40, 50),
      property.random(40, 50),
      255,
      255,
      0
    );
  };

  property.mousePressed = () => {
    square.clicked(property.mouseX, property.mouseY);
    circle.clicked(property.mouseX, property.mouseY);
    circle2.clicked(property.mouseX, property.mouseY);
    square2.clicked(property.mouseX, property.mouseY);
  };

  property.draw = () => {
    property.background(25, 255, 255);

    circle.show();

    square.show();

    circle2.show();

    square2.show();
  };

  class Square {
    constructor(x, y, w, h, colR, colG, colB) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.colorR = colR;
      this.colorG = colG;
      this.colorB = colB;
    }

    clicked(mousePosX, mousePosY) {
      let d = property.dist(mousePosX, mousePosY, this.x, this.y);
      if (d < this.w && d < this.h) {
        {
          console.log("square");

          return <Link to="/test/" />;
        }
      }
    }

    show() {
      property.stroke(0);
      property.strokeWeight(3);
      property.fill(this.colorR, this.colorG, this.colorB);
      property.rect(this.x, this.y, this.w, this.h);
    }
  }

  class Circle {
    constructor(x, y, r, colR, colG, colB) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.colorR = colR;
      this.colorG = colG;
      this.colorB = colB;
    }

    clicked(mousePosX, mousePosY) {
      let d = property.dist(mousePosX, mousePosY, this.x, this.y);
      if (d < this.r) {
        console.log("hola2");
      }
    }

    show() {
      property.stroke(0);
      property.strokeWeight(3);
      property.fill(this.colorR, this.colorG, this.colorB);
      property.ellipse(this.x, this.y, this.r);
    }
  }
};

export default Sketch;
