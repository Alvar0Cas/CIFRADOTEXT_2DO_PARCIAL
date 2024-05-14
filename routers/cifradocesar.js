'use strict';
((window, document, undefined) => {
  let frm = document.getElementById('exer17');
  let containerDat = document.getElementById('exe17response');
  let container2 = document.getElementById('exe17response2');
  let txtNormal = document.getElementById('exe17txtNormal');
  
  frm.addEventListener('submit', e => {
    e.preventDefault();
    let tx = document.getElementById('txt').value;
    txtNormal.textContent = tx;
    container2.innerHTML = '';
    let alfabeto = 'abcdefghijklmnñopqrstuvwxyz';
    containerDat.innerHTML = '';
    let rspt = cifradoCesar(tx, alfabeto, 3);
    document.getElementById('txt').value = '';
  });

  const cifradoCesar = (txt, alfabeto, movimientos) => {
    let cifrado = '',
        aux,
        abcMa = alfabeto.toUpperCase(),
        cr,
        index,
        time = 0,
        caracterCifrado,
        left = 0;

    for (let i = 0; i < txt.length; i++) {
      setTimeout(() => {
        cr = txt.charAt(i);
        index = alfabeto.indexOf(cr);
        if (index == -1) {
          index = abcMa.indexOf(cr);
          aux = abcMa;
        } else {
          aux = alfabeto;
        }
        caracterCifrado = index != -1 ? nextPost(aux, index, movimientos) : cr;
        cifrado += caracterCifrado;
        printLetter(caracterCifrado);
      }, time);
      time += 1000;
    }
    return cifrado;
  };

  const nextPost = (abc, index, movimientos) => {
    index += movimientos;
    if (index >= abc.length) {
      index = index - abc.length;
    }
    return abc.charAt(index);
  };

  const printLetter = (caracterCifrado) => {
    let div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.position = 'relative';

    let span1 = document.createElement('span');
    span1.classList.add('animate-letter');
    span1.innerHTML = `${caracterCifrado}`;

    let span2 = document.createElement('span');
    span2.innerHTML = `${caracterCifrado}`;
    span2.classList.add('text');

    div.appendChild(span1);
    div.appendChild(span2);

    containerDat.appendChild(div);
    container2.innerHTML += `${caracterCifrado}`;
  };
})(window, document);
