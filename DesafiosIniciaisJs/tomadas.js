function tomadas(){
//let lines = gets().split("\n");

let line = [7, 6, 6, 6];//lines.shift().split(' ');
let soma = 0

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for(i=0; i <  4  ;i++){
  let transfor = parseInt(line[ i  ]);
  if (transfor > 1 && transfor < 7 )
  {
    soma = soma + transfor;    
  }
}

console.log(soma - 3);
//print(soma-3);
}
tomadas();