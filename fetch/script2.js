const button = document.querySelector("button");
const input = document.querySelector("#name");
let data = []; 

async function fetchFirstName (name) {
    await fetch(`https://api.agify.io?name=${name}`)
        .then(response => response.json())
        .then(array => (data = array))
        .catch(error => {
            console.log('This is an error !', error)
        })

}

fetchFirstName();

function firstNameDisplay () {
    console.log(data)
    let ageOfFirstName = document.body.appendChild(document.createElement('div'))
    ageOfFirstName.innerText = data.age + " ans"

}

input.addEventListener('input', (e) => {
    fetchFirstName(e.target.value);
})

button.addEventListener("click", firstNameDisplay)

