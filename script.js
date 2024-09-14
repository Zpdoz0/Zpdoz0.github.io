const cartel = document.querySelector(".title");
const categorias = [...document.querySelectorAll(".names")];
const foc = [...document.querySelectorAll(".names_focus")]

cartel.addEventListener("click", () => {
    cartel.classList.add("cartel");
    setTimeout(() => {
        cartel.classList.remove("cartel");
    }, 500);
});

categorias.forEach(names => {
    names.addEventListener("click", () => {
        categorias.forEach (names_focus => {
            names_focus.classList.remove("names_focus");
        });
        names.classList.add("names_focus");
    });
});