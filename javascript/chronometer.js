class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;}
    , 1000);
  }

  getMinutes() {
    let minutesCount = Math.floor(this.currentTime / 60);
    return minutesCount;
  }

  getSeconds() {
    let secondsCount = Math.floor(this.currentTime % 60);
    return secondsCount;
  }

  computeTwoDigitNumber(value) {
    let twoDigits = value.toString();
    if (twoDigits.length < 2) {
      twoDigits = "0" + value.toString();
    }
    return twoDigits;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
