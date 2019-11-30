/* eslint-disable no-console */
/* eslint-disable max-classes-per-file  */
interface Draw {
  draw: () => void;
}

class Button implements Draw {
  width: number;

  height: number;

  label: string;

  constructor(width: number, height: number, label: string) {
    this.width = width;
    this.height = height;
    this.label = label;
  }

  draw(): void {
    console.log(`Draw Button ${this.label}`);
  }
}

class SelectBox implements Draw {
  width: number;

  height: number;

  options: string[];

  constructor(width: number, height: number, options: string[]) {
    this.width = width;
    this.height = height;
    this.options = options;
  }

  draw(): void {
    console.log(`Draw SelectBox ${this.width} x ${this.height}`);
  }
}

class MyScreen {
  components: Draw[];

  constructor(components: Draw[]) {
    this.components = components;
  }

  run(): void {
    this.components.forEach(component => component.draw());
  }
}

const myScreen = new MyScreen([
  new SelectBox(75, 10, ['Yes', 'Maybe', 'No']),
  new Button(50, 10, 'OK'),
]);
myScreen.run();
