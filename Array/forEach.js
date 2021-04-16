const aprovados = ['Willian', 'Nathan', 'Airan']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)