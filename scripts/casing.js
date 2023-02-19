
function QuantityUpdater(isIncrease,elementId) {
    const caseNumberField = document.getElementById(elementId);
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseQuantity = parseInt(caseNumberFieldString);

    let finalCaseQuantity;

    if (isIncrease === true) {
        finalCaseQuantity = previousCaseQuantity + 1;
        caseNumberField.value = finalCaseQuantity;

    }
    else {
        if (previousCaseQuantity < 2) {
            return previousCaseQuantity;
        }
        finalCaseQuantity = previousCaseQuantity - 1;
        caseNumberField.value = finalCaseQuantity;
    }
    
    return finalCaseQuantity;
}
function updateFinalPrice(finalQuantity,fieldId,unitPrice){
    const finalCasePrice=finalQuantity*unitPrice;
    const finalCasePriceElement=document.getElementById(fieldId);
    finalCasePriceElement.innerText=finalCasePrice;
}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const finalCaseQuantity = QuantityUpdater(true,'case-number-field');
    updateFinalPrice(finalCaseQuantity, 'case-final-price',59)
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const finalCaseQuantity = QuantityUpdater(false, 'case-number-field');
    updateFinalPrice(finalCaseQuantity, 'case-final-price',59);


})