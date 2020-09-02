function Main() {
    let x = 10;
    let y = 15;

    function add() {

        console.log(`The Value of ${y} + ${x} = ${(x+y)}`);
    }

    function substract() {
        console.log(`The Value of ${y} - ${x} = ${(x-y)}`);

    }

    function multiply() {
        console.log(`The Value of ${y} * ${x} = ${(x*y)}`);

    }

    function divide() {
        console.log(`The Value of ${y} / ${x} = ${(x/y)}`);

    }

    add();
    substract();
    multiply();
    divide();


}

Main();