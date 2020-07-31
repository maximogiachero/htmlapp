function crearParrafo (MENSAJE) {


    document.getElementById("miParrafo").innerHTML = MENSAJE;
    

    







}

function crearListado () {


    var list = document.querySelector('#listadoChipote')
    var fragment = new DocumentFragment()
    var li = document.createElement('li')
    li.innerHTML = "feooooooooooooo"
    fragment.appendChild(li)
    list.appendChild(fragment)
}


//crearParrafo ()