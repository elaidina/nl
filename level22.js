document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'I don´t like helping my mum in the kitchen.'
    },
    {
      name: '1',
      img: 'Ik help mijn moeder niet graag in de keuken.'
    },
    {
      name: '2',
      img: 'I rather play in the playground.'
    },
    {
      name: '2',
      img: 'Ik speel liever op de speelplaats.'
    },
    {
      name: '3',
      img: 'I always set the table.'
    },
    {
      name: '3',
      img: 'Ik dek altijd de tafel.'
    },
    {
      name: '4',
      img: 'The living-room is the largest room in our flat.'
    },
    {
      name: '4',
      img: 'De woonkamer is de grootste kamer in onze flat.'
    },
    {
      name: '5',
      img: 'My dad works on his computer here.'
    },
    {
      name: '5',
      img: 'Mijn vader werkt hier op zijn computer.'
    },
    {
      name: '6',
      img: 'I prefer playing games on the computer.'
    },
    {
      name: '6',
      img: 'Ik speel liever spelletjes op de computer.'
    },
    {
      name: '7',
      img: 'Little children play in the sand-pit.'
    },
    {
      name: '7',
      img: 'Kleine kinderen spelen in de zandbak.'
    },
    {
      name: '8',
      img: 'Put on your clean trousers.'
    },
    {
      name: '8',
      img: 'Trek je schone broek aan.'
    },
    {
      name: '9',
      img: 'In spring the country is lovely.'
    },
    {
      name: '9',
      img: 'In het voorjaar is het land prachtig.'
    },
    {
      name: '10',
      img: 'Trees, meadows and gardens are full of flowers.'
    },
    {
      name: '10',
      img: 'Bomen, weiden en tuinen staan vol bloemen.'
    },
    {
      name: '11',
      img: 'We go to the lake which isn´t far from our town.'
    },
    {
      name: '11',
      img: 'We gaan naar het meer dat niet ver van onze stad ligt.'
    },
    {
      name: '12',
      img: 'We play with sand and swim there.'
    },
    {
      name: '12',
      img: 'We spelen met zand en zwemmen daar.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 22 completed!</h2><a href='https://elaidina.github.io/nl/level23.html'> Continue to Level 23</a>";


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
