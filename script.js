class Calculator {
    constructor(outputElement) {
        this.outputElement = outputElement;
        this.clear();
    }

    display(value) {
        if (this.outputElement.value === "Error") {
            this.outputElement.value = "";
        }
        this.outputElement.value += value;
    }

    clear() {
        this.outputElement.value = '';
    }

    delete() {
        this.outputElement.value = this.outputElement.value.slice(0, -1);
    }

    calculate() {
        let expression = this.outputElement.value;
        try {
            this.outputElement.value = eval(expression);
        } catch (error) {
            this.outputElement.value = "Error";
        }
    }
}

// Initialize calculator
const outputScreen = document.getElementById("output-screen");
const calculator = new Calculator(outputScreen);