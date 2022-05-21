const formulario = document.querySelector('#formulario')
const resultado = document.querySelector("#resultado")


document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', ValidarBusqueda)

})

// console.log(formulario)
// console.log(resultado)

function ValidarBusqueda(e) { 
    e.preventDefault();

    const empleo = document.querySelector("#busqueda").value;
    if(empleo.length < 3) {
        mensajeError('La busqueda es demasiado corta')
        return
    }
     consumirAPI(empleo)
}

function consumirAPI(empleo) {
    const githubURL = `https://jobs.github.com/positions.json?search:${empleo}`
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(githubURL)}`
    axios.get(url)
        .then(respuesta => mostarVacantes(JSON.parse(respuesta.data.contents)))
} 

function mostarVacantes(empleos) { 

    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }

    if (empleos.length > 0) {
        
        resultado.classList.add('grid')


        empleos.forEach(empleo => {

            const {title, type, url, company} = empleo
            resultado.innerHTML = `
            <div class="shadow bg-white p-6 rounded">
                <h2 class="text-2xl font-light mb-4">${title}</h2>
                <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
            </div>
            `
        });
        

    } else { 
        const mensaje = document.createElement('p') 
        mensaje.classList.add('text-center', 'mt-5', 'text-gray-900', 'bg-gray-400', 'w-full')
        resultado.classList.remove('grid')
        mensaje.textContent = 'No existen vacantes para ese empleo' 
        resultado.appendChild(mensaje)
    }





}

function mensajeError(mensaje) { 

    const alerta = document.querySelector('.alerta') 
    if(!alerta) {
        const mensajeError = document.createElement("div")
        mensajeError.classList.add("bg-red-500", "text-white", "font-bold", "rounded-t", "px-4", "py-2", "my-2", "text-center" ,'alerta')
        mensajeError.textContent = mensaje
        formulario.appendChild(mensajeError)

        if(mensajeError) {
            setTimeout(()=> {
                mensajeError.remove();
            },3000)
        }
    }
    
}

