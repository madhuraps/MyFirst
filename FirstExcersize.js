add = (x, y) => x + y;
substract = (x, y) => x - y;
multiply = (x, y) => x * y;
divide = (x, y) => x / y;


function consoleOutput(x, operator, y, finalValue) {
    const line1 = "The Value of";
    const line2 = "=";

    console.log(`${line1} ${x} ${operator} ${y} ${line2} ${finalValue}`);
}

function finalResult(x, y) {
    consoleOutput(x, "+", y, add(x, y));
    consoleOutput(x, "-", y, substract(x, y));
    consoleOutput(x, "-", y, multiply(x, y));
    consoleOutput(x, "-", y, divide(x, y));
}

finalResult(20, 30); // This is where the program runs.