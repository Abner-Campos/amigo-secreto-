let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomeAmigo);  
        document.getElementById('amigo').value = '';  // Limpa o campo
        exibirAmigos();  // Atualiza a lista de amigos
    }
}

function exibirAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpa a lista antes de adicionar

    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para detectar o ENTER e adicionar o amigo
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();  
    }
});

// Função para sortear amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    // Copia e embaralha a lista de amigos
    let amigosSorteados = [...amigos];
    amigosSorteados = amigosSorteados.sort(() => Math.random() - 0.5);

    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let amigoSorteado = amigosSorteados[i];
        let amigoDado = amigosSorteados[(i + 1) % amigosSorteados.length];  
        resultado.push(`${amigoSorteado} -> ${amigoDado}`);
    }

    exibirResultado(resultado); 
}

function exibirResultado(resultado) {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = '';  // Limpa o conteúdo antes de exibir os novos resultados

    resultado.forEach(function(sorteio) {
        const li = document.createElement('li');
        li.textContent = sorteio;
        resultadoList.appendChild(li);
    });
}
