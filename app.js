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

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];


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
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/cielo.jpg')
        cards[optionTwoId].setAttribute('src', 'images/cielo.jpg')
        alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert("You found a match!")
        cards[optionOneId].setAttribute('src', 'images/blanco.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blanco.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/cielo.jpg')
        cards[optionTwoId].setAttribute('src', 'images/cielo.jpg')
        alert("sorry play again")
    }
    console.log(cardsWon.length)
    //resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
    if(cardsChosen.length !== 0) {
        console.log("se elimino")
    }
    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = "Congratulations, you found them all!"
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)    /// pone un atributo a la img de html
    if(cardsChosen.length === 2) {   
        setTimeout( checkMatch, 500)
    }
}

