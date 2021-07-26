let display = document.getElementById("display");
let btns = document.querySelectorAll('.c-btn');
let displayValue = "";
let lastTarget;
let str = "+-*/%";
let str2 = "+-*/%x²√=";
let str3 = "374243454713";
let body = document.getElementsByTagName("body");
console.log(screen.height);
body.forEach(i => {
    i.style.height = (screen.height + "px");
});

// what will happen when we press enter
display.addEventListener("keypress", keyPressEvent, false);

// in button click what will happen
btns.forEach(i => {
    i.addEventListener("click", clickEvent);
});


function keyPressEvent(event) {
    let key = event.keyCode;
    if ((lastTarget == "=" || lastTarget == "13") && str3.indexOf(key) < 0) {
        displayValue = "";
        display.value = "";
    }
    if (key == "13") {
        display.value = eval(display.value);
        displayValue = display.value.toString();
        lastTarget = "13";
    }
    else {
        lastTarget = key;
    }
}

function clickEvent(event) {
    let btnText = event.target.innerText;
    if (btnText == "x") btnText = "*";

    if ((lastTarget == "=" || lastTarget == "13") && str2.indexOf(btnText) < 0) {
        displayValue = "";
    }
    else if ((lastTarget == "x²" || lastTarget == "√") && str2.indexOf(btnText) < 0) {
        displayValue = "";
    }
    else if ((str.indexOf(lastTarget)) >= 0 && (str.indexOf(btnText)) >= 0) {
        displayValue = displayValue.slice(0, displayValue.length - 1);
    }


    if (btnText === "AC") {
        display.value = "";
        displayValue = "";
        lastTarget = btnText;
        btnText = "";
    }
    else if (btnText === "C") {
        displayValue = displayValue.slice(0, displayValue.length - 1);
        display.value = displayValue;
        lastTarget = btnText;
    }
    else if (btnText === "=") {
        display.value = eval(displayValue);
        displayValue = display.value.toString();
        lastTarget = btnText;
    }
    else if (btnText === "x²") {
        let num = eval(displayValue);
        num *= num;
        display.value = num;
        displayValue = display.value.toString();
        lastTarget = btnText;
    }
    else if (btnText === "√") {
        num = eval(display.value);
        num = Math.sqrt(num);
        display.value = num;
        displayValue = display.value.toString();
        lastTarget = btnText;
    }
    else {
        // console.log("btn =", btnText);
        displayValue += btnText
        display.value = displayValue;
        lastTarget = btnText;
    }

}