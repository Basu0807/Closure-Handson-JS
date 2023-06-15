// question-1
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// question-2

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count); 
})();

// question-3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, 1000);
  }

//   question-4

function Sum(a){
    function result(b){
        return a*b;
        }
        return result
}
let resultVar= Sum(10);
let res= resultVar(20);
console.log(res);

// question-5
function outerfunction() {
    let counter = 0; 
  
    function increaseCounter() {
      counter++; 
      console.log(counter);
    }
  
    return increaseCounter; 
  }
  
 let counterFunc = outerfunction();
  
  counterFunc(); 
  counterFunc(); 
  counterFunc(); 
  counterFunc(); 
  counterFunc();

//   question-6

var ab = 12;
        (function () {
          alert(ab);
        })();

// question-7
ba = 10;
        var x = (function () {
          var ba = 12;
          return function () {
            alert(ba);
          };
        })();
        x();

        // questiion-8
        