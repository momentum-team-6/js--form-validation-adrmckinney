const form = document.querySelector('#parking-form')
const cost = document.querySelector('#days')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    validate()
})

cost.addEventListener('InputEvent', function(event) {
    let numberOfDays = event.target.innerText
    let result = eval(numberOfDays * 5)
    console.log(result)
})