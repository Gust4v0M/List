let lista = document.getElementById("lista");
let bnt = document.getElementById("bnt");
let input = document.getElementById("write");
let check = document.getElementById("check");
let remove = document.getElementById("remove")


onload = function (){

  let nome = JSON.parse(localStorage.getItem("tarefas" ) || [] );


  lista.innerHTML += ` <li>
                      ${nome}
                    </li>
                    <br>`;

console.log(nome)
}

bnt.addEventListener("click", function () {
  var array = [];
  var valor = input.value;
 
  array.push([valor]);

 localStorage.setItem("tarefas", JSON.stringify(array))     


 lista.innerHTML += `<input type="checkbox"> <li>
                     ${array}
                   </li>
                   <br>`;


                   
     remove.addEventListener('click', function(){
        
      arr.splice(index, 1)
     })

 console.log(array)
      });


