const { performance } = require('perf_hooks');

// SETUP 🏁

let iterations = 1e6;

const a = 1;
const b = 2;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
  let point = new Point(2, 3);
  delete point.y;

  JSON.stringify(point);
}

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');

const [ measure ] = performance.getEntriesByName('My Special Benchmark');
console.log(measure);
