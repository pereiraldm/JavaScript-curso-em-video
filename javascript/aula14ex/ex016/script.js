function contar(){
    let inicio = document.querySelector('input#inicio').value
    let fim = document.querySelector('input#fim').value
    let passo = document.querySelector('input#passo').value
    let res = document.querySelector('div#res')

    if (inicio == 0 || fim <= 0 ){
        window.alert('[ERRO] Faltam dados!')
    }else {
        res.innerHTML = 'Contando... '
        let i = Number(inicio);
        let f = Number(fim);
        let p = Number(passo)
        if(passo <= 0){
            window.alert('Passo igual a 0 é inválido, usando passo igual a 1')
            p=1
        }
        if(i<f){   
            for(i; i<=f; i+=p){
                res.innerHTML += `${i} \u{1F449}`
                }
        }
        else{   
            for(i; i<=f; i-=p){
                res.innerHTML += `${i} \u{1F449}`
                }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}