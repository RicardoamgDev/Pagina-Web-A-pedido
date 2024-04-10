let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    // search.classList.remove('active'); 
}




function llenarFichaTecnicaProducto(producto) {
    // Obtener los elementos de la ficha técnica del modal
    var modeloProducto = document.getElementById("producto-modelo");
    var marcaProducto= document.getElementById("producto-marca");
    var metrosCubicosProducto= document.getElementById("producto-metrosCubicosProducto");
    var barProducto= document.getElementById("producto-bar");
    var lsProducto= document.getElementById("producto-ls");
    var salidaAireProducto= document.getElementById("producto-salidaAireProducto");
    var potenciaKwProducto = document.getElementById("producto-potenciaKwProducto");
    var potenciaHpProducto = document.getElementById("producto-potenciaHpProducto");
    var dimensionesProducto = document.getElementById("producto-dimensiones");

    // Rellenar la información del producto en la ficha técnica
    modeloProducto.innerHTML = `<strong>Nombre:</strong> ${producto.modelo}`;
    marcaProducto.innerHTML = `<strong>Marca:</strong> ${producto.marca}`;
    metrosCubicosProducto.innerHTML = `<strong>M3/M:</strong> ${producto.metrosCubicos}`;
    barProducto.innerHTML = `<strong>Bar:</strong> ${producto.bar}`;
    lsProducto.innerHTML = `<strong>L/S:</strong> ${producto.ls}`;
    salidaAireProducto.innerHTML = `<strong>Diametro salida de aire:</strong>  ${producto.salidaAire}`;
    potenciaKwProducto.innerHTML =`<strong>Potencia KW:</strong> ${producto.potenciaKw}`; 
    potenciaHpProducto.innerHTML =`<strong>Potencia HP:</strong> ${producto.potenciaHp}`; 
    dimensionesProducto.innerHTML =`<strong>Dimensiones</strong> ${producto.dimensiones}`; 
}


// Definir el objeto producto con la información proporcionada
var eee= [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];


//NO MUESTRA EL INDICE 0, ARRREGLAR*****************************


var productos = [
    {
        
        modelo: "GA 11",
        bar: 10,
        ls: 28,
        metrosCubicos: 1.68,
        salidaAire: "1\"",
        potenciaKw: 11,
        potenciaHp: 15,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 11 FF",
        bar: 7.5,
        ls: 31,
        metrosCubicos: 1.86,
        salidaAire: "1\"",
        potenciaKw: 11,
        potenciaHp: 15,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 11 P",
        bar: 7.5,
        ls: 31,
        metrosCubicos: 1.86,
        salidaAire: "1\"",
        potenciaKw: 11,
        potenciaHp: 15,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 18 FF",
        bar: 9.8,
        ls: 28.5,
        metrosCubicos: 1.71,
        salidaAire: "1 1/2\"",
        potenciaKw: 18,
        potenciaHp: 24,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA22 VSD FF",
        bar: 12.8,
        ls: 70.3,
        metrosCubicos: 4.22,
        salidaAire: "1\"",
        potenciaKw: 22,
        potenciaHp: 30,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 30 FF",
        bar: 13,
        ls: 51,
        metrosCubicos: 3.06,
        salidaAire: "1 1/2\"",
        potenciaKw: 30,
        potenciaHp: 40,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 30 VSD",
        bar: 12.8,
        ls: 93,
        metrosCubicos: 5.58,
        salidaAire: "1\"",
        potenciaKw: 30,
        potenciaHp: 40,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 37 FF +",
        bar: 10,
        ls: 118,
        metrosCubicos: 7.09,
        salidaAire: "1 1/2\"",
        potenciaKw: 37,
        potenciaHp: 50,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 45",
        bar: 7.5,
        ls: 125,
        metrosCubicos: 7.5,
        salidaAire: "1 1/2\"",
        potenciaKw: 45,
        potenciaHp: 60,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 45 FF",
        bar: 10,
        ls: 104,
        metrosCubicos: 6.24,
        salidaAire: "1 1/2\"",
        potenciaKw: 45,
        potenciaHp: 60,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 50 VSD ff",
        bar: 13,
        ls: 142,
        metrosCubicos: 8.82,
        salidaAire: "1 1/2\"",
        potenciaKw: 50,
        potenciaHp: 67,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 55 VSD+ FF",
        bar: 12.75,
        ls: 188,
        metrosCubicos: 11.28,
        salidaAire: "1 1/2\"",
        potenciaKw: 55,
        potenciaHp: 74,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 55 VSD+ FF",
        bar: 12.75,
        ls: 188,
        metrosCubicos: 11.28,
        salidaAire: "1 1/2\"",
        potenciaKw: 55,
        potenciaHp: 74,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "IR MM 75",
        bar: 8.5,
        ls: 202,
        metrosCubicos: 12.1,
        salidaAire: "2\"",
        potenciaKw: 75,
        potenciaHp: 100,
        dimensiones: "Dimensiones del producto aquí",
        marca: "INGERSOLLRAND"
    },
    {
        modelo: "GA 75 FF",
        bar: 10,
        ls: 189,
        metrosCubicos: 11.34,
        salidaAire: "1 1/2\"",
        potenciaKw: 75,
        potenciaHp: 100,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 75 VSD",
        bar: 12.8,
        ls: 225,
        metrosCubicos: 13.5,
        salidaAire: "2 1/2\"",
        potenciaKw: 75,
        potenciaHp: 100,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 110",
        bar: 10,
        ls: 310,
        metrosCubicos: 18.6,
        salidaAire: "2 1/2\"",
        potenciaKw: 110,
        potenciaHp: 148,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 132",
        bar: 10,
        ls: 380,
        metrosCubicos: 22.8,
        salidaAire: "2 1/2\"",
        potenciaKw: 132,
        potenciaHp: 177,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },
    {
        modelo: "GA 160",
        bar: 10,
        ls: 420,
        metrosCubicos: 25.2,
        salidaAire: "3\"",
        potenciaKw: 160,
        potenciaHp: 215,
        dimensiones: "Dimensiones del producto aquí",
        marca: "ATLAS COPCO"
    },

];
productos.sort((a, b) => a.potenciaKw - b.potenciaKw);



// Llamar a la función para rellenar la ficha técnica del modal con la información del producto

const btns = document.querySelectorAll('.btn2');
const btnX = document.querySelector('.x-icon');
const ficha = document.getElementById('modal-ficha-tecnica'); // Seleccionar el modal por su ID único

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        ficha.style.display = "block";
        const i = btn.getAttribute('data-producto');
        llenarFichaTecnicaProducto(productos[i]); // Usar la variable 'productos' en lugar de 'producto'
    });
});

btnX.addEventListener('click', () => {
    ficha.style.display = "none";
});



    

