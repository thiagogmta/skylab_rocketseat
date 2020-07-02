var ul = document.querySelector("#app ul");
var inp = document.querySelector("#app input");
var btn = document.querySelector("#app button");
var alerta = document.querySelector("#alerta");


console.log(ul);
console.log(inp);
console.log(btn);

//var lista = [];

var lista = JSON.parse(localStorage.getItem('lista_local'));

function renderizar(){
    ul.innerHTML = '';

    for (x of lista){
        var pos = lista.indexOf(x); //posição do item do array

        var li = document.createElement("li");
        var texto = document.createTextNode(x);
        li.appendChild(texto);
        ul.appendChild(li);

        var apagar = document.createElement("a");
        apagar.setAttribute('href', '#');
        apagar.setAttribute('onclick', 'excluirItem('+pos+')');
        li.appendChild(apagar);

        var icon = document.createElement("img");
        icon.setAttribute('src', 'img/close.png');
        icon.setAttribute('title', 'Remover');
        icon.setAttribute('width', '14px');

        apagar.appendChild(icon);

        console.log(apagar);

    }
}

renderizar();

btn.onclick = function(){
    if (inp.value != ''){
        lista.push(inp.value);
        inp.value = '';
        renderizar();
        armazenaLocal();
    } else {
        alerta.innerHTML = '';
        alerta.appendChild(document.createTextNode('Insira uma tarefa antes de acionar o botão!'));
    }

}

function excluirItem(pos){
    lista.splice(pos, 1);
    renderizar();
    armazenaLocal();
}

function armazenaLocal(){
    localStorage.setItem('lista_local', JSON.stringify(lista));
}