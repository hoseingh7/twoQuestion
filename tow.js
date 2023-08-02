// class Pedometer {
//   constructor() {
//     this.steps = 0;
//   }

//   increment() {
//     this.steps++;
//   }

//   decrease() {
//     if (this.steps > 0) {
//       this.steps--;
//     }
//   }

//   reset() {
//     this.steps = 0;
//   }

//   read() {
//     return this.steps;
//   }
// }

// // Example usage:
// const pedometer = new Pedometer();
// pedometer.increment();
// pedometer.increment();
// pedometer.increment();
// console.log(pedometer.read()); // Output: 3

// pedometer.decrease();
// console.log(pedometer.read()); // Output: 2

// pedometer.reset();
// console.log(pedometer.read()); // Output: 0

class Pedometer {
  constructor() {
    this.steps = 10;
  }

  increment() {
    this.steps++;
    alert("Step incremented.");
  }

  decrease() {
    if (this.steps > 0) {
      this.steps--;
      alert("Step decreased.");
    } else {
      alert("Step count cannot be negative.");
    }
  }

  reset() {
    this.steps = 0;
    alert("Step counter reset.");
  }

  read() {
    alert("Current steps: " + this.steps);
  }
}

// Example usage:
const pedometer = new Pedometer();

while (true) {
  const input = prompt(
    "Enter your choice:\n1 - Increment\n2 - Decrease\n3 - Reset\n4 - Read\n0 - Exit"
  );

  switch (Number(input)) {
    case 0:
      alert("Exiting...");
      // You can add any cleanup or save operations here if needed.
      // For simplicity, we'll just break out of the loop.
      break;
    case 1:
      pedometer.increment();
      break;
    case 2:
      pedometer.decrease();
      break;
    case 3:
      pedometer.reset();
      break;
    case 4:
      pedometer.read();
      break;
    default:
      alert("Invalid choice. Try again.");
  }

  if (input === "0") {
    break;
  }
}
