
// EJERCICIO 1 
let nombre: string = "Hector";
let edad: number = 27;
let activo: boolean = true;

//edad = "ventisiete"; Error: Type 'string' is not assignable to type 'number'

// ---------------------------------------------------------------------------
// EJERCICIO 2 
let precios: number[] = [12.5, 30, 8.99, 45];

function sumarPrecios(arr: number[]): number {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

console.log(sumarPrecios(precios));


// ---------------------------------------------------------------------------
// EJERCICIO 3

function presentar(nombre: string, apellido?:string): string {
    if (apellido) {
        return `Hola, me llamo ${nombre} ${apellido}.`;
    } else {
        return `Hola, me llamo ${nombre}.`;
    }
}

console.log(presentar("Ana", "Perez"));
console.log(presentar("Ana"));

// ---------------------------------------------------------------------------
// EJERCICIO 4 

function calcularDescuento(precio: number, porcentaje: number): number {
    return precio - (precio * porcentaje / 100);
}

console.log(calcularDescuento(100, 20));


// ---------------------------------------------------------------------------
// EJERCICIO 5

function mostrarID(id: number | string): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }else{
        console.log(id.toFixed(2));
    }
}

console.log(mostrarID(123));
console.log(mostrarID("abc"));


// ---------------------------------------------------------------------------
// EJERCICIO 6

type Producto = {
    nombre: string;
    precio: number;
    descripcion?: string;
};

console.log({nombre: "Camiseta", precio: 19.99});
console.log({nombre: "Camiseta", precio: 19.99, descripcion: "Algodón 100%"});


// ---------------------------------------------------------------------------
// EJERCICIO 7

function mostrarProducto(producto: Producto): void {
    console.log(`Producto: ${producto.nombre}`);
    console.log(`Precio: ${producto.precio} €`);
    if (producto.descripcion) {
        console.log(`Descripción: ${producto.descripcion}`);
    }
}

mostrarProducto({nombre: "Teclado", precio: 35});
mostrarProducto({nombre: "Teclado", precio: 35, descripcion: "Teclado mecánico"});


// ---------------------------------------------------------------------------
// EJERCICIO 8
type estadoTarea = "pendiente" | "en progreso" | "completada";

// miTarea = "cancelada"; Type '"cancelada"' is not assignable to type 'estadoTarea'.


// ---------------------------------------------------------------------------
// EJERCICIO 9 
interface Persona {
    nombre: string;
    edad: number;
    ciudad?: string;
}

console.log({nombre: "Hector", edad: 27, ciudad: "Valencia" });
console.log({nombre: "Hector", edad: 27});
// ---------------------------------------------------------------------------
// EJERCICIO 10 
interface Libro{
    Titulo: string;
    Autor: string;
    Paginas: number;
    Disponible: boolean;
}

const libros: Libro[] = [
    { Titulo: "El Quijote", Autor: "Miguel de Cervantes", Paginas: 863, Disponible: true },
    { Titulo: "1984", Autor: "George Orwell", Paginas: 328, Disponible: false },
    { Titulo: "Clean Code", Autor: "Robert C. Martin", Paginas: 464, Disponible: true },
];

function estaDisponible(libro: Libro): boolean {
    return libro.Disponible;
}

for (const libro of libros) {
    if (estaDisponible(libro)) {
        console.log(`Disponible: ${libro.Titulo}`);
    }
}


// ---------------------------------------------------------------------------
// EJERCICIO 11 — Datos que pueden faltar
// ---------------------------------------------------------------------------
function buscarUsuario(identificador: number): string | undefined {
    if (identificador === 1) {
        return "Ana";
    }
    return undefined;
}

const usuarioEncontrado = buscarUsuario(1);
if (usuarioEncontrado !== undefined) {
    console.log(usuarioEncontrado.toUpperCase());
}

console.log(buscarUsuario(2));


// ---------------------------------------------------------------------------
// EJERCICIO 12 — Comprobar un unknown
// ---------------------------------------------------------------------------
let dato: unknown = "texto de ejemplo";

if (typeof dato === "string") {
    console.log(dato.toUpperCase());
}

dato = 42;

if (typeof dato === "string") {
    console.log(dato.toUpperCase());
} else {
    console.log("El dato no es un texto, no se puede convertir a mayúsculas.");
}


