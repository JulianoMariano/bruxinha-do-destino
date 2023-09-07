const elementResponse = document.querySelector("#response")
const inputQuestion = document.querySelector("#inputQuestion")
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

  if(inputQuestion.value == "") {
    alert("Por favor, digite sua pergunta no campo acima !!!")
    return
  }

  const Question = "<div>" + inputQuestion.value + "</div>"
  
  const totalResponses = responses.length
  const aleatoryNumber = Math.floor(Math.random() * totalResponses)

  elementResponse.innerHTML = Question + responses[aleatoryNumber]
}
