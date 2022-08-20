function getInputFiledValueById(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputFiledValueString = inputFiled.value;
    const inputFiledValueAmount = parseFloat(inputFiledValueString);
    inputFiled.value = '';
    return inputFiledValueAmount;
}

function getInputFiledValueById(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputFiledValueString = inputFiled.value;
    const inputFiledValueAmount = parseFloat(inputFiledValueString);
    inputFiled.value = '';
    return inputFiledValueAmount;
}


document.getElementById('calculate').addEventListener('click', function () {
    const income = getInputFiledValueById('income')
    const foodExpens = getInputFiledValueById('foon-filed');
    const rentExpens = getInputFiledValueById('rent-filed');
    const clothExpens = getInputFiledValueById('cloth-filed');

    const totalExpens = foodExpens + rentExpens + clothExpens;

    const totalBalance = income - (foodExpens + rentExpens + clothExpens);

    const displaTotalExpens = document.getElementById('total-txpenses');
    displaTotalExpens.innerText = totalExpens;

    const displaTotalBalance = document.getElementById('total-display');
    displaTotalBalance.innerText = totalBalance;

});
document.getElementById('btn-save').addEventListener('click', function () {

    const totalBalanceElement = document.getElementById('total-display');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceString);

    const parcentage = getInputFiledValueById('input-parcen');

    const parcenAmount = parcentage / 100;

    const saveAmount = totalBalanceAmount * parcenAmount;

    const showSave = document.getElementById('show-save');
    showSave.innerText = saveAmount;

    const FinalRemainingBalance = totalBalanceAmount - saveAmount;

    const showFinalBalance = document.getElementById('remaining-balance');

    showFinalBalance.innerText = FinalRemainingBalance;
})












// const foodFiled = document.getElementById('foon-filed');
// const foodAmount = foodFiled.value;
// console.log(foodAmount)


// const rentFiled = document.getElementById('rent-filed');
// const rentAmount = rentFiled.value;
// console.log(rentAmount)

// const clothFiled = document.getElementById('cloth-filed');
// const clothAmount = clothFiled.value;
// console.log(clothAmount)