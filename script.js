const form = document.querySelector('#parking-form')
const creditCardNum = document.querySelector('#credit-card')

form.addEventListener('submit', function(event) {
    event.preventDefault() 
    validate()
    calculateCost()
})

function displayCost(amount) {
    let displayDiv = document.querySelector("#total")
    displayDiv.innerHTML = `<div class="cost-result">Your total cost is ${amount}</div>`
}

// CAR YEAR VALIDATION START
const carYear = document.querySelector('#car-year')
carYear.addEventListener('change', function(evnt) {
    let currentYear = new Date().getFullYear()
    let earliestYear = '1900'
    
    if (carYear.value < earliestYear || carYear.value > currentYear) {
        carYear.setCustomValidity('Cars made before 1900 are gross and aren\'t allowed to park here')
    } else {
        carYear.setCustomValidity('')
    }
})
// CAR YEAR VALIDATION END

// CALCULATING COST TO CLIENT START
function calculateCost() {
    let numberOfDays = document.querySelector("#days").value
    let today = new Date() 
    let amount = 0

    for (let i = 0; i < numberOfDays; i++) {
        let day = new Date()
        day.setDate(today.getDate() + i)
        // weekend cost
        if (day.getDay() === 0 || day.getDay() === 6) {
            amount += 7
        // weekday cost
        } else {
            amount += 5
        }
    }
    displayCost(amount)
}

// function calculateCost2() {
//     let numberOfDays = document.querySelector("#days").value
//     let today = new Date()

// CALCULATING COST TO CLIENT END


// CREDIT CARD VALIDATION START
creditCardNum.addEventListener ('change', function(event) {
    if (validateCardNumber(creditCardNum.value) === false) {
        creditCardNum.setCustomValidity('Not a valid credit card number')
    } else {
        creditCardNum.setCustomValidity("")
    }
})

function validateCardNumber(number) {
    let regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
        let intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
// CREDIT CARD VALIDATION END

// EXPIRATION DATE VALIDATION START
// const exDate = document.querySelector('#expiration')
// exDate.addEventListener('change', function(event) {
//     let currentYear = new Date().getFullYear()
//     let currentMonth = new Date().getMonth()
//     let exMonth = 0
//     let exYear = 0

//     for (let i = 0; i < exDate.length - 3; i++) {
//         exMonth.push(i)
//         console.log(exMonth)
//     } if (exMonth < currentMonth) {
//         console.log('Month is too high')
//     }

//     // if (exDate > curentMonth) {

//     // }
    
// })

// EXPIRATION DATE VALIDATION START

function validate(){
    //call other functions, one after another
}