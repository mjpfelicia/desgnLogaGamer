
// modal logim
const closeBut = document.getElementsByClassName('close')[0],
    modal = document.getElementsByClassName('modal-cont')[0],
    cancelBut = document.getElementsByClassName('cancel')[0],
    loginBut = document.getElementsByClassName('login')[0];
    

function x () {
    modal.style.display = "none";
}
closeBut.onclick = x;
cancelBut.onclick = x;

loginBut.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function (e) {
    if (e.target.className === 'modal-cont'){
        e.target.style.display = 'none';
    }
}
// fim do modal

'use strict';

(function () {
  var tablist = document.querySelectorAll('[role="tablist"]')[0];
  var tabs;
  var panels;
  var delay = determineDelay();

  generateArrays();

  function generateArrays() {
    tabs = document.querySelectorAll('[role="tab"]');
    panels = document.querySelectorAll('[role="tabpanel"]');
  }

  // Para fácil referência
  var keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46,
  };

  // Adiciona ou subtrai dependendo da tecla pressionada
  var direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1,
  };

 // Vincula os ouvintes
  for (var i = 0; i < tabs.length; ++i) {
    addListeners(i);
  }

  function addListeners(index) {
    tabs[index].addEventListener('click', clickEventListener);
    tabs[index].addEventListener('keydown', keydownEventListener);
    tabs[index].addEventListener('keyup', keyupEventListener);

    // Construir um array com todas as guias (<button>s) nele
    tabs[index].index = index;
  }

 // Quando uma aba é clicada, activateTab é acionado para ativá-la
  function clickEventListener(event) {
    var tab = event.target;
    activateTab(tab, false);
  }

  // Manipula o keydown nas guias
  function keydownEventListener(event) {
    var key = event.keyCode;

    switch (key) {
      case keys.end:
        event.preventDefault();
       // Ativa a última aba
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
       // Ativa a primeira aba
        activateTab(tabs[0]);
        break;

     // Para cima e para baixo estão em keydown
      // porque precisamos evitar a rolagem da página >:)
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
    }
  }

  // Manipula o keyup nas abas
  function keyupEventListener(event) {
    var key = event.keyCode;

    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
      case keys.delete:
        determineDeletable(event);
        break;
    }
  }

  // Quando a orientação da ária de uma tablist é definida como vertical,
  // apenas as setas para cima e para baixo devem funcionar.
  // Em todos os outros casos apenas a função de seta para a esquerda e para a direita.
  function determineOrientation(event) {
    var key = event.keyCode;
    var vertical = tablist.getAttribute('aria-orientation') == 'vertical';
    var proceed = false;

    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      }
    } else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      }
    }

    if (proceed) {
      switchTabOnArrowPress(event);
    }
  }

 // Focalize a próxima, anterior, primeira ou última guia
  // dependendo da tecla pressionada
  function switchTabOnArrowPress(event) {
    var pressed = event.keyCode;

    for (var x = 0; x < tabs.length; x++) {
      tabs[x].addEventListener('focus', focusEventHandler);
    }

    if (direction[pressed]) {
      var target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        } else if (pressed === keys.left || pressed === keys.up) {
          focusLastTab();
        } else if (pressed === keys.right || pressed == keys.down) {
          focusFirstTab();
        }
      }
    }
  }

 // Ativa qualquer painel de abas
  function activateTab(tab, setFocus) {
    setFocus = setFocus || true;
   // Desativa todas as outras abas
    deactivateTabs();

   // Remove o atributo tabindex
    tab.removeAttribute('tabindex');

   // Define a guia como selecionada
    tab.setAttribute('aria-selected', 'true');

   // Obtém o valor de aria-controls (que é um ID)
    var controls = tab.getAttribute('aria-controls');

  // Remove a classe está oculta do painel de guias para torná-la visível
    document.getElementById(controls).classList.remove('is-hidden');

   // Define o foco quando necessário
    if (setFocus) {
      tab.focus();
    }
  }

  // Desativa todas as abas e painéis de abas
  function deactivateTabs() {
    for (var t = 0; t < tabs.length; t++) {
      tabs[t].setAttribute('tabindex', '-1');
      tabs[t].setAttribute('aria-selected', 'false');
      tabs[t].removeEventListener('focus', focusEventHandler);
    }

    for (var p = 0; p < panels.length; p++) {
      panels[p].classList.add('is-hidden');
    }
  }

  // Adivinhe
  function focusFirstTab() {
    tabs[0].focus();
  }

  // Adivinhe
  function focusLastTab() {
    tabs[tabs.length - 1].focus();
  }
// Detecta se uma aba é deletável
  function determineDeletable(event) {
    var target = event.target;

    if (target.getAttribute('data-deletable') !== null) {
      // Excluir guia de destino
      deleteTab(event, target);

      // Atualiza arrays relacionados ao widget de abas
      generateArrays();

      // Ativa a aba mais próxima daquela que acabou de ser deletada
      if (target.index - 1 < 0) {
        activateTab(tabs[0]);
      } else {
        activateTab(tabs[target.index - 1]);
      }
    }
  }

  // Exclui uma aba e seu painel
  function deleteTab(event) {
    var target = event.target;
    var panel = document.getElementById(target.getAttribute('aria-controls'));

    target.parentElement.removeChild(target);
    panel.parentElement.removeChild(panel);
  }

 // Determina se deve haver um atraso
  // quando o usuário navega com as teclas de seta
  function determineDelay() {
    var hasDelay = tablist.hasAttribute('data-delay');
    var delay = 0;

    if (hasDelay) {
      var delayValue = tablist.getAttribute('data-delay');
      if (delayValue) {
        delay = delayValue;
      } else {
       // Se nenhum valor for especificado, o padrão é 300ms
        delay = 300;
      }
    }

    return delay;
  }

  
  function focusEventHandler(event) {
    var target = event.target;

    setTimeout(checkTabFocus, delay, target);
  }

  // Só ativa a aba em foco se ainda tiver foco após o atraso
  function checkTabFocus(target) {
    var focused = document.activeElement;

    if (target === focused) {
      activateTab(target, false);
    }
  }
})();
