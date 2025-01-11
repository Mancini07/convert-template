const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

amount.addEventListener("input", ()=>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value,USD, "US$")
            break
        
        case "EUR":
            convertCurrency(amount.value,EUR, "€")
            break
        
        case "GBP":
            convertCurrency(amount.value,GBP, "£")
            break

    }
})

function convertCurrency(amount, price, symbol){
    try {
        description.textContent = `${symbol} 1 = ${formatCurrency(price)}`

        let total = amount * price
        total = formatCurrency(total).replace("R$", "")

        result.textContent = `${total} Reais`

        footer.classList.add("show-result")

    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possíve converter. Tente novamente mais tarde ")
        
    }
}

function formatCurrency (value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency:"BRL"
    })
}