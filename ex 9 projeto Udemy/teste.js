 function meuescopo(){
    let form = document.querySelector('.form')
    let resultado = document.querySelector('.resultado')

    let pessoas = []

    function recebeecentoform(evento){
        evento.preventDefault()

        let nome = form.querySelector('.nome').value
        let Sobrenome = form.querySelector('.Sobrenome').value
        let Peso = form.querySelector('.Peso').value
        let Altura = form.querySelector('.Altura').value

        pessoas.push({
            nome: nome,
            Sobrenome: Sobrenome,
            Peso: Peso,
            Altura: Altura
        })

        resultado.innerHTML += ` <p>${nome.value} ${Sobrenome.value}${Peso.value}${Altura.value} <p>`
        
        console.log(pessoas)
    }
    form.addEventListener('submit',recebeecentoform)

    
 }

 meuescopo()


