function maiorPreco(){
    let precos = [1000000, 46000, 16000, 46000, 17000];

    maisCaro = 0;

    for(let atual = 0; atual < precos.length; atual++){
        if(precos[atual] > precos[maisCaro]){
            maisCaro = atual;
        }
    }
    console.log(maisCaro);
    console.log(precos[maisCaro]);
}

maiorPreco();