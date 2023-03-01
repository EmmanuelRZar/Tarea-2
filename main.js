function comp(id){
    var boton = document.getElementById(id);
    if (boton.innerHTML === "Comprar"){
        boton.innerHTML = "Añadido al carrito!";
        boton.style.background="red";
        boton.style.transition="0.3s";
    }
}