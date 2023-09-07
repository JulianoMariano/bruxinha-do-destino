const elementResponse = Document.querySelector("#response")
const inputQuestion = Document.querySelector("#inputQuestion")
const responses = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

function askQuestion () {

  if (inputQuestion.value == "") {
    alert("Digite sua pergunta!!!")
    return
  }
  
  const totalResponses = responses.length
  const aleatoryNumber = Math.floor(Math.random() * totalResponses)

  elementResponse.innerHTML = responses[aleatoryNumber]
}
