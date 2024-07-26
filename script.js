document.getElementById("to");
let from = document.getElementById("from");
let amount;
let result = document.getElementById("result")
let amount_input = document.querySelector("input");
let submit = document.querySelectorAll("input")[1];


for (const country in countryList) {
    let currcode = country;
    to.innerHTML += `<option value="${currcode}">${currcode}</option>`;
    from.innerHTML += `<option value="${currcode}">${currcode}</option>`;

}

from.value = "INR";
to.value = "USD";

let to_selected = to.value;
let from_selected = from.value;

from.addEventListener("change", function () {
    from_selected = from.value
})
to.addEventListener("change", function () {
    to_selected = to.value
})
amount_input.addEventListener("input", e => {
    amount = parseInt(e.target.value)
})
document.getElementById('myForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    let URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_KcmZYZGnOc0gNTya7t0zKAwS573imeGYKvrltStQ&currencies=${to_selected}&base_currency=${from_selected}`
    console.log(to_selected)
    console.log(from_selected)
    let data = await fetch(URL)
    let response = await data.json()
    console.log(response.data)
    let rate = parseFloat(response.data[to_selected].value)
    let conversion = amount * rate;
    result.textContent = `Converted : ${conversion.toFixed(2)} ${to_selected}`

});
