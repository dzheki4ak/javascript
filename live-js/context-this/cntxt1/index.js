/*
const timer = {
     secondsPassed: 0,
     minsPassed: 0,

     startTimer() {
          setInterval(() => {
               this.secondsPassed +=1
               if(this.secondsPassed > 59) {
                    this.secondsPassed = 0;
                    this.minsPassed +=1
               }
          }, 1000);
          setInterval(() => {
               this.minsPassed +=1
          }, 60000);
     },

     stopTimer() {
          clearInterval();
     },

     getTime() {
          let seconds = this.secondsPassed;
          let mins = this.minsPassed;
          if(mins.toString().length < 2) {
               mins = `0${mins}`
          };
          if(seconds.toString().length < 2) {
               seconds = `0${seconds}`;
          };
          return `${mins}:${seconds}`
     },

     resetTimer() {
          this.secondsPassed = 0;
          this.minsPassed = 0;
     },

}
*/

/*-------------------------------------------------------*/
// Fix context - bind, () =>.
// SetInterval
// In: function + interval (ms)
// Out: Setinterval ID functionResult ID

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  /*-------*/
  startTimer() {
    // in: func, num
    // out: num
     this.timerId = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
    }, 1000);
  },

  /*-------*/
  stopTimer() {
    clearInterval(this.timerId);
  },

  getTime() {
     const seconds = this.secondsPassed;
     const mins = this.minsPassed;
     return `${mins}:0${seconds}`
  },

  resetTimer() {
     this.secondsPassed = 0;
     this.minsPassed = 0;
  },
};

timer.startTimer();
