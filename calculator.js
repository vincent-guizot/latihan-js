// Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

// Example:

// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
// Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right

const Calculator = function () {
    // do code here
    this.evaluate = (param) => {
        const stringArray = param.split(" ")
        console.log(stringArray)
        for (let i = 0; i < stringArray.length; i++) {
            switch (stringArray[i]) {
                case '+':
                    break;
                case '-':
                    break;
                case '*':
                    break;
                case '/':
                    break;
                default:
                    break
            }
        }
        return eval(param)
    }
};
// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}

const calculate = new Calculator()

Test(calculate.evaluate('127'), 127)

Test(calculate.evaluate('2 + 3'), 5);
Test(calculate.evaluate('2 - 3 - 4'), -5);
Test(calculate.evaluate('10 * 5 / 2'), 25);

console.log("Bonus Test")
Test(calculate.evaluate('10 + 6 / 2'), 13);