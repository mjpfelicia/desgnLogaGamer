const Carrinho = []
let Total = 0;
$('.btn-compra').on('click', function () {
    const imageSrc = $(this)[0].offsetParent.children[1].src;
    const title = $(this)[0].parentElement.children[0].innerText;
    const valor = $(this)[0].parentElement.children[2].innerText;

    const valorcovertido = +(valor.replace(/\D/ig, "").split("").slice(0, -2).join("") + "." + valor.replace(/\D/ig, "").split("").slice(-2).join(""))

    renderCar({ nome: title, valor: valorcovertido, src: imageSrc })
})

function renderCar(item) {
    // criando elementos
    const img = document.createElement('img');
    const div = document.createElement('div');
    const li = document.createElement('li');
    const h5 = document.createElement('h5');
    const texto = document.createElement('p');
    const dineiro = new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' }).format(+item.valor)
    img.src = item.src;
    img.width = 100;
    // add class para css
    li.classList.add("d-flex")
    div.classList.add("d-flex", "align-items-start", "flex-column");
    h5.classList.add("fs-6");
    texto.classList.add("text-success")

    // add na tela 
    li.append(img)
    h5.innerText = item.nome;
    texto.innerText = dineiro;
    div.append(h5);
    div.append(texto);
    li.append(div);


    $('#carrinho').append(li)

    Total = parseFloat(Total) + parseFloat(item.valor)
    const money = new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' }).format(Total)
    $('#total').text(money)
}