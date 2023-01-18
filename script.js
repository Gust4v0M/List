let lista = document.getElementById("lista");
let bnt = document.getElementById("bnt");
let input = document.getElementById("write");
let check = document.getElementById("check");



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


        


 console.log(array)
      });

      lista.addEventListener("click", function(){
      let del = document.createElement('del')
      
        del.appendChild(lista)



        console.log("vamos ver".tagDel)
      })
      


