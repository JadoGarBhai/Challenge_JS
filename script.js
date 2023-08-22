// Case No: 01

// input = 1.
// output = One.

// SOLUTION:

function case1(n) {
  switch (n) {
    case 0:
      return "zero";
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
  }
};

function case2(n) {
  switch (n) {
    case 10:
        return "ten"
    case 11:
      return "eleven";
    case 12:
      return "tevele";
    case 13:
      return "thirteen";
    case 14:
      return "fourteen";
    case 15:
      return "fifteen";
    case 16:
      return "sixteen";
    case 17:
      return "seventeen";
    case 18:
      return "eighteen";
    case 19:
      return "nineteen";
    case 20:
        return "twenty"
    case 30:
      return "thirty"
    case 40:
      return "fourty"
    case 50:
      return "fifty"
    case 60:
      return "sixty"
    case 70:
      return "seventy"
    case 80:
      return "eighty"
    case 90:
      return "ninty"
  }
};


function oneNumber(n) {
  return case1(n);
};

// function calculate() {
//   let input = parseInt(document.getElementById('screen').value);
//   let answer;

//   try {
//       answer = oneNumber(input);
//       document.getElementById('result').value = answer;
//   } catch (error) {
//       console.log('error: ' + error);
//       document.getElementById('result').value = 'Error';
//   }
// };
// console.log(oneNumber(5));

// function twoNumber(n) {
//   if (n >= 10 && n <= 99){

//   }
// };

// console.log(twoNumber(56));