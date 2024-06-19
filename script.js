console.log(pokemons)


let contenedorCards = document.getElementById("contenedor_cards");
let cardHTML = " "

for(let pokemon in pokemons ){
    //console.log(pokemons[pokemon])
    cardHTML +=crearcards(pokemon)

}

contenedorCards.innerHTML = cardHTML;

function crearcards(pokemon){

    let cards = document.createElement('div')
    cards.classList.add('card')

    let id = document.createElement('div')

    let name = document.createElement('p')

    let image =document.createElement('img')




    id.innerText = pokemons[pokemon].id
    name.innerText = pokemons[pokemon].name
    image.src = pokemons[pokemon].image




    cards.append(id, name, image)
    return cards.outerHTML
}


