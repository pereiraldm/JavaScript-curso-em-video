let fnum = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let flista = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(fnum.value) && !inLista(fnum.value, flista)){
        flista.push(Number(fnum.value))
        let item = document.createElement('option')
        item.text = `Valor ${fnum.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    fnum.value = ''
    fnum.focus()
}

function finalizar(){
    if(flista.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let soma = 0
        for(let pos in flista){
            soma += flista[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${flista.length} números cadastrados`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(Math,flista)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(Math,flista)}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma/flista.length}.</p>`
    }
}

function reset(){
    window.location.reload()
}
