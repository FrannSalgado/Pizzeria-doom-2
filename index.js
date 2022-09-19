/*

Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error.

*/

const imgPredeterminada = "https://img.freepik.com/vector-gratis/ilustracion-cocina-italiana_1284-37909.jpg?w=740&t=st=1662594547~exp=1662595147~hmac=2c22eceb88169326a8e1ebdb773b180ee5c33fb45ed9026490dfd20251a59314"


const Pizzas = [
    {
        id: 1,
        nombre: "Jamon y Queso",
        ingredientes: ["Salsa", " Jamon", " Queso", " Morron"],
        precio: 600,
        img: "https://i.pinimg.com/564x/ba/50/ac/ba50ac068af5b284f5a1865d9a3cf97b.jpg"
    },

    {
        id: 2,
        nombre: "Rucula y Crudo",
        ingredientes: ["Salsa", " Rucula", " Queso", " Tomate", " Jamon Crudo"],
        precio: 780,
        img: "https://i.pinimg.com/564x/f5/32/a0/f532a0aa7ffbb9d9933c3bc9eb2efb02.jpg"

    },

    {
        id: 3,
        nombre: "Muzza",
        ingredientes: ["Salsa", " muzzarella"],
        precio: 580,
        img: "https://i.pinimg.com/564x/1c/21/02/1c21027542b1e90afb3d154f41370823.jpg"
    },

    {
        id: 4,
        nombre: "Bomba",
        ingredientes: ["Salsa", " Cheddar", " Fritas", " Huevo Frito"],
        precio: 1000,
        img: "https://i.pinimg.com/564x/9f/47/0b/9f470bf6189a4731634419e57e36f0a0.jpg"
    },

    {
        id: 5,
        nombre: "Anana",
        ingredientes: [" Salsa", " Jamon", " Queso", " Anana caramelizada"],
        precio: 620,
        img: "https://i.pinimg.com/564x/a5/e1/b5/a5e1b53967e12c0aedb85d49c69855c0.jpg"
    },

    {
        id: 6,
        nombre: "Cebolla",
        ingredientes: ["Salsa", " Queso", " cebolla caramelizada"],
        precio: 780,
        img: "https://i.pinimg.com/564x/1a/cd/25/1acd2567edef13f928dd8ded6129660b.jpg"
    }
]

const inputCodigo = document.getElementById("codigoNumerico");
const botonValidar = document.getElementById("validar");
const nombrePizza = document.getElementById("nombrePizza");
const valorPizza = document.getElementById('valorPizza');
const ulReset = () => '<ul id="lista" class="data">Ingredientes: </ul>';
const ulPadre = document.getElementById("ulPadre")


const imgPizza = document.getElementById("imgPizza");

numero = inputCodigo.value;


const saveLocalStorage = (Pizzas) => {

    localStorage.setItem("pizzas", JSON.stringify(Pizzas));

}


const resetearUl = () => {
    ulPadre.innerHTML = ulReset();

}


function validarCodigoNumerico(e) {
    e.preventDefault();
    console.log(e)
    resetearUl();

    if (Pizzas.some(elemento => elemento.id == numero)) {
        Pizzas.forEach((elemento => {
            if (elemento.id == numero) {
                nombrePizza.textContent = elemento.nombre;
                valorPizza.textContent = "$" + elemento.precio;
                const ingredientesTotales = elemento.ingredientes;

                ingredientesTotales.forEach((ingredienteX => {
                    const lista = document.getElementById("lista");

                    const ingrediente = document.createElement("li");
                    lista.appendChild(ingrediente);
                    ingrediente.textContent = ingredienteX;
                }))

                imgPizza.src = elemento.img;

            }



        }))
        return;
    }
    else if (numero === "") {

        nombrePizza.textContent = "[.......]"
        valorPizza.textContent = "..."
        resetearUl();
        alert("Ingrese Un Numero ")

    }

    else {


        nombrePizza.textContent = "##_ERROR_##"
        valorPizza.textContent = "..."
        liCreate.textContent = ""
        resetearUl();
        alert("Ese Numero no Existe o no fue registrado aun")

    }

}






function ponerValor() {
    numero = inputCodigo.value;
    console.log(numero)
}


const item = document.createElement("div");

inputCodigo.addEventListener("keyup", ponerValor)
botonValidar.addEventListener("click", validarCodigoNumerico)


const init = () => {
    saveLocalStorage(Pizzas);

}
init();