document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'The bottle is empty.'
    },
    {
      name: '1',
      img: "De fles is leeg."
    },
    {
      name: '2',
      img: 'Do you have any bottle?'
    },
    {
      name: '2',
      img: "Heb je een fles?"
    },
    {
      name: '3',
      img: 'No, I don´t have any bottle.'
    },
    {
      name: '3',
      img: 'Nee, ik heb geen fles.'
    },
    {
      name: '4',
      img: 'I have to go home.'
    },
    {
      name: '4',
      img: "Ik moet naar huis."
    },
    {
      name: '5',
      img: 'Why do you have to go?'
    },
    {
      name: '5',
      img: "Waarom moet je gaan?"
    },
    {
      name: '6',
      img: 'I´m very tired.'
    },
    {
      name: '6',
      img: "Ik ben heel moe."
    },
    {
      name: '7',
      img: 'Where is your car?'
    },
    {
      name: '7',
      img: "Waar is je auto?"
    },
    {
      name: '8',
      img: 'I don´t remember.'
    },
    {
      name: '8',
      img: "Ik herinner het me niet."
    },
    {
      name: '9',
      img: 'I´ve got a present for you.'
    },
    {
      name: '9',
      img: "Ik heb een cadeau voor jou."
    },
    {
      name: '10',
      img: "Ik wil het zien."
    },
    {
      name: '10',
      img: 'I want to see it.'
    },
    {
      name: '11',
      img: 'Het is groot en mooi.'
    },
    {
      name: '11',
      img: 'It ´s big and beautiful.'
    },
    {
      name: '12',
      img: 'Give me the box.'
    },
    {
      name: '12',
      img: 'Geef me de kist.'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

cards[optionOneId].parentElement.classList.remove("green")
      

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 4 completed!</h2><a href='https://elaidina.github.io/nl/level5.html'> Continue to Level 5</a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
