
class Calculator {
  constructor() {
    this.ans;
    this.currentWorkingArea = '';
    this.currentDisplay = '';
    this.previous = '';
    this.operator = null;
    this.operatorClicked = false;
    document.getElementById('display').innerText = this.currentDisplay || '0';
  }

  clear(){
    this.currentDisplay = '';
    this.ans = null;
    this.previous = '';
    this.currentWorkingArea = '';
    document.getElementById('display').innerText = '';
    document.getElementById('workingArea').innerText = '';
  }

  append(number){
    this.currentDisplay = `${this.currentDisplay}${number}`
    this.currentWorkingArea = `${this.currentWorkingArea}${number}`
    document.getElementById('display').innerText = this.currentDisplay
    document.getElementById('workingArea').innerText = this.currentWorkingArea;

  }

  appendWA(x) {
    this.currentWorkingArea = `${this.currentWorkingArea}${x}`;
    document.getElementById('workingArea').innerText = this.currentWorkingArea;
  }

  dot(){
    if(this.currentDisplay.indexOf('.') === -1){
      this.append('.')
    }
  }

  compute() {
      this.previous = this.currentDisplay;
      this.operatorClicked = true;
      this.currentDisplay = '';
      document.getElementById('display').innerText = '';
  }
  divide() {
    this.operator = (a, b) => a / b;
    this.compute();
  }

  multiply() {
    this.operator = (a, b) => a * b;
    this.compute();
  }

  subtract() {
    this.operator = (a, b) => a - b;
    this.compute();
  }

  add() {
    this.operator = (a, b) => a + b;
    this.compute();
  }

  equals(){
    if(this.ans === null && this.currentDisplay === ''){
      this.currentWorkingArea === '';
      this.currentDisplay === '';

    }else if(this.ans !== null && this.currentDisplay !== ''){
      this.ans = this.operator(parseFloat(this.previous), parseFloat(this.currentDisplay));
      this.currentWorkingArea = `${this.previous}  ${this.currentDisplay} = ${this.ans}`
      this.currentDisplay = `${this.ans}`;
      this.previous = `${this.ans}`;
    }else{
    this.ans = this.operator(parseFloat(this.previous), parseFloat(this.currentDisplay));
    this.currentDisplay = `${this.ans}`;
    this.previous = `${this.ans}`;
    }
    document.getElementById('display').innerText = this.currentDisplay;
    document.getElementById('workingArea').innerText = this.currentWorkingArea;

  }
}

let calc = new Calculator();