// ---------------------------------------------------------------------------
// EJERCICIO 13 — Actualizar parcialmente un usuario
// ---------------------------------------------------------------------------
type Usuario = {
    id: number;
    nombre: string;
    email: string;
    edad: number;
};

const cambios: Partial<Usuario> = { email: "ana@correo.com" };

const resumen: Pick<Usuario, "id" | "nombre"> = { id: 1, nombre: "Ana" };


// ---------------------------------------------------------------------------
// EJERCICIO 14 — Usuario público
// ---------------------------------------------------------------------------
type UsuarioPublico = Omit<Usuario, "email">;

const usuarioPublico: UsuarioPublico = {
    id: 1,
    nombre: "Ana",
    edad: 28,
};


// ---------------------------------------------------------------------------
// EJERCICIO 15 — Configuración obligatoria y de solo lectura
// ---------------------------------------------------------------------------
interface Configuracion {
    tema?: string;
    idioma?: string;
}

const configuracionCompleta: Required<Configuracion> = {
    tema: "oscuro",
    idioma: "es",
};

const usuarioSoloLectura: Readonly<Usuario> = { id: 1, nombre: "Ana", email: "ana@correo.com", edad: 28 };

// usuarioSoloLectura.nombre = "Luis";  // Error: Cannot assign to 'nombre' because it is a read-only property.


// ---------------------------------------------------------------------------
// EJERCICIO 16 — Cuenta bancaria
// ---------------------------------------------------------------------------
class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    ingresar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

const cuenta = new CuentaBancaria(100);
cuenta.ingresar(50);
cuenta.ingresar(-20);
console.log(cuenta.consultarSaldo());


// ---------------------------------------------------------------------------
// EJERCICIO 17 — Elementos reproducibles
// ---------------------------------------------------------------------------
interface Reproducible {
    reproducir(): void;
}

class Cancion implements Reproducible {
    titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    reproducir(): void {
        console.log(`♪ Reproduciendo canción: ${this.titulo}`);
    }
}

class Video implements Reproducible {
    titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    reproducir(): void {
        console.log(`▶ Reproduciendo vídeo: ${this.titulo}`);
    }
}

const elementos: Reproducible[] = [
    new Cancion("Bohemian Rhapsody"),
    new Video("Tutorial de TypeScript"),
];

for (const elemento of elementos) {
    elemento.reproducir();
}


// ---------------------------------------------------------------------------
// EJERCICIO 18 — Estado de un pedido
// ---------------------------------------------------------------------------
enum EstadoPedido {
    Pendiente,
    Enviado,
    Entregado,
}

function mensajeEstado(estado: EstadoPedido): string {
    switch (estado) {
        case EstadoPedido.Pendiente:
            return "El pedido está pendiente de preparación.";
        case EstadoPedido.Enviado:
            return "El pedido ha sido enviado.";
        case EstadoPedido.Entregado:
            return "El pedido ha sido entregado.";
        default:
            return "Estado desconocido.";
    }
}

console.log(mensajeEstado(EstadoPedido.Pendiente));
console.log(mensajeEstado(EstadoPedido.Enviado));
console.log(mensajeEstado(EstadoPedido.Entregado));


// ---------------------------------------------------------------------------
// EJERCICIO 19 — Primer elemento genérico
// ---------------------------------------------------------------------------
function primero<T>(elementos: T[]): T | undefined {
    return elementos[0];
}

console.log(primero([10, 20, 30]));
console.log(primero(["Ana", "Luis"]));
console.log(primero([]));


// ---------------------------------------------------------------------------
// EJERCICIO 20 — Registro de puntuaciones y promesa
// ---------------------------------------------------------------------------
type Puntuaciones = Record<string, number>;

const puntuaciones: Puntuaciones = {
    Ana: 85,
    Luis: 92,
    Marta: 78,
};

async function obtenerMensaje(): Promise<string> {
    let mejorAlumno = "";
    let mejorNota = -1;

    for (const nombre of Object.keys(puntuaciones)) {
        if (puntuaciones[nombre] > mejorNota) {
            mejorNota = puntuaciones[nombre];
            mejorAlumno = nombre;
        }
    }

    return `El alumno con la puntuación más alta es ${mejorAlumno} con ${mejorNota} puntos.`;
}

obtenerMensaje().then((mensaje) => console.log(mensaje));