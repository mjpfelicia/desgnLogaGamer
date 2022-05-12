const btn = document.querySelectorAll('.btn-sm');
const quantidadeDeItem = document.querySelector('.navbar-tool-label');
const produtoAped = document.querySelector('.content-widget-cart-item');
const valoTotalDaCompra = document.querySelector('#valor-text-accent');
const descontoDoProduto = document.querySelector('.preco-atual')
let total = 0;


btn.forEach(btnAdd => {
    btnAdd.addEventListener("click", function(ev) {

        const parentElement1 = ev.target.parentElement;
        const parentElement2 = parentElement1.parentElement;
        const parentElement3 = parentElement2.parentElement;

        console.log({
            parentElement1,
            parentElement2,
            parentElement3,
        });

        const imgSrc = parentElement3.childNodes[3].currentSrc
        const preco = parentElement1.children[0].children[2].innerText;
        const tituloProduto = parentElement2.children[0].innerText;
        const descontoDoProduto = parentElement1.children[0].children[0].children[0].innerHTML;

        quantidadeDeItem.innerText = `${+quantidadeDeItem.innerText+1}`;

        addItemCarrinho(imgSrc, tituloProduto, preco, descontoDoProduto);


    });
});


export function addItemCarrinho(urlImage = '', nomeProduto = '', precoProduto = '', descontoProduto = '') {

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

    const spanDescontoDoProduto = document.createElement('span');
    spanDescontoDoProduto.setAttribute('class', 'preco-atual-em-estoque');
    valore.append(spanDescontoDoProduto);
    spanDescontoDoProduto.innerHTML = descontoProduto;
    console.log({ spanDescontoDoProduto })

    const spanValorDoProduto = document.createElement('span');
    spanValorDoProduto.setAttribute('class', 'text-accent');
    valore.append(spanValorDoProduto);
    spanValorDoProduto.innerHTML = precoProduto;

    const spanQuantidade = document.createElement('span')
    spanQuantidade.setAttribute('class', 'text-muted')
    valore.append(spanQuantidade);
    spanQuantidade.innerHTML = "x 1";

    const trataValor = precoProduto.replace("R$", "").replace(".", "").replace(",", ".");
    total = total + Number(trataValor);


    valoTotalDaCompra.innerHTML = total;
    console.log({ total })

    produtoAped.append(cardItem);
}