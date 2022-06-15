const button = document.querySelector("button");


button.addEventListener("click", () => {
    let ol = document.body.appendChild(document.createElement('ol'))
    fetch('becode.json')
        .then(response => response.json())
        .then(array => {
            for (let i = 0; i < array.length; i ++) {
                let li = ol.appendChild(document.createElement('li'))
                li.textContent = array[i];
            }    
        })
        .catch(error => {
            console.log('This is an error !', error)
        })
})