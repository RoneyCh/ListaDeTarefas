const tarefa = document.querySelector('.nova-tarefa');
const btn = document.querySelector('.btn-tarefa');
const list = document.querySelector('.tarefas');

btn.addEventListener('click', () => {
    if(!tarefa.value) return;
    criaTarefa(tarefa.value);
})

tarefa.addEventListener('keyup', (e) => {
    if(!tarefa.value) return;
    if(e.keyCode === 13) {
        criaTarefa(tarefa.value);
    }
});

const criaTarefa = (txtInput) => {
    const li = criaLi();
    li.innerHTML = txtInput;
    list.appendChild(li);
    limpaInput();
    apagarTarefa(li);
    salvarTarefa();
}

const criaLi = () => {
    return document.createElement('li');
}

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
    salvarTarefa();
});

const salvarTarefa = () => {
    const liTarefas = list.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('X', '').trim();
        listaDeTarefas.push(tarefaTexto);
        
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON);
    console.log(tarefaJSON);
}

const addTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
addTarefasSalvas();