document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray =  [
    {
      name: '1',
      img: 'What´s your name?'
    },
    {
      name: '1',
      img: "Wat is je naam?"
    },
    {
      name: '2',
      img: 'How are you?'
    },
    {
      name: '2',
      img: "Hoe gaat het?"
    },
    {
      name: '3',
      img: 'I´m fine.'
    },
    {
      name: '3',
      img: "Het gaat goed."
    },
    {
      name: '4',
      img: 'What´s this?'
    },
    {
      name: '4',
      img: "Wat is dit?"
    },
    {
      name: '5',
      img: 'Where are you?'
    },
    {
      name: '5',
      img: "Waar ben je?"
    },
    {
      name: '6',
      img: 'I am at home.'
    },
    {
      name: '6',
      img: "Ik ben thuis."
    },
    {
      name: '7',
      img: 'Where are you going?'
    },
    {
      name: '7',
      img: "Waar ga je heen?"
    },
    {
      name: '8',
      img: 'I am so excited!'
    },
    {
      name: '8',
      img: "Ik ben zo opgewonden!"
    },
    {
      name: '9',
      img: 'How old are you?'
    },
    {
      name: '9',
      img: "Hoe oud ben je?"
    },
    {
      name: '10',
      img: "Ik ben 7 jaar oud."
    },
    {
      name: '10',
      img: 'I am 7 years old.'
    },
    {
      name: '11',
      img: 'Do you have a sister or brother?'
    },
    {
      name: '11',
      img: "Heb je een zus of broer?"
    },
    {
      name: '12',
      img: 'How is the weather today?'
    },
    {
      name: '12',
      img: "Hoe is het weer vandaag?"
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 1 completed!</h2><a href="https://elaidina.github.io/nl/level2.html"> Continue to Level 2</a>'


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
