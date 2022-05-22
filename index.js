let isAlive = true
let hasBlackJack = false
let firstCard = 11
let secondCard = 10
let hand = firstCard + secondCard
let message = ""


if (hand === 21)  {
    message = "Get in there! Blackjack!"
    hasBlackJack = true
}

else if (hand > 21)  {
    message = "No Mikey, no! Bust!"
    isAlive = false
}

else {
    message = "Would you like to draw another card?"
}

console.log(message)

console.log(hasBlackJack)

console.log(isAlive)