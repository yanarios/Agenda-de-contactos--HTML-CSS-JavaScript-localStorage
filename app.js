const nombre = document.getElementById("nombre");
const celular = document.getElementById("celular");
const btnAgregar = document.getElementById("agregar");
const agenda = document.getElementById("agenda");

let listaAgenda = JSON.parse(localStorage.getItem("agenda")) || [];

btnAgregar.addEventListener("click", agregarAgenda);

mostrarAgenda();

function mostrarAgenda() {
    let agendaTableBody = document.getElementById("agendaTableBody");
    agendaTableBody.innerHTML = "";

    for (let i = 0; i < listaAgenda.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${listaAgenda[i].nombre}</td><td>${listaAgenda[i].celular}</td><td><button class="btn btn-danger btn-sm" onclick="borrarContacto(${i})">Borrar</button></td>`;
        agendaTableBody.appendChild(row);
    }
}

function agregarAgenda() {
    if (nombre.value.trim() !== "" && celular.value.trim() !== "") {
        const objeto = { nombre: nombre.value, celular: celular.value };
        listaAgenda.push(objeto);
        localStorage.setItem("agenda", JSON.stringify(listaAgenda));
        mostrarAgenda();
    }
    nombre.value = "";
    celular.value = "";
    nombre.focus();
}

function borrarContacto(index) {
    listaAgenda.splice(index, 1);
    localStorage.setItem("agenda", JSON.stringify(listaAgenda));
    mostrarAgenda();
}
