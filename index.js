const _correctAnswers = [
    "Abstrações de objetos da vida real",
    "Conceito que estabelece que classes filhas não podem alterar o conjunto de entrada e/ou saida",
    "Class MinhaClasse implements Interface",
    "select * from",
    "CREATE TABLE IF NOT EXISTS tabela",
    "é uma coleção organizada de informações ou dados, estruturadas, normalmente armazenadas eletronicamente",
    "dentro da tag body",
    "link rel='stylesheet' href='style/main.css'",
    "é uma linguagem de programação"
]

function checkAnswers() {
    let correctAnswersQtd = 0
    let wrongAnswer = []

    const answers = [
        document.querySelector('input[name="q1-p1"]:checked').value,
        document.querySelector('input[name="q1-p2"]:checked').value,
        document.querySelector('input[name="q1-p3"]:checked').value,
        document.querySelector('input[name="q2-p1"]:checked').value,
        document.querySelector('input[name="q2-p2"]:checked').value,
        document.querySelector('input[name="q2-p3"]:checked').value,
        document.querySelector('input[name="q3-p1"]:checked').value,
        document.querySelector('input[name="q3-p2"]:checked').value,
        document.querySelector('input[name="q3-p3"]:checked').value
    ]

    _correctAnswers.map((v,i) => { 
        if (answers[i] == v) { 
            correctAnswersQtd++
        }else {
            wrongAnswer.push(i+1)
        }
    })

    if (wrongAnswer.length >= 1) {
        window.alert(`você acertou ${correctAnswersQtd}/${_correctAnswers.length}\nErrou a(s) questão(ões) ${wrongAnswer}`)
    }else {
        window.alert(`você gabaritou!`)
    }
}