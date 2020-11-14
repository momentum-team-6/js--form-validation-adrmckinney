const form = document.querySelector('#parking-form')

form.addEventListener('submit', function(event) {
    event.preventDefault() 
    validate()
    calculateCost()
})


function calculateCost() {
    let numberOfDays = document.querySelector("#days").value
    let result = eval(numberOfDays * 5)
    console.log(result)
    //update DOM with the total cost in the #total div
    let displayDiv = document.querySelector("#total")
    displayDiv.innerHTML = `<div class="cost-result">Your total cost is ${result}</div>`
    // alternatively, I could do: 
    // let newElement = document.createElement("div")
    // newElement.innerText = result
    // displayDiv.appendChild(newElement)

    // to retrieve the date 
    let startDate = document.querySelector('#start-date').value
    let newDate = ""
    
    for (let i = 0; i < startDate.length; i++) {
        newDate += startDate[i]
       
        // create function to find and remove "/" characters
        let slashRemoved = []

        
        
        for (let slash of startDate) {
            if (slash === "-") {
                slash.indexOf(startDate)
                slashRemoved.splice(slash, 0, ",")
                slashRemoved.push(startDate)
            }
        } 
        
        // adding commas to newDate
        if (i < slashRemoved.length - 1) {
            newDate += ", "
        }
        console.log(slashRemoved)
        // console.log(newDate)
    }
    
    // need to group the last four characters and not add commas

    // create new array to push new date into
    // create a date with an argument
    // new Date(2017, 3, 22, 5, 23, 50) = year, month, day, hour, min, sec, millisecond (no need to include the time)
    // NOTE month is zero-indexed
    // the new array will need to be spaced with commas
}

function validate(){
    //call other functions, one after another
}