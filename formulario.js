//1. activar o desactivar el checkbox
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
        div.innerHTML="";
    }
}

//2. muestra en mensaje de alerta en mayuscula cuando se pierde el foco
var inputNombre = document.getElementById("exampleInputName1");
var inputApellido = document.getElementById("exampleInputLastName1");

function alertaMayuscula(){
    let nombre1 = inputNombre.value;
    let apellido1 = inputApellido.value;
    if(nombre1 && nombre1.trim()){  //se comprueba que el campo nombre contenga texto, con trim se comprueba que el texto no sean espacios
        alert(nombre1.toUpperCase());
    }
    if(apellido1 && apellido1.trim()){
        alert(apellido1.toUpperCase());
    }
    //alert(nombre1.toUpperCase());
    //alert(apellido1.toUpperCase());
}

//3.Activar boton si el campo de e-mail no esta vacío
function validar() {
    let qwe=document.getElementById("exampleInputEmail1")
    let btn = document.getElementById("enviar")
    let desab = false;
    if (qwe.value==""){
        desab=true;
    }
    if (desab==true){
       btn.disabled= true;
    } else{
        btn.disabled = false;
    }
}
document.getElementById("exampleInputEmail1").addEventListener("keyup",validar);
//4. verifica que las contraseñas sean iguales
 var inputContraseña1 = document.getElementById("exampleInputPassword1");
 var inputContraseña2 = document.getElementById("exampleInputPassword2");
 var botonEnviar = document.getElementById("enviar");

function verificarContraseña(){
    let contraseña1 = inputContraseña1.value;
    let contraseña2 = inputContraseña2.value;
    let mensaje = document.getElementById("mensajeContraseña");
    botonEnviar.disabled = true;
    if(contraseña1 != '' && contraseña2 != ''){
        if(contraseña1 == contraseña2){
            inputContraseña1.style.color = "green";
            inputContraseña2.style.color = "green";
            mensaje.innerHTML=`<div><label>Las contraseñas son iguales</label></div>`
            botonEnviar.disabled = false;
        }
        else{
            inputContraseña1.style.color = "red";
            inputContraseña2.style.color = "red";
            mensaje.innerHTML=`<div'><label>Las contraseñas NO son iguales</label></div>`
        }
    }
}

