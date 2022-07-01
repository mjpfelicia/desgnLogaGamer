const loginTab = document.querySelector('#loginTabLink')
const cadastroTab = document.querySelector('#loginTabCadastro');

const loginLink = document.querySelector('#loginLink');
const cadastroLink = document.querySelector('#loginModalLinkRegister');

loginLink.addEventListener('click', () => {
    loginTab.classList.add('show')
    cadastroTab.classList.remove('show')
})

cadastroLink.addEventListener('click', () => {
    cadastroTab.classList.add('show')
    loginTab.classList.remove('show')
})