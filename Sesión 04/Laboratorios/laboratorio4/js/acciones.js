function inicio() {
    //LET SOLO VA A FUNCIONAR EN EL MISMO BLOQUE EN EL QUE FUE DEFINIDO
    let valor = 5;
    console.log(valor);
    if (valor == 5) {
        //VAR VA A FUNCIONAR DESDE EL MOMENTO QUE FUE DECLARADO SIN IMPORTAR SI ESTA O NO EN EL MISMO BLOQUE QUE FUE DEFINIDO
        var nombre = "prueba";
        console.log(nombre);
    }
    valor = "ahora soy un string";
    console.log(valor);
    //CONST ES UNA CONSTANTE NO PUEDE SER MODIFICADO
    const constante = 1;
    console.log(constante);
    // constante=3;NO ME PERMITE MODIFICARLOS
    ////PRUEVA OPERADORES 7
    var numero1 = 4;
    var numero2 = 5;
    var resultadoSuma = numero1 + numero2;
    console.log(resultadoSuma);
    var resultadoResta = numero1 - numero2;
    console.log(resultadoResta);
    var resultadoMultiplicacion = numero1 * numero2;
    console.log(resultadoMultiplicacion);
    var resultadoDivision = numero1 / numero2;
    console.log(resultadoDivision);
    var resultadoModulo = numero1 % numero2;
    console.log(resultadoModulo);
    var resultadoIncremento = numero1++;
    console.log(resultadoIncremento);
    var resultadoDecremento = numero1--;
    console.log(resultadoDecremento);
    var resultado = numero1 < numero2;
    console.log(resultado);
    var resultadoTernario = (numero1 > numero2) ? "SI" : "NO";
    console.log(resultadoTernario);
    var i = 0;
    while (i < 10) {
        i++
        console.log(i);
    }
    var array = [11, 12, 13, 14, 15];
    console.log(array);

    console.log("FOR NORMAL");
    for (var j = 0; j < array.length; j++) {
        console.log(array[j]);
    }
    console.log("FOR DE TIPO FOR EACH");
    for (const valor of array) {
        console.log(valor);
    }

    console.log("FOR DE TIPO FOR EACH CON LAMBDA");
    array.forEach(elemento => console.log(elemento));
}
inicio();

function saludar(){
    var nombre = document.getElementById("name").value;
    if(nombre==""){
        alert("Ingrese su Nombre") ;
        document.getElementById("name").focus();
    }else{
        alert("hola " + nombre);
    }
}

function saludarConsola(){
    var nombre = document.getElementById("name").value;
    if(nombre==""){
        console.log("Ingrese su Nombre") ;
        document.getElementById("name").focus();
    }else{
        console.log("hola " + nombre);
    }
}

var btnSaludar= document.getElementById("btnSaludar");
btnSaludar.addEventListener("click",function(){alert("HOLA COMO ESTAS");},false);

//UTILICEN ESTA FORMA CON JQUERY
var btnSaludar2= document.getElementById("btnSaludar2");
btnSaludar2.onclick = function(){alert("HOLA COMO ESTAS 2");};

//1 document.getElementById("btnSaludar2").value;
//2 $("#btnSaludar2").val(); // Es la mas elegante y practica (JQUERY)

//CODIGO EJEMPLO
function registrarResolucion() {
    $.ajax({
        url: baseURL + "pages/sym/registrarResolucionJudicialSymBus", //A qui va la url de su servicio
        type: 'get',
        data: {
            nroExpedienteJudicial: $("#numeroExpedienteSiged").val(),
            nroExpedienteAdministrativo: $("#txtExpedienteAdministrativoResolucion").val() // PARAMETROS DE ENVIO
        },
        success: function (data) {
            if (data.Respuesta != null) {
                if (data.Respuesta != "0") {
                    if (data.Respuesta.baseOutRO != null) {
                        if (data.Respuesta.baseOutRO.resultCode == "1") {
                            alert("Se Registro con éxito");
                        } else {
                            console.log(data.Respuesta.baseOutRO.message);
                        }
                    } else {
                        console.log("Ocurrió un error al realizar el registro");
                    }

                } else {
                    console.log('Usted no tiene acceso para realizar el registro');
                }
            } else {
                console.log('El servicio SYM del BUS no se encuentra disponible. Actualice la página e inténtelo nuevamente.');
            }
        },
        error: function (jqXHR) {
            console.log(jqXHR);
        }
    });
}