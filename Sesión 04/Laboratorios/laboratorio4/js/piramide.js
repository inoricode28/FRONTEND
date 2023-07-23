function mostrarPiramide(){
    var valor = document.getElementById("txtNumero").value;
    if(valor!=''&&valor>0){
        var i;
        var j;
        for(i=1;i<=valor;i++){
            for(j=1;j<=i;j++){
                document.write(j);
            }
            document.write("<br>");
        }
    }
}

