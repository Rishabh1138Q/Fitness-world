let form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    if (age <= 17) {
        document.getElementById("exercise-info-edit").innerHTML = "Hi, " + name + `<p> You should do the following exercises: <br>
1. running <br>
2. cycling <br>
3. swimming <br>
4. group fitness classes <br>
5. playing sport</p>`;

        // document.getElementById("final-image").innerHTML = '<img src="https://static.toiimg.com/thumb/85201540.cms?width=680&height=512&imgsize=989394" alt="image">'

    }
    else if (age <= 50) {
        document.getElementById("exercise-info-edit").innerHTML = `<span><h3>Hi, ${name} You should do the following exercises: <br>
For Chest: <br> <br>
1. Incline push up <br>
2. Pushup <br>
3. Cable crossover <br>
4. Chest dip <br>
5. Resistance band pullover <br>
6. Pushup <br> <br>
For Abs: <br>
1. The basic crunch <br>
2. The ab rocker <br>
3. The straight-leg sit-up <br>
4. The seated twist <br> <br>
For Legs: <br>
1. Back squat <br>
2. Front squat <br>
3. Walking lunges <br>
4. Reverse lunge <br></span></h3>`;

        // document.getElementById("final-image").innerHTML = '<img src="https://assets.gqindia.com/photos/61aefc5410327c06168d4441/master/pass/top-image%20(12).jpg" alt="image">'
    }
    else if (age <= 99999999999) {
        document.getElementById("exercise-info-edit").innerHTML = `<span><h3>Hi, ${name}You should do the following exercises: <br>
1. Yoga <br>
2. Walking <br>
jogging</span></h3>`;

        // document.getElementById("final-image").innerHTML = '<img src="https://media.istockphoto.com/id/488565460/photo/athletic-man-doing-running-exercise-at-the-park.jpg?s=612x612&w=0&k=20&c=fdOVQ9hE3_QJ9aQo3zSXbH9imDdAs2escPPfP74yEwQ=" alt="image">'
    }
    else {
        document.getElementById("exercise-info-edit").innerHTML = "Sorry there was some problem fetching data. Please try again!";

        // document.getElementById("final-image").innerHTML = '<a href="https://ibb.co/MNBXkx2"><img src="https://i.ibb.co/j4JpkP6/glitch-text-effect-white-background-screen-glitch-vhs-effect-data-access-error-634443-8.jpg" alt="image"></a>'

    }
})