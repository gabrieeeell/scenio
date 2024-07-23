document.addEventListener('DOMContentLoaded', obtenerDatos);

function leerTexto(texto,titulo) {
    document.getElementById("atras").classList.add("hidden")
    document.getElementById("recargar").classList.remove("hidden")
    document.getElementById("lista").classList.add("hidden")
    const divTexto = document.getElementById("texto")
    divTexto.innerHTML = texto
    divTexto.classList.remove("hidden")
    const tituloTexto = document.getElementById("tituloTexto")
    tituloTexto.classList.remove("hidden")
    tituloTexto.innerHTML = titulo
}

function obtenerDatos() {
    const xhttp = new XMLHttpRequest();         //Creo instancia para hacer request

    xhttp.open("GET","textos.json", true)     //Creo al request

    xhttp.send()                                //La envio

    xhttp.onreadystatechange = function(){     //Cuando cambia el estado de la request, la verifico y obtengo la info
        if(this.readyState == 4 && this.status == 200){
            const textosData = JSON.parse(this.responseText);
            
            let lista = document.querySelector("#lista");

            lista.innerHTML = "";

            for(let texto of textosData){
                lista.innerHTML += `<li>
                    <div onclick="leerTexto('${texto.texto}','${texto.titulo}')" class="divArticulo">
                        <a class="titulo_articulo">${texto.titulo} </a>
                        <br><span class="descripcion_articulo">${texto.descripcion}</span>
                    </div>
                </li>`
            }
        }
    }
}