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


        addItemCarrinho1(imgSrc1, tituloProduto1, preco1);

    });
});




function addItemCarrinho1(urlImage = '', nomeProduto = '', precoProduto = '') {

    const cardItem = document.createElement('div');
    cardItem.setAttribute('class', 'widget-cart-item');

    const dCard = document.createElement('div');
    dCard.setAttribute('class', 'd-card')
    cardItem.append(dCard);

    const dBlock = document.createElement('a');
    dBlock.setAttribute('class', 'd-block')
    dCard.append(dBlock);

    const imagemProduto = document.createElement('img');
    imagemProduto.setAttribute('width', 64)
    imagemProduto.setAttribute('src', urlImage)
    dBlock.append(imagemProduto);


    const ps2 = document.createElement('div');
    ps2.setAttribute("class", "ps-2")
    dCard.append(ps2);

    const titulo = document.createElement('h6')
    titulo.setAttribute('class', "widget-product-title")
    ps2.append(titulo);
    titulo.innerHTML = nomeProduto;


    const valore = document.createElement('div');
    valore.setAttribute('class', 'widget-product-meta')
    ps2.append(valore);

    const spanValorDoProduto = document.createElement('span');
    spanValorDoProduto.setAttribute('class', 'text-accent');
    valore.append(spanValorDoProduto);
    spanValorDoProduto.innerHTML = precoProduto;

    const spanQuantidade = document.createElement('span')
    spanQuantidade.setAttribute('class', 'text-muted')
    valore.append(spanQuantidade);
    spanQuantidade.innerHTML = "x 1";

    produtoAped2.append(cardItem);
}