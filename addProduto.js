const btn = document.querySelectorAll('.btn-sm')

const quantidadeDeItem = document.querySelector('.navbar-tool-label');
const produtoAped = document.querySelector('.content-widget-cart-item');


/**
 *<div class="widget-cart-item">
    <div class="d-card">
        <a class="d-block" href="shop-single-v2.html">
            <img  src="imagens/maouse.webp" width="64" alt="Product">
        </a>
        <div class="ps-2">
            <h6 class="widget-product-title">
                <a href="">Cloud Security Camera</a>
            </h6>
            <div class="widget-product-meta">
                <span class="text-accent me-2">$122.<small>00</small></span>
                <span class="text-muted">x 1</span>
            </div>
        </div>
    </div>
</div>

 */


const lista = [];

btn.forEach(btn => {
    btn.addEventListener("click", function() {
        const imagemDoProduto = document.querySelector('.imagem-ofertas');
        const nomeDoProduto = document.querySelector('.titlePOferta');
        const valorDoProduto = document.querySelector('.preco-oferta');
        const item = {
            imagem: imagemDoProduto,
            nome: nomeDoProduto,
            valor: +valorDoProduto
        }
        lista.push(item);
        quantidadeDeItem.innerHTML = lista.length;




        const cardItem = document.createElement('div');
        cardItem.setAttribute('class', 'widget-cart-item');

        const dCard = document.createElement('div');
        dCard.setAttribute('class', 'd-card')
        cardItem.append(dCard);

        const dBlock = document.createElement('a');
        dBlock.setAttribute('class', 'd-block')
        dCard.append(dBlock);

        const imagemProduto = document.createElement('img');
        imagemProduto.setAttribute('src', "img")
        dBlock.append(imagemDoProduto);


        const ps2 = document.createElement('div');
        ps2.setAttribute("class", "ps-2")
        dCard.append(ps2);

        const titulo = document.createElement('h6')
        titulo.setAttribute('class', "widget-product-title")
        ps2.append(titulo);
        titulo.innerHTML = "Cloud Security Camera";


        const valore = document.createElement('div');
        valore.setAttribute('class', 'widget-product-meta')
        ps2.append(valore);

        const spanValorDoProduto = document.createElement('span');
        spanValorDoProduto.setAttribute('class', 'text-accent');
        valore.append(spanValorDoProduto);
        spanValorDoProduto.innerHTML = 200;



        const spanQuantidade = document.createElement('span')
        spanQuantidade.setAttribute('class', 'text-muted')
        valore.append(spanQuantidade);
        spanQuantidade.innerHTML = "x 1";

        produtoAped.append(cardItem);



    });
});