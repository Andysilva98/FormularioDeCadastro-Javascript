

function teste() {
  let nome = document.getElementById('nome')
  let tel = document.getElementById('tel')
  let xp = document.querySelector('input[name="client"]:checked');
  let url = new URL(window.location.href)
  let id = url.search.replace('?', '')


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


  if (xp.checked) {  
     return validaForm()
  }
  
  if (id == '') {
   dados.push(valores)    
  } else {    
    dados.splice(id, 1, valores)
  }
    
  localStorage.setItem('Cadastro', JSON.stringify(dados))  
  window.location.href = '../../index.html'

}




function validaForm() {
  let x = document.querySelector('input[name="client"]')
  let divErro =  document.createElement("div")
  let texto  = document.createTextNode("Favor selecionar uma das opções acima!");
  divErro.appendChild(texto)  
  document.getElementById('xp').appendChild(divErro)
  divErro.style.color = 'red'
  divErro.style.fontSize = '16px'
  divErro.style.textAlign = 'center'
   
}

 
