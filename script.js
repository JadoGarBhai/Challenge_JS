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
    case 66:
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

function twoNumber(n) {
  if (n >= 10 && n <= 99){

  }
};

console.log(twoNumber(56));

function case3(n) {
    if (n >= 100 && n <= 999) {
        let a = n.toString();
        let result = `${case1(parseInt(a.charAt(0)))} hundered ${case2(parseInt(a.substring(1)))}`;
        return result;
    }
};

console.log(case3(100));