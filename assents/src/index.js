let lista = JSON.parse(localStorage.getItem('Cadastro'))
let listArea = document.getElementById('listArea')


function carregaLista() { 
    
    listArea.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Experiência Prévia</th>
            <th>Ações</th>
        </tr>    
    `

    for (const key in lista) {
        
        const element = lista[key];

        listArea.innerHTML += `
                
            <tr>                        
                <td style>${element.nome}</td>
                <td>${element.tel}</td>
                <td
                    style="color:${(element.xp == 'Sim' ? 'greenyellow' : 'red')};
                    font-weight: bolder;">
                    ${element.xp}
                </td>
                <td>
                    <button name='excluir' value='${key}'>excluir</button>
                    <button name='editar'  value='${key}'>Editar</button>
                </td>
            </tr>  
        `       
    }    
}
carregaLista()

function excluirLista() {
    
    addEventListener('click', (e) => {
        
        if(e.target.name != 'excluir') return
        
        listArea.innerHTML = ''        
        lista.splice(e.target.value, 1)
        lista = lista
        localStorage.removeItem('Cadastro')
        localStorage.setItem('Cadastro', JSON.stringify(lista))
        carregaLista()
    })
}

excluirLista()


function editaLista() {
    
    addEventListener('click', (e) => {      
        
        if(e.target.name != 'editar') return
        window.location.href = 'assents/src/form.html?Cadastro=' + e.target.value
    })
}

editaLista()



