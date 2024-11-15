function calculateBMI() {
    // Get height and weight values from the form
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Check if both height and weight are provided
    if (!height || !weight) {
        document.getElementById('bmi-result').textContent = "Please enter both height and weight.";
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Low (Underweight)';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
    } else {
        category = 'High (Overweight)';
    }

    // Display the result
    document.getElementById('exercise-info-edit').innerHTML = `Your BMI is ${bmiRounded}, which is considered ${category}.`;
}






let form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let name = document.getElementById('name').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if (!height || !weight) {
        document.getElementById('exercise-info-edit').innerHTML = "<span>Please enter both height and weight.</span>";
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);

    // Determine BMI category
    let category = null;
    if (bmi < 18.5) {
        category = 'Low (Underweight)';

    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
    } else {
        category = 'High (Overweight)';
    }
document.getElementById("exercise-info-edit").innerHTML = `<span><h3>${name} Your BMI is ${category}</span></h3>`
    }
)

