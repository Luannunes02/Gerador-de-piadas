const piadas = [
    "Por que os fantasmas são péssimos para contar mentiras?Porque são transparentes",
    "Por que a plantinha não foi atendida no hospital?Porque só tinha médico de plantão.",
    "O que a Lua disse ao Sol? Nossa, você é tão grande e ainda não te deixam sair à noite!",
    "Você sabe por que a água foi presa?Porque ela matou a sede.",
    "Qual a cidade brasileira que não tem táxi?Uberlândia.",
    "Um eletricista vai até a UTI de um hospital, olha para os pacientes ligados a diversos tipos de aparelhos e diz-lhes: Respirem fundo: vou trocar o fusível.",
    "Qual a fórmula da água benta?H Deus O.",
    "Miguel, aonde vai tão circunspecto e assaz atribulado?Eu ia no banheiro, mas agora vou consultar um dicionário.",
    "Qual o contrário de papelada?Pá vestida.",
    "Contei uma piada química... não teve reação.",
    "Um canguru consegue pular mais alto que o Banespão?Claro, o Banespão não pula.",
    "O que o tijolo falou para o outro?Há um ciumento entre nós.",
    "O que o cadarço falou para o tênis?Eu me amarro em você.",
    "Por que o jacaré tirou o filho da escola?Porque ele réptil de ano.",
    "Como o Batman conheceu o Robin?Pelo bat-papo.",
    "Você sabe quem é o rei dos queijos?É o reiqueijão.",
    "Por que o porco está sempre feliz?Porque está de bacon a vida.",
    "Qual a diferença entre o gato e coca-cola? O gato mia e a coca light.",
    "Qual é o cúmulo da solidão?Morar sozinho e fugir de casa.",
    "Qual é o alimento mais sagrado que existe?O amém doim.",
    "Por que a mulher do Hulk divorciou-se dele?Porque ela queria um homem mais maduro…",
    "Você conhece a piada do fotógrafo? Ainda não foi revelada.",
    "Então, o que o pagodeiro foi fazer na igreja?Foi cantar Pá God.",
    "O que o cliente disse ao entrar na H.Stern?E aí, tudo joia?"]

function gerarPiada() {
    const quantPiadas = piadas.length
    const piadaAleatoria = Math.floor(Math.random()*quantPiadas)
    const piada = piadas[piadaAleatoria]

    document.getElementById("resposta").innerHTML = `${piada}`
}