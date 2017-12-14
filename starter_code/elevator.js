class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start() {
    setInterval(this.update(), 1000);
   }
  
   stop() { 
     clearInterval(this.start());
   }
  
   update() { 
    this.log();
  }
  
  _passengersEnter() { }
  
  _passengersLeave() { }
  
  floorUp() { 
    if (this.floor < 10) {return this.floor++;}
  }
  
  floorDown() {
    if (this.floor > 0) {return this.floor--;}
   }
  
  call() { }
  
  log() {
    return this.floor;
   }
}

module.exports = Elevator;
