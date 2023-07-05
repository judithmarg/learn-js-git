const cardArray = [
    {
        name: 'armino',
        img: 'images/armiño.jpeg',
    },
    
    {
        name: 'flores',
        img: 'images/flores.jpg',
    },
    {
        name: 'papa',
        img: 'images/papa.jpg',
    },
    {
        name: 'peach',
        img: 'images/peach.jpg',
    },
    {
        name: 'perrito',
        img: 'images/perrito.jpg',
    },
    {
        name: 'rosa',
        img: 'images/rosa.jpg',
    },
    {
        name: 'armino',
        img: 'images/armiño.jpeg',
    },
    
    {
        name: 'flores',
        img: 'images/flores.jpg',
    },
    {
        name: 'papa',
        img: 'images/papa.jpg',
    },
    {
        name: 'peach',
        img: 'images/peach.jpg',
    },
    {
        name: 'perrito',
        img: 'images/perrito.jpg',
    },
    {
        name: 'rosa',
        img: 'images/rosa.jpg',
    }
]

/**
 * {
        name: 'blanco',
        img: 'images/blanco.jpg',
    },
    {
        name: 'cielo',
        img: 'images/cielo.jpg',
    },
 */

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/cielo.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    console.log('check for match!!')
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId])
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)    /// pone un atributo a la img de html
    if(cardsChosen.length === 2) {   
        setTimeout( checkMatch, 500)
    }
}

