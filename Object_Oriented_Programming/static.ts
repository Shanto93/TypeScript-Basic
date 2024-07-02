class Counter {
  static count: number = 0;

  static Increment(): number {
    return (Counter.count = Counter.count + 1);
  }
  static Decrement(): number {
    return (Counter.count = Counter.count - 1);
  }
}

// const instance1 = new Counter();
// const instance2 = new Counter();

console.log(Counter.Increment());
console.log(Counter.Decrement());
