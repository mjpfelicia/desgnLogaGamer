import { addItemCarrinho } from "./addProduto.js"
const btn2 = document.querySelectorAll('.btn-parcelemento');
const quantidadeDeItem2 = document.querySelector('.navbar-tool-label');
const produtoAped2 = document.querySelector('.content-widget-cart-item');

const lista2 = [];

btn2.forEach(btnAdd => {
    btnAdd.addEventListener("click", function(ev) {

        const parentElement1 = ev.target.parentElement;
        const parentElement2 = parentElement1.parentElement;
        const parentElement3 = parentElement2.parentElement;
        const parentElement4 = parentElement3.parentElement;


        console.log({
            parentElement4,
            parentElement3,
            parentElement2
        });

        const imgSrc1 = parentElement4.children[0].currentSrc;
        const preco1 = parentElement3.children[1].children[0].children[1].innerText;
        const tituloProduto1 = parentElement3.children[0].innerText;

        console.log({ tituloProduto1 })
        console.log({ preco1 })

        console.log({ imgSrc1: parentElement4.children[0].children[0] });


        quantidadeDeItem2.innerText = `${+quantidadeDeItem2.innerText+1}`;


        addItemCarrinho(imgSrc1, tituloProduto1, preco1);

    });
});