document.addEventListener("DOMContentLoaded", () => {
    let inputField = document.querySelector(".input");
    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let buttonText = button.innerText;

            if (buttonText === "=") {
                try {
                    inputField.value = eval(inputField.value);
                } catch {
                    inputField.value = "Error";
                }
            } else if (buttonText === "AC") {
                inputField.value = "";
            } else if (buttonText === "DEL") {
                inputField.value = inputField.value.slice(0, -1);
            } else {
                let lastChar = inputField.value.slice(-1);
                let operators = ["+", "-", "*", "/", "%"];

                if (operators.includes(buttonText) && operators.includes(lastChar)) {
                    inputField.value = inputField.value.slice(0, -1) + buttonText;
                } else {
                    inputField.value += buttonText;
                }
            }
        });
    });
});

