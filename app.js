let amigo = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
};

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

        for ( let i = 0; i < amigo.length; i++){
            let item = document.createElement("li");
            item.textContent = amigo[i];
            listaAmigos.appendChild(item);
        }
    };

function sortearAmigo(){
    if(amigo.length === 0){
        alert("Debes agregar al menos un amigo");
        return;
    }
        else 
        if(amigo.length === 1){
            alert("Debes agregar al menos dos amigos");
            return;
        }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado.toUpperCase()}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}

function resetearLista(){
    amigo = [];
    renderizarAmigos();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}