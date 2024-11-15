let form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let preference = document.getElementById('preference').value;

    if (preference === "veg") {
        document.getElementById("exercise-info-edit").innerHTML = `<span><h3>Hi,&nbsp;${name} ,You can consume the following:<br>Proteins: Moong dal, chana, tofu, paneer, and sprouted pulses (like sprouted chana and moong). <br>
Complex Carbs: Brown rice, bajra (pearl millet), jowar (sorghum), and whole wheat rotis. <br>
Vegetables & Fruits: A variety like carrots, beetroots, bell peppers, tomatoes, and seasonal fruits. <br>
Iron: Jaggery and dates with a source of Vitamin C (like lemon or amla juice) for better absorption.</h3></span>
<img height="400px" style="float: right;" src="https://cdn.britannica.com/05/114705-050-AEC01213/food-pyramid-meat-animal-products-dietary-vegetarian.jpg" alt="error:">`;


    }
    else if (preference = "non-veg") {
        document.getElementById("exercise-info-edit").innerHTML = `<span><h3>Hi,&nbsp;${name} ,You can consume the following:<br>Eggs, chicken breast, or fish 3-4 times weekly.<br>
Combine with rice or rotis and a lot of veggies to cover micronutrients. <br>
General Tip: Ensure high-protein snacks to support energy needs, such as nuts, fruit with yogurt, or egg sandwiches.</h3></span>
<img height="400px" style="float: right;" src="https://thesaltandsweet.com/wp-content/uploads/2022/11/wp-1668537915712-540x720.jpg" alt="error:">`;
    }
    else {
        document.getElementById("exercise-info-edit").innerHTML = "Sorry there was some problem fetching data. Please try again!";


    }
})