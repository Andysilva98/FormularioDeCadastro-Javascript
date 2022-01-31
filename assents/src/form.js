let validaNome = document.getElementById('nome')
validaNome.addEventListener('focus', e => {
  e.preventDefault()
  e.target.value = ''
});
validaNome.addEventListener('keypress', e => {
  e.preventDefault()
  if ((/[a-zA-Z ?]/).test(e.key)) {
    e.target.value += e.key
  }
});


let validaTel = document.getElementById('tel')
validaTel.addEventListener('focus', e => {
  e.preventDefault()
  e.target.value = ''
});
validaNome.addEventListener('keypress', e => {
  e.preventDefault()
  if ((/[0-9]/).test(e.key)) {
    e.target.value += e.key
  }
});

let url = new URL(window.location.href)
let id = url.search.replace('?', '')



function enviaForm(e) {
  e.preventDefault()
  let nome = document.getElementById('nome')
  let tel = document.getElementById('tel')
  let xp = document.querySelector('input[name="client"]:checked');
  
  xp == null ? xp = '': false
 
  validaForm(xp) 
 
  
  let valores = {
        nome: nome.value,
        tel: tel.value,
        xp: xp.value
    }    
  
  let dados = JSON.parse(localStorage.getItem("Cadastro"))
    
  if (dados == null) {
      localStorage.setItem('Cadastro', [])
      dados = [] 
  }
  
  if (id == '') {
   dados.push(valores)    
  } else {    
    dados.splice(id, 1, valores)
  }
    
  //localStorage.setItem('Cadastro', JSON.stringify(dados))  
  //window.location.href = '../../index.html'

}


function validaForm(xp) {
  let xpErro = document.querySelector('#xp')  

  if (!xp.value) {
    msgErro("Favor selecionar uma das opções acima!", xpErro)
  } 
  
}

function msgErro(msg, divErro) {
  let criaDiv =  document.createElement("div")
  let texto = document.createTextNode(msg)  
  criaDiv.classList.add('novaDiv')


  if(Boolean(divErro.children[5])) divErro.children[5].remove()
    
    console.log(Boolean(divErro.children[5]))
    
    criaDiv.appendChild(texto)  
    divErro.appendChild(criaDiv)
    
    criaDiv.style.color = 'red'
    criaDiv.style.fontSize = '16px'
    criaDiv.style.textAlign = 'center'
  
    
}


  
