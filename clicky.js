window.onload = function() {
    let counter = document.getElementById("counter")
    let plus = document.getElementById("plus")
    let minus = document.getElementById("minus")

    plus.addEventListener("click", (event) => {
        counter.innerHTML = parseInt(counter.innerHTML, 10) + 1
    })
    
    minus.addEventListener("click", (event) => {
        counter.innerHTML = parseInt(counter.innerHTML, 10) - 1
    })
}