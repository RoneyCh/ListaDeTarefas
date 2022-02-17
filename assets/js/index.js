const tarefa = document.querySelector('.nova-tarefa');
const btn = document.querySelector('.btn-tarefa');
const list = document.querySelector('.tarefas');

btn.addEventListener('click', () => {
    if(!tarefa.value) return;
    criaTarefa(tarefa.value);
})

const criaLi = () => {
    return document.createElement('li');
}

tarefa.addEventListener('keyup', (e) => {
    if(!tarefa.value) return;
    if(e.keyCode === 13) {
        criaTarefa(tarefa.value);
    }
});

const limpaInput = () => {
    tarefa.value = '';
    tarefa.focus();
}

const apagarTarefa = (li) => {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'X';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', (e) => {
    const el = e.target;
    el.classList.contains('apagar') ? el.parentElement.remove() : null;
})

const criaTarefa = (txtInput) => {
    const li = criaLi();
    li.innerHTML = txtInput;
    list.appendChild(li);
    limpaInput();
    apagarTarefa(li);
}