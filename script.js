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
    }
};

function case3(n) {
    if (n.length === 3) {
        let a = n.toString();
        for (let index = 0; index < a.length; index++) {
            let b = case1(a.charAt(0)) + "hundred" + case2(a.substring(1));
            return b;
        }
    }
}

console.log(case3(115));