function moveRandomEl(elm) {
    elm.style.position = "absolute"; // Asegurar que sea movible
    elm.style.top = Math.floor(Math.random() * 90) + "%";
    elm.style.left = Math.floor(Math.random() * 90) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el enlace intente navegar
    moveRandomEl(e.target);
});