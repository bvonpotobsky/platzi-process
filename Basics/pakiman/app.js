const imagenes = [];

imagenes['Cauchin'] = 'vaca.png';
imagenes['Pokacho'] = 'pollo.png';
imagenes['Tocinauro'] = 'cerdo.png';

class Pakiman {
    constructor(nombre, vida, tipo, ataque) {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.tipo = tipo;
        this.ataque = ataque;
        this.imagen.src = imagenes[this.nombre];
    }
        hablar() {
            alert(`Hola soy ${this.nombre}`);
        }   
        
        mostrar() {
            const html = `<p>
                <img src='${this.imagen.src}'/>
                <strong>${this.nombre}</strong>
                Vida: ${this.vida}
                Ataque: ${this.ataque}
            </p>`;
            document.body.insertAdjacentHTML('beforeend', html);
        }
}

const cauchin = new Pakiman("Cauchin", 50, 'tierra', 30);
const pokacho = new Pakiman("Pokacho", 50, 'tierra', 30);
const tocinauro = new Pakiman("Tocinauro", 50, 'tierra', 30);

pokacho.mostrar();
tocinauro.mostrar();