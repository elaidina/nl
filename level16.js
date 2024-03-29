document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They are looking forward to see their grandma.'
    },
    {
      name: '1',
      img: 'Ze kijken er naar uit om hun oma te zien.'
    },
    {
      name: '2',
      img: 'Her village is not far from the town.'
    },
    {
      name: '2',
      img: 'Haar dorp ligt niet ver van de stad.'
    },
    {
      name: '3',
      img: 'We are coming along with them.'
    },
    {
      name: '3',
      img: 'We gaan met ze mee.'
    },
    {
      name: '4',
      img: 'Can you wait for us?'
    },
    {
      name: '4',
      img: 'Kan je op ons wachten?'
    },
    {
      name: '5',
      img: 'I must ask everyone.'
    },
    {
      name: '5',
      img: 'Ik moet het iedereen vragen.'
    },
    {
      name: '6',
      img: 'We will be going through the town.'
    },
    {
      name: '6',
      img: 'We gaan door de stad.'
    },
    {
      name: '7',
      img: 'We will be able to see lots of cars, shops and big houses.'
    },
    {
      name: '7',
      img: "We zullen veel auto's, winkels en grote huizen kunnen zien."
    },
    {
      name: '8',
      img: 'There are lots of people in the streets.'
    },
    {
      name: '8',
      img: 'Er zijn veel mensen op straat.'
    },
    {
      name: '9',
      img: 'Show me the way, please.'
    },
    {
      name: '9',
      img: 'Wijs me de weg, alsjeblieft.'
    },
    {
      name: '10',
      img: "Go straight and then turn left."
    },
    {
      name: '10',
      img: 'Ga rechtdoor en sla dan linksaf.'
    },
    {
      name: '11',
      img: "Turn right at the giant bridge."
    },
    {
      name: '11',
      img: 'Sla rechtsaf bij de gigantische brug.'
    },
    {
      name: '12',
      img: 'There´s my favourite shop on the right and a church on the left.'
    },
    {
      name: '12',
      img: 'Er is mijn favoriete winkel aan de rechterkant en een kerk aan de linkerkant.'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 16 completed!</h2><a href="https://elaidina.github.io/nl/level17.html"> Continue to Level 17</a>'


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
