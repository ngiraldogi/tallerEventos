//activar o desactivar el checkbox
function activarCheckbox(){
    let opcion1 = document.getElementById("flexRadioDefault1"); //obtengo el elemento de radiobutton "si"
    let div = document.getElementById("opciones"); 
    if(opcion1.checked){
        div.innerHTML=
        `<div>
            <input type="checkbox" id="miElementoCheckbox1"> <label>opcion 1</label>
        </div>
        <div>
            <input type="checkbox" id="miElementoCheckbox2"> <label>opcion 2</label>
        </div>
        `
    }else{
        div.innerHTML=""
    }
}

