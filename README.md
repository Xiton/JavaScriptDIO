# JavaScript FullStack DIO

## Operadores
Desafio "Operadores" Javascript.

Atividade
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

## Variáveis e Tipos

Neste repositório você encontrará a atividade prática proposta pelo curso "Variáveis e Tipos" do BootCamp de Javascript Santander
### Atividade 1

Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

_Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)_

### Atividade 2

Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo:
Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1

## Funções

Projetos referentes ao curso "Funções" que ministrei pela [Digital Innovation One](https://digitalinnovation.one/).

### Atividade 1: Alunos Aprovados

1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

### Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

## Coleções Chaveadas

### Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função `getAdmins` que recebe um `Map`;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usu;arios que são administradores.

### Atividade 2: Sets

Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.

## Javascript Assíncrono

Este repositório contém a atividade prática do Curso "Javascript Assíncrono".

### Atividade: API "catAPI"

Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

1. Utilize a API `https://thatcopy.pw/catapi/rest` para fazer as chamadas com o método `fetch()`;
2. Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!

## Orientação a Objetos

Este repositório contém a atividade prática do Curso "Orientação a Objetos", que faz parte do Bootcamp de Javascript

### Atividade: Conta Bancária

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1. Crie a classe `ContaBancaria`, que possui os parâmetros `agencia`, `numero`, `tipo` e `saldo`;
2. Dentro de `ContaBancaria`, construa o getter e o setter de `saldo`;
3. Dentro de `ContaBancaria`, crie os métodos `sacar` e `depositar`;
4. Crie uma classe-filha chamada `ContaCorrente` que herda todos esses parâmetros e ainda possua o parâmetro `cartaoCredito`;
5. Ainda em `ContaCorrente`, construa o getter e o setter de `cartaoCredito`;
6. Ainda em `ContaCorrente`, faça com que o `tipo` seja 'conta corrente' por padrão;
7. Crie uma classe-filha chamada `ContaPoupanca` que herda todos os parâmetros de `ContaBancaria`;
8. Crie uma classe-filha chamada `ContaUniversitaria` que herda todos os parâmetros de `ContaBancaria`;
9. Faça com que o método `saque` de `ContaUniversitaria` apenas seja capaz de sacar valores **menores que 500 reais**.

## Módulo

### Atividade

Esta atividade tem como objetivo que você veja **no console do seu navegador** como os módulos funcionam.

1. Instale a extensão "Live Server" no seu VSCode;
2. Crie um arquivo com uma estrutura HTML padrão;
3. Crie dois arquivos `.js` ou `.mjs`, um chamado `funcoes` e outro chamado `main`;
4. No arquivo `funcoes`:
   1. Crie uma função chamada `mostraIdade`, que recebe `nome` e `idade` e retorna a string: `A idade de ${nome} é ${idade}`;
   2. Siga o mesmo padrão para outras funções como `mostraCidade` e `mostraHobby`;
   3. Exporte estas funções.
5. No arquivo `main`:
   1. Importe as funções do arquivo `funcoes`;
   2. Faça a chamada de todas elas;
6. Utilizando a extensão "Live Server", abra o seu navegador e veja no console que as informações foram logadas corretamente.
