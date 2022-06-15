function resto2(){
    try{
        let lines = 10; //gets().split('\n');
        var N = 13; //parseInt(lines.shift());

        //A entrada contém um valor inteiro N (N < 10000).
        if (N < 10000)
        {
            for (let i = 1; i < 10001; i++) {   
            //TODO: Complete os espaços em branco com uma possível solução para o desafio
                if (i % N ===  2  ) {
                    console.log(`${i}`);       
                }
            }
        }
        else
        {
            console.log("Valor fora do intervalo permitido");
        }
    }
    catch
    {
        console.log("Erro nos parâmetros");
    }
}

resto2();