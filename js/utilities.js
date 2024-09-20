function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber
}
function getInputFieldTextById (id){
    const inputText = document.getElementById(id).innerText;
    const numberInputText = parseFloat(inputText)
    return numberInputText
}