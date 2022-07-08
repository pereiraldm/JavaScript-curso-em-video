function gerar(){
    let numero = document.querySelector('input#numero').value
    let tab = document.querySelector('select#seltab')
    if(numero.length == 0){
        window.alert('Por favro digite um número!')
    }else{
        let num = Number(numero)
        let c = 1
        tab.innerHTML = ``
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
        
}