let firstCard = 5
let secondCard = 10
let cards = [firstCard, secondCard]  //array
let hand = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let handEl = document.getElementById("hand-el")
let cardsEl = document.querySelector(".game__stats")

function startGame() {
    triggerGame()
}

function triggerGame() {
    if (hand <= 20) {
        message = "Would you like to draw a new card?"
    } else if (hand === 21) {
        message = "Get in there! Blackjack!"
        hasBlackJack = true
    } else {
        message = "No mikey! No! Bust!"
        isAlive = false
    }
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
    handEl.textContent = "Hand: " + hand
    messageEl.textContent = message
}

function newCard() {
    let card = 6
    hand += card
    triggerGame()
}