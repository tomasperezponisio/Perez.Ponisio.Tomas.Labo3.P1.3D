
class Anuncio {
    constructor(id, titulo, descripcion, precio) {
        this.id = id;
        this.titulo = titulo;        
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

export class Anuncio_Mascota extends Anuncio {
    constructor(id, titulo, descripcion, precio, animal, raza, fecha_nacimiento, vacuna) {
        super(id, titulo, descripcion, precio);
        this.animal = animal;
        this.raza = raza;
        this.fecha_nacimiento = fecha_nacimiento;
        this.vacuna = vacuna;
    }
}