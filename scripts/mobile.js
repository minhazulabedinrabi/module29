document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const finalQuantity=QuantityUpdater(true, 'phone-quantity-field');
    updateFinalPrice(finalQuantity,'phone-price-total',1219)
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const finalQuantity=QuantityUpdater(false, 'phone-quantity-field')
    updateFinalPrice(finalQuantity, 'phone-price-total',1219)

})
