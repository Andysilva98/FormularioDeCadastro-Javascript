let validaNome = document.getElementById('nome')
  validaNome.addEventListener('keypress', e => {
    e.preventDefault()
    if ((/[a-zA-Z ?]/).test(e.key)) {
      e.target.value += e.key
    }
  });

let validaTel = document.getElementById('tel')
  validaTel.addEventListener('keypress', e => {
    e.preventDefault()
    if ((/[0-9]/).test(e.key) && (validaTel.value.length < 11)) {
      validaTel.value += e.key  
    }
  });


let url = new URL(window.location.href)
let id = url.searchParams.get('Cadastro')
let dados = JSON.parse(localStorage.getItem("Cadastro"))
let nome = document.getElementById('nome')
let tel = document.getElementById('tel')


if (id !== null) {
  nome.value = dados[id].nome
  tel.value = dados[id].tel
}

function enviaForm(e) {
  e.preventDefault()
  let xp = document.querySelector('input[name="client"]:checked');
     
  
  if (xp == null) {
    validaForm()
    return    
  }
  if (validaNome.value.length < 2 || validaTel.value.length < 10) return
  
  let valores = {
        nome: nome.value,
        tel: tel.value,
        xp: xp.value
    }    
      
  if (dados == null) {
      localStorage.setItem('Cadastro', [])
      dados = [] 
  }
  
  if (id === null) {
   dados.push(valores)    
  } else {    
    dados.splice(id, 1, valores)
  }
    
  localStorage.setItem('Cadastro', JSON.stringify(dados))  
  window.location.href = '../../index.html'

}


function validaForm() {

    console.log('passei aqui')  
    let divErro = document.querySelector('#xp')  
    let criaDiv =  document.createElement("div")
    let texto = document.createTextNode("Favor selecionar uma das opções acima!")
    if (divErro.children[5]) divErro.children[5].remove()
    
    criaDiv.classList.add('novaDiv')
    criaDiv.appendChild(texto)  
    divErro.appendChild(criaDiv)
      
    criaDiv.style.color = 'red'
    criaDiv.style.fontSize = '16px'
    criaDiv.style.textAlign = 'center'
  
}


  
