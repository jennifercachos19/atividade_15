//arquivo != pasta

// arrays === lista

// let compras = ["ovo","arroz","feijao branco","sabao em pó","sabao em barra"];

// let busca = prompt("Digite o item a buscar");

// let listaFiltrada = compras.find(compra =>
//     compra.toLocaleLowerCase().includes(busca.toLocaleLowerCase().trim())
// )
// let encontrar = compras.indexOf(listaFiltrada)
// console.log(encontrar)

// let users = ["pedro","Ana","Joana","Diego","Davi Messias","Cristiana"];

// let serchUser = prompt("Digite o nome do usuario que deseja buscar:")
// if(serchUser === ""){
//     console.log("não pode enviar em branco")
// }
// else{
//     let user = users.find(user =>
//         user.toLowerCase().includes(serchUser.toLowerCase().trim())
//     )
// if(user.length === 0){
//         console.log("user not found")
//     }
//     else{
//         console.log("usuario encontrado ".concat(user));
//         let index = users.indexOf(user);
//         users[index] = "novo valor";
//         console.log(users)
//     }
// }

let fila = ["Carlos Silva","Ana Beatriz Costa","Mariana Rodrigues"," Ricardo Oliveira","Lucas Almeida","Gabriela Soares"," Enzo Gabriel Martins"];
fila.push("cliente comum")
//um cliente comum entrou na fila de espera

fila.unshift("cliente prioritario")
//um cliente prioritario entrou na fila de espera

fila.shift()
// o cliente prioritario foi atendido

fila.pop()
// o cliente comum desistiu de esperar
console.log(fila)