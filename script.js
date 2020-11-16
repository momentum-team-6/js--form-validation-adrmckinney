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
    let earliestYear = 1900
    
    if (carYear.value < earliestYear) {
        carYear.setCustomValidity('Cars made before 1900 are gross and aren\'t allowed to park here')
    } else if (carYear.value > currentYear) {
        carYear.setCustomValidity("Your car doesn\'t exist yet")
    }
    else {
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

// DATE PARKING VALIDATION START
const parkingDate = document.querySelector('#start-date')

function validateParkingDate(inputValue) {
    const parkingDate = document.querySelector('#start-date')
    let dateParts = inputValue.split('-')

    let yearString = dateParts[0]
    let monthString = dateParts[1]
    let dayString = dateParts[2]

    let yearStringToNumber = Number(yearString)
    let monthStringToNumber = Number(monthString)
    let dayStringToNumber = Number(dayString)

    let newDate = new Date(yearStringToNumber, monthStringToNumber - 1, dayStringToNumber)
    console.log(newDate)

    if (newDate < new Date()) {
        parkingDate.setCustomValidity('Parking date must be in the future')
    } else {
        parkingDate.setCustomValidity('')
    }
}

parkingDate.addEventListener('change', function (event) {
    validateParkingDate(event.target.value)  
})

// DATE PARKING VALIDATION END

// EXPIRATION DATE VALIDATION START
function validateExpirationDate(inputValue) {
    console.log(inputValue)
    let dateParts = inputValue.split('/')
    console.log(dateParts)

    let monthString = dateParts[0]
    let yearString = dateParts[1]
    
    let monthStringToNumber = Number(monthString)
    let yearStringToNumber = Number(yearString) + 2000
    
    let newDate = new Date(yearStringToNumber, monthStringToNumber - 1)
    console.log(newDate)

    // month validation
    if (monthStringToNumber < 1 || monthStringToNumber > 12) {
        exDate.setCustomValidity("Invalid month")
        return
    }

    // year validation
    if (yearStringToNumber < 2020 || yearStringToNumber > 2099) {
        exDate.setCustomValidity('Invalid year')
    } else {
        exDate.setCustomValidity('')
    }

    // Expiration validation
    if (newDate < new Date()) {
        exDate.setCustomValidity("Your card has expired")
    } else {
        exDate.setCustomValidity('')
    }
}


const exDate = document.querySelector('#expiration')
exDate.addEventListener('change', function(event) {
    validateExpirationDate(event.target.value)
})

// EXPIRATION DATE VALIDATION START

function validate(){
    //call other functions, one after another
}