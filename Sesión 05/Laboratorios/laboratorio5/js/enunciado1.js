class celular {
    color;
    peso;
    ram;
    marca;
    resolucion;
    encendido;

    constructor(color, peso, ram, marca, resolucion, encendido) {
        this.color = color;
        this.peso = peso;
        this.ram = ram;
        this.marca = marca;
        this.resolucion = resolucion;
        this.encendido = encendido;
    }

    presionarBotonEncendido() {
        if (this.encendido == false) {
            console.log("El celular de color "+this.color+" de marca "+this.marca+" esta encendido");
            this.encendido = true;
        } else {
            console.log("El celular de color "+this.color+" de marca "+this.marca+" esta apagado");
            this.encendido = false;
        }
    }

    tomarFoto() {
        if (this.encendido == true) {
            console.log("Foto tomada con una resolución de: "+this.resolucion);
        } else {
            console.log("No se puede tomar una foto porque el celular esta apagado");
        }
    }

    infoCelular() {
        return `
		Color: <b> ${this.color} </b><br>
		Peso: <b> ${this.peso} </b><br>
		Ram: <b> ${this.ram} </b><br>
		Marca: <b> ${this.marca} </b><br>
		Resolucion: <b> ${this.resolucion} </b><br>
		`;
    }

    infoCeluar2(){
        console.log("Color: <b> "+this.color+" </b><br>"
		            +"Peso: <b> "+this.peso+" </b><br>"
		            +"Ram: <b> "+this.ram+" </b><br>"
		            +"Marca: <b> "+this.marca+" </b><br>"
		            +"Resolucion: <b> "+this.resolucion+"</b><br></br>");
    }

}