

function calculateAmount(){
    let grocery1 = parseFloat(document.getElementById('grocery1').value)
    let grocery2 = parseFloat(document.getElementById('grocery2').value)
    let grocery3 = parseFloat(document.getElementById('grocery3').value)
    let grocery4 = parseFloat(document.getElementById('grocery4').value)

    let amount = grocery1 + grocery2 + grocery3 + grocery4
    let average = amount/4
    document.getElementById('result').innerText = `The total amount is: $${amount}\n and you spent $${average} per product`;

}

