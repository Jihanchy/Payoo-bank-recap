document.getElementById('cashOut-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOutMoney = getInputFieldValueById('input-cash-out');

        const pinCashOut = getInputFieldValueById('pin-cash-out');

        if (pinCashOut === 1234) {

            let currentBalance = getInputFieldTextById('current-balance');
            if(cashOutMoney > currentBalance){
                alert('You do not have enough money')
                return;
            }
            let newBalance = currentBalance - cashOutMoney;

            if(isNaN(cashOutMoney)){
                alert('please try again')
                return;
            }
            document.getElementById('current-balance').innerText = newBalance

            const div = document.createElement('div')

            div.innerHTML = `
                <p>Withdraw: ${cashOutMoney} Tk. Balance: ${newBalance}Tk            
            `
            document.getElementById('transaction-container').appendChild(div)
        } else {
            console.log('please, try again')
        }
    })