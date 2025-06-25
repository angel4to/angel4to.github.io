const contenedor = document.getElementById("contenedor-globos");

function crearGlobo() {
    const globo = document.createElement("div");
    globo.classList.add("balloon");

    const colores = ["#ff4d6d", "#ffd166", "#70e000", "#00bbf9", "#9d4edd"];
    globo.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    globo.style.left = Math.random() * 100 + "vw";
    globo.style.animationDuration = 8 + Math.random() * 4 + "s";

    contenedor.appendChild(globo);

    setTimeout(() => {
        globo.remove();
    }, 12000);
}

setInterval(crearGlobo, 400);
