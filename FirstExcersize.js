function finalResult(value1, value2) {

    let x = value1;
    let y = value2;


    consoleOutput(x, "+", y, add(x, y));
    consoleOutput(x, "-", y, substract(x, y));
    consoleOutput(x, "-", y, multiply(x, y));
    consoleOutput(x, "-", y, divide(x, y));

}

function add(x, y) {

    return x + y;

}

function substract(x, y) {

    return x - y;

}

function multiply(x, y) {

    return x * y;

}

function divide(x, y) {

    return x / y;

}

function consoleOutput(x, operator, y, finalValue) {
    const line1 = "The Value of";
    const line2 = "=";

    console.log(`${line1} ${x} ${operator} ${y} ${line2} ${finalValue}`);
}

finalResult(20, 30);