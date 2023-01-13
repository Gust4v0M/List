let lista = document.getElementById("lista");
let bnt = document.getElementById("bnt");
let input = document.getElementById("write");



onload = function (){

  let nome = JSON.parse(localStorage.getItem("tarefas" ) || [] );
  lista.innerHTML += `<li>
                      ${nome}
                    </li>`;

console.log(nome)
}

bnt.addEventListener("click", function () {
  let array = [];
  let valor = input.value;
 
  array.push([valor]);

 localStorage.setItem("tarefas", JSON.stringify(array))     


 lista.innerHTML += `<li>
                     ${array}
                   </li>`;


 console.log(array)
    });







