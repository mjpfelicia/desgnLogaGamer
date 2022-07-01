const btn = document.querySelectorAll('.btn-sm');
const valoDoProduto = document.querySelector('.preco-oferta').value;
const produto = document.querySelector('.produto');
const contadorProduto = document.querySelector('#contadorProduto')
const lista = [];

btn.forEach(btnAdd => {
    btnAdd.addEventListener("click", addProduto);
});

function addProduto(evento){
    const produto = {};
    
    console.log({ target: evento.target })
    lista.push(produto);
    contadorProduto.innerHTML = lista.length;

    return lista;
}

