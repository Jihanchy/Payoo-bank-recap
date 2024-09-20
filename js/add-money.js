// document.getElementById("add-money-btn")
//     .addEventListener('click', function(event){
//         event.preventDefault();

//         const amountInput = document.getElementById('amount-input').value;
//         const numberAmount = parseFloat(amountInput)

//         const pin = document.getElementById('input_pin').value;

//         if(pin === '1234'){

//             let balance = document.getElementById('current-balance').innerText;
//             let numberBalance = parseFloat(balance);

//             let currentBalance = numberBalance + numberAmount;

//             document.getElementById('current-balance').innerText = currentBalance

//         }else{
//             alert('Try again')
//         }
//     } )







document.getElementById('addMoney-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('amount-input');

        const pinNumber = getInputFieldValueById('input_pin');

        if(isNaN(addMoney)){
            alert('please try again')
            return;
        }
        // validation
        if (pinNumber === 1234) {
            let balance = getInputFieldTextById('current-balance');

            let newBalance = balance + addMoney;

            document.getElementById('current-balance').innerText = newBalance

            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`

            document.getElementById('transaction-container').appendChild(p)
        } else {
            alert('try again')
        }
    })
