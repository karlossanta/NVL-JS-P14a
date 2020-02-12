var pelis = [
    {
        "Nombre": "El señor de los anillos",
        "Genero": "Acción"
    },
    {
        "Nombre": "Regreso al Futuro",
        "Genero": "Acción"
    },
    {
        "Nombre": "Los increibles 2",
        "Genero": "Animación"
    },
    {
        "Nombre": "Transporter",
        "Genero": "Acción"
    },
    {
        "Nombre": "La Jungla de Cristal",
        "Genero": "Acción"
    },
    {
        "Nombre": "A todo Gas",
        "Genero": "Acción"
    },
    {
        "Nombre": "The Mechanic",
        "Genero": "Acción"
    },
    {
        "Nombre": "1917",
        "Genero": "Bélica"
    },
    {
        "Nombre": "Interestellar",
        "Genero": "Ciencia Ficción"
    },
    {
        "Nombre": "Enemigo a las Puertas",
        "Genero": "Bélica"
    },
    {
        "Nombre": "El ünico Superviviente",
        "Genero": "Bélica"
    },
    {
        "Nombre": "Venganza",
        "Genero": "Acción"
    },
    {
        "Nombre": "El Caso Bourne",
        "Genero": "Acción"
    },
    {
        "Nombre": "Transformers",
        "Genero": "Ciencia Ficción"
    },
    {
        "Nombre": "Terminator",
        "Genero": "Acción"
    },
    {
        "Nombre": "Pacific Rim",
        "Genero": "Ciencia Ficción"
    },
    {
        "Nombre": "Piratas del Caribe",
        "Genero": "Ciencia Ficción"
    },
    {
        "Nombre": "Jurassic Park",
        "Genero": "Ciencia Ficción"
    },
    {
        "Nombre": "Avatar",
        "Genero": "Ciencia Ficción"
    },
    {
        "Nombre": "Harry Potter",
        "Genero": "Ciencia Ficción"
    },
    {
        "Nombre": "Iron Man",
        "Genero": "Super Héroes"
    },
    {
        "Nombre": "Capitán América",
        "Genero": "Super Héroes"
    },
    {
        "Nombre": "Los Vengadores",
        "Genero": "Super Héroes"
    },
    {
        "Nombre": "Misión Imposible",
        "Genero": "Acción"
    },
    {
        "Nombre": "Ocean Eleven",
        "Genero": "Acción"
    }
];

//seleccionamos el cuerpo del HTML para ir creando nuestro documento
var root = document.querySelector("body");
//Añadimos un título a la página
var titulo = document.createElement("h1");
titulo.textContent = "Películas";
root.appendChild(titulo);
//Le añadimos una lista desordenada
var listaDesordenada = document.createElement('ul');
root.appendChild(listaDesordenada);
//A la lista desordenada le vamos añadiendo un ítem con el título de cada película
for (i = 0; i < pelis.length; i++) {
    var elemento = document.createElement("li");
    //El título va a estar contenido en un <h2>
    var titulo = document.createElement("h2");
    titulo.textContent = pelis[i].Nombre;
    elemento.appendChild(titulo);
    listaDesordenada.appendChild(elemento);
}
//Vamos a añadir iconos segun el género de la película
for (i = 0; i < pelis.length; i++) {
    var elemento = document.querySelector("li");
    //Creamos un elemento img
    var img = document.createElement("img");
    //Y dependiendo del género seleccionamos un 'src' u otro
    var genero = pelis[i].Genero;
    switch (genero) {
        case "Acción":
            img.src = "accion.png";
            img.alt = "icono de pelicula de accion";
            break;
        case "Animación":
            img.src = "animacion.png";
            img.alt = "icono de pelicula de animacion";
            break;
        case "Ciencia Ficción":
            img.src = "cienciaficcion.png";
            img.alt = "icono de pelicula de ciencia ficcion";
            break;
        case "Bélica":
            img.src = "belico.jpg";
            img.alt = "icono de pelicula belica";
            break;
        default:
            img.src = "super.png";
            img.alt = "icono de pelicula de Super heroes";
            break;
    }
    //aplicamos un alto fijo de 100px a todas las imágenes
    img.style.height = "100px";
    //añadimos el hijo (imagen) al elemento de la lista
    elemento.appendChild(img);
    //Y el elemento nuevamente a la lista
    listaDesordenada.appendChild(elemento);
}

//por mera curiosidad para ver cómo evoluciona
console.log(root);
