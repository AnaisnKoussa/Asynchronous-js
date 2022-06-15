const button = document.querySelector("button");
let firstName = document.querySelector("#name");

let url = `https://api.agify.io?name=anais`

button.addEventListener("click", () => {
    fetch(url)
        .then(response => response.text())
        .then(text => {
            let div = document.body.appendChild(document.createElement('div'))
            div.innerText = text
        })
        .catch(error => {
            console.log('This is an error !', error)
        })
})