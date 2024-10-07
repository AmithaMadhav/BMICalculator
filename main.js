// function bmiOutput(){
//     result=weight/height**2
// }
function bmiOutput() {
    // Get the values from the input fields
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    const result = document.getElementById('result');

    // Calculate BMI
    if (weight > 0 && height > 0) {
        const bmi = (weight / (height ** 2)).toFixed(2); // round to 2 decimal places
        result.textContent = bmi;
    } else {
        result.textContent = 'Invalid input';
    }
}

function clearScreen() {
    // Clear input values
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('age').value = "";
    document.getElementById('result').textContent = "0";

    // Clear selected gender radio buttons
    const genderRadios = document.getElementsByName('gender');
    for (let i = 0; i < genderRadios.length; i++) {
        genderRadios[i].checked = false;
    }
}


