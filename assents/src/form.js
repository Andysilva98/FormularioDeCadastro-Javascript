

function teste() {
  let nome = document.getElementById('nome')
  let tel = document.getElementById('tel')
  let xp = document.querySelector('input[name="client"]:checked');
  let url = new URL(window.location.href)
  let id = url.search.replace('?', '')

  xp == null ? xp = '': false
 
  validaForm(nome,tel,xp) 
 
  
  let valores = {
        nome: nome.value,
        tel: tel.value,
        xp: xp.value
    }
  //console.log(xp.value)
    
  
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




function validaForm(nome,tel,xp) {
  let nomeErro = document.querySelector('#areaNome')
  let telErro = document.querySelector('#areaTel')
  let xpErro = document.querySelector('#xp')
  let regexNome = /([^a-zA-Z][\W]+)/.test(nome.value)
  //regexNome.trim()
   //ira verificar se o nome começa com numeros e buscara caracteres especiais, o trim() remove espaços desnecessarios
  let regexTel = /[^0-9]+/.test(tel.value)


  if (!regexNome) {
    msgErro("oops!", nomeErro)
    console.log(regexNome)
  }
   if (!regexTel) {
    msgErro("Favor selecionar uma das opções acima!", telErro)
  }
   if (!xp.value) {
    msgErro("Favor selecionar uma das opções acima!", xpErro)
  } 
}


function msgErro(msg, divErro) {
  let criaDiv =  document.createElement("div")
  let texto = document.createTextNode(msg)
  console.log(divErro)
  

  if (divErro.lastChild.classList) {
    document.querySelector('.novaDiv').remove()

  }
    
    criaDiv.appendChild(texto)  
    divErro.appendChild(criaDiv)
    criaDiv.classList.add('novaDiv')
    criaDiv.style.color = 'red'
    criaDiv.style.fontSize = '16px'
    criaDiv.style.textAlign = 'center'
    return false
}



  
 
  console.log(/^[^a-zA-Z]/.test('9ae5- sf.'))