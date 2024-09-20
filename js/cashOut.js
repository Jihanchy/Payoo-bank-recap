document.getElementById('cashOut-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOutMoney = getInputFieldValueById('input-cash-out');

        const pinCashOut = getInputFieldValueById('pin-cash-out');

        if (pinCashOut === 1234) {

            let currentBalance = getInputFieldTextById('current-balance');
            let newBalance = currentBalance - cashOutMoney;

            document.getElementById('current-balance').innerText = newBalance
        } else {
            console.log('please, try again')
        }
    })