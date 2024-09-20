function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber
}
function getInputFieldTextById(id) {
    const inputText = document.getElementById(id).innerText;
    const numberInputText = parseFloat(inputText)
    return numberInputText
}
function showSectionById(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}