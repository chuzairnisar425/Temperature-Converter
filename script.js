document.addEventListener("DOMContentLoaded", function () {
    const inputTemperature = document.getElementById("inputTemperature");
    const inputScale = document.getElementById("inputScale");
    const outputTemperature = document.getElementById("outputTemperature");
    const outputScale = document.getElementById("outputScale");
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", function () {
        const inputTemp = parseFloat(inputTemperature.value);

        if (isNaN(inputTemp)) {
            alert("Please enter a valid numeric temperature.");
            return;
        }

        let result;
        if (inputScale.value === "celsius" && outputScale.value === "fahrenheit") {
            result = (inputTemp * 9/5) + 32;
        } else if (inputScale.value === "fahrenheit" && outputScale.value === "celsius") {
            result = (inputTemp - 32) * 5/9;
        } else {
            result = inputTemp;
        }

        outputTemperature.value = result.toFixed(2);
    });
});
