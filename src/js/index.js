/*
1º quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostar o cartão correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos?
1- listagem;
2 - cartão do pokemon

precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com o evento de clique feito pelo usuário na listagem de pokemons

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
- remover a classe ativo que marca o pokemon selecionado
- add a classe ativo no item da lista selecionado
*/

//precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemon.forEach(pokemon => {
    //vamos precisar trabalhar com o evento de clique feito pelo usuário na listagem de pokemons

    
    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está abert
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //add a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})

