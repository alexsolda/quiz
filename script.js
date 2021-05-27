let i = 0;
let respostas = [];
let resultadoFinal = 0;
const titulo = document.querySelector('.modal-title');
const proximo = document.querySelector('.bt-proximo');
const alt = document.querySelector('#alternativas-body');
const alertModal = document.querySelector('.modal-content');
const reset = document.querySelector('#btn-desistir').addEventListener('click', () => {
    document.location.reload(true)
});
proximo.addEventListener('click', () => {
    if (!op1.classList.contains('active') && !op2.classList.contains('active')) {
        alertModal.classList.add('miss-answer');
        return
    } else {
        alertModal.classList.remove('miss-answer');
    };
    if (op1.classList.contains('active')) {
        respostas.push(op1.getAttribute('value'));
    } else {
        respostas.push(op2.getAttribute('value'));
    };
    if (i == (perguntas.length - 1)) {
        proximo.innerHTML = 'Resultado';
        calcularResultado(respostas);
    }
    i += 1
    atualizar(i);
    console.log(respostas)
})

function atualizar(indice = 0) {
    if (indice < perguntas.length) {
        titulo.innerHTML = `<h3 class="titulo-pergunta">${perguntas[indice].id}</h3>`;
        alt.innerHTML = `
            <label class="btn btn-lg btn-block btn-op" id='op1' value=${perguntas[indice].r1}>
                <input type="radio" name="options" id="option1"> ${perguntas[indice].r1}
            </label>   
            <label class="btn btn-lg btn-block btn-op" id='op2' value=${perguntas[indice].r2}>
                <input type="radio" name="options" id="option2"> ${perguntas[indice].r2}
            </label>`
    } else {
        titulo.innerHTML = `<h3 class="titulo-pergunta">Resultado!</h3>`;
        if(resultadoFinal <= 4) {
            alt.innerHTML = `<p class="total-resultado text-danger">${resultadoFinal} / ${perguntas.length}</p>
            <img class="img-result" src=${imgResult[0].src}>`
        }else if(resultadoFinal >= 5 && resultadoFinal <= 7) {
            alt.innerHTML = `<p class="total-resultado text-primary">${resultadoFinal} / ${perguntas.length}</p>
            <img class="img-result" src=${imgResult[1].src}>`
        }else if(resultadoFinal >= 8 && resultadoFinal < 10) {
            alt.innerHTML = `<p class="total-resultado text-success">${resultadoFinal} / ${perguntas.length}</p>
            <img class="img-result" src=${imgResult[2].src}>`
        }else {
            alt.innerHTML = `<p class="total-resultado text-success">${resultadoFinal} / ${perguntas.length}</p>
            <img class="img-result" src=${imgResult[3].src}>`
        }
    };

    let op1 = document.querySelector('#op1');
    let op2 = document.querySelector('#op2');
}

function calcularResultado(arr) {
    for (let y = 0; y < perguntas.length; y++) {
        if (arr[y] == perguntas[y].resp) {
            resultadoFinal += 1;
        }
    }

    return resultadoFinal;
}

atualizar();