// shopping_cart
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
     ready ()
}
function ready () {
    var removeCartItemButtons = document.getElementsByClassName ('btn-danger')
    for (var i = 0; i< removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
    }
     var quantityInputs = document.getElementsByClassName('cart-quantity-input')
     for (var i = 0; i < quantityInputs.length; i++) {
       var input = quantityInputs[i]
       input.addEventListener('change', quantityChanged)
    }
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
function purchaseClicked(){
    alert('Thank you for your Purchase');
    var cartItem = document.getElementsByClassName('cart-items')[0];
    while(cartItem.hasChildNodes){
        cartItem.removeChild(cartItem.firstChild);
    }
    updateCartTotal();
}
function addToCartClicked(event){
    var button = event.target;
    var shopItem =button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerHTML;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerHTML;
    var imgSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imgSrc);
    updateCartTotal();
}
function addItemToCart(title, price, imgSrc){
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
    var cartItem = document.getElementsByClassName('cart-items')[0];
    var cartItemName = cartItem.getElementsByClassName('cart-item-title');
    for(var i =0; i<cartItemName.length;i++){
        if(cartItemName[i].innerHTML == title){
            alert('Mặt Hàng này đã có trong giỏ');
            return;
        }
    }
    var cartRowContent= `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imgSrc}"
                            width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML =cartRowContent;
    cartItem.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged )

}
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
       input.value = 1
    }
    updateCartTotal()
}
function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total =0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var cartPrice= cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(cartPrice.innerHTML.replace('VND', ' '));
        var quantity = quantityElement.value;
        total = total + (price*quantity);
    }
    total = Math.round(total *100)/100;
    document.getElementsByClassName('cart-total-price')[0].innerHTML = total + 'VND';
}