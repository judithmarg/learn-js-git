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

function createBoard () {
    for (let i = 0; i < 10; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/cielo.jpg')
        card.setAttribute('data-id',i)
        gridDisplay.appendChild(card)
        console.log(card,id)
    }
}
createBoard()

function checkMatch(){
    console.log("pruebitaa")
}