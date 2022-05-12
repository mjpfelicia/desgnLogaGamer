var modalCheckout = document.getElementById("ModalmyBtnCheckout");

var btnCheckout = document.getElementById("myBtnCheckout");

var spanCheckout = document.getElementsByClassName("close")[0];

btnCheckout.onclick = function() {
    modalCheckout.style.display = "block";
}

spanCheckout.onclick = function() {
    modalCheckout.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalCheckout) {
        modalCheckout.style.display = "none";
    }
}