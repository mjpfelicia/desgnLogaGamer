const objCarrinho = []
let Total = 0

renderCar()

$('.btn-compra').on('click', function () {
    const title = $(this)[0].parentElement.children[0].innerText;
    const valor = $(this)[0].parentElement.children[2].innerText;


    const valorcovertido = +(valor.replace(/\D/ig, "").split("").slice(0, -2).join("") + "." + valor.replace(/\D/ig, "").split("").slice(-2).join(""))
    
    
    console.log({valorcovertido})

    objCarrinho.push({ nome: title, valor:valorcovertido })
    console.log({objCarrinho})

    renderCar()
})

function renderCar() {
    objCarrinho.map(function (item) {
        console.log({item})
        let content = `<li>${item.nome} - R$ ${item.valor}</li>`

        $('#carrinho').append(content)

        Total = parseFloat(Total) + parseFloat(item.valor)

        $('#total').text(Total)
    })
}