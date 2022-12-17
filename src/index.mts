export class Sample {
  constructor() {
    console.log('Sample constructor');
  }

  mySqrt(n: number) {
    return Math.sqrt(n);
  }

  withFn(n: number) {
    const fn = () => this.mySqrt(n);
    return fn();
  }
}