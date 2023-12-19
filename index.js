let cont = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".button")

console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        if (e.currentTarget.classList.value == "button decrease") {
            cont--;
        }
        else if (e.currentTarget.classList.value == "button increase") {
            cont++;
        } else {
            cont = 0;
        }
        if (cont > 0) {
            value.style.color = "green";
        }

        if (cont < 0) {
            value.style.color = "red";
        }
        if(cont==0){
            value.style.color = "black";
        }
        value.textContent = cont;
    })
});