const productDOM = document.querySelector(".product-cards");
const cartDOM = document.querySelector(".cart");
const cartContent = document.querySelector(".cart__centent");
const openCart = document.querySelector(".cart__icon");
const closeCart = document.querySelector(".close__cart");
const overlay = document.querySelector(".cart__overlay");
const cartTotal = document.querySelector(".cart__total");
const clearCartBtn = document.querySelector(".clear__cart");
const confirmOrderBtn = document.querySelector(".confirm__order");

const itemTotals = document.querySelector(".item__total");


let cart = [];

let buttonDOM = [];

let buttonViewDOM = []

class UI {
  displayProducts(products) {
    let results = "";
    products.forEach(({ title, price1, price, image, sale_off, id }) => {
      results += `
      <div class="product-card">
              <div class="card-image">
              <img src="${image}" alt="">
            </div>
             <div class="card-title">${title}</div>
             <div class="card-content">
                     <div class="money-old-detail">
                         <div class="card-money-old">
                            ${price1.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                         </div>
                         <div class="card-sale-off">
                             (Tiết kiệm ${sale_off}%)
                         </div>
                     </div>
                     <div class="card-money-new">
                         <h2>${price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</h2>
                     </div>
                    <div class="card-warehouse">
                        <div class="card-icon">
                            <ion-icon name="bag-check-outline"></ion-icon>
                            <p>Còn hàng</p>
                        </div>
                        <div class="add-button" >
                          <a class="btn addToCart" data-id= ${id}>Thêm</a>
                          <a class="btn view" data-id= ${id}>Chi Tiết</a>
                        </div>
                    </div>
             </div> 
        </div>
      `;
    });

    productDOM.innerHTML = results;
  }

  getButtons() {
    const buttons = [...document.querySelectorAll(".addToCart")];
    buttonDOM = buttons;
    buttons.forEach(button => {
      const id = button.dataset.id;
      const inCart = cart.find(item => item.id === parseInt(id, 10));

      if (inCart) {
        button.innerText = "Đã thêm";
        button.disabled = true;
      }

        button.addEventListener("click", e => {
          e.preventDefault();
          e.target.innerHTML = "Đã thêm";
          e.target.disabled = true;
          
          // Get product from products
          const cartItem = { ...Storage.getProduct(id), amount: 1 };
  
          // Add product to cart
          cart = [...cart, cartItem];
  
          // save the cart in local storage
          Storage.saveCart(cart);
          // set cart values
          this.setItemValues(cart);
          // display the cart item
          this.addCartItem(cartItem);
          // show the cart
        });
    });
  }

  getViewButtons() {
    var modal = document.getElementById("myModal");
    var closeModal = document.getElementsByClassName("modal-close")[0];
    const buttons = [...document.querySelectorAll(".view")];
    buttonViewDOM = buttons;
    buttons.forEach(button => {
      button.addEventListener("click", e => {
        const id = button.dataset.id;
        const cartItem = Storage.getProduct(id);
        //core: Thông tin chung
        var element = document.getElementById('modal-content');
        if(cartItem && cartItem.info){
          let html = '';
          if(cartItem.info.product){
            html = html + `<div class="view-info">Tên sản phẩm: ${cartItem.info.product}</div>`
          }
          if(cartItem.info.producer){
            html = html + `<div class="view-info">Nhà sản xuất: ${cartItem.info.producer}</div>`
          }
          if(cartItem.info.segment){
            html = html + `<div class="view-info">Phân khúc: ${cartItem.info.segment}</div>`
          }
          element.innerHTML = html;
        }
        //detail: Cấu hình chi tiết    
        var elementDetail = document.getElementById('modal-content-detail');
        if(cartItem && cartItem.info){
          let html = '';
          if(cartItem.info.color){
            html = html + `<div class="view-info">Màu sắc vỏ: ${cartItem.info.color}</div>`
          }
          if(cartItem.info.ledlight){
            html = html + `<div class="view-info">Đèn led: ${cartItem.info.ledlight}</div>`
          }
          if(cartItem.info.model){
            html = html + `<div class="view-info">Chủng loại: ${cartItem.info.model}</div>`
          }
          if(cartItem.info.connection){
            html = html + `<div class="view-info">Cổng giao tiếp: ${cartItem.info.connection}</div>`
          }
          if(cartItem.info.type){
            html = html + `<div class="view-info">Loại: ${cartItem.info.type}</div>`
          }
          if(cartItem.info.connectiontype){
            html = html + `<div class="view-info">Kiểu kết nối: ${cartItem.info.connectiontype}</div>`
          }
          if(cartItem.info.microphone){
            html = html + `<div class="view-info">Microphone: ${cartItem.info.microphone}</div>`
          }
          if(cartItem.info.resolution){
            html = html + `<div class="view-info">Phân giải: ${cartItem.info.resolution}</div>`
          }
          if(cartItem.info.standardplug){
            html = html + `<div class="view-info">Giác cắm tiêu chuẩn: ${cartItem.info.standardplug}</div>`
          }
          if(cartItem.info.design){
            html = html + `<div class="view-info">Thiết kế: ${cartItem.info.design}</div>`
          }
          if(cartItem.info.vidcall){
            html = html + `<div class="view-info">Call Video: ${cartItem.info.vidcall}</div>`
          }
          if(cartItem.info.PTZ){
            html = html + `<div class="view-info">PTZ: ${cartItem.info.PTZ}</div>`
          }
          if(cartItem.info.focus){
            html = html + `<div class="view-info">Tiêu điểm: ${cartItem.info.focus}</div>`
          }
          if(cartItem.info.impedance){
            html = html + `<div class="view-info">Trở kháng: ${cartItem.info.impedance}</div>`
          }
          if(cartItem.info.frequency){
            html = html + `<div class="view-info">Tần số: ${cartItem.info.frequency}</div>`
          }
          if(cartItem.info.diaphragmsize){
            html = html + `<div class="view-info">Kích cỡ màng loa: ${cartItem.info.diaphragmsize}</div>`
          }
          if(cartItem.info.photo){
            html = html + `<div class="view-info">Ảnh: ${cartItem.info.photo}</div>`
          }
          if(cartItem.info.frequencyrange){
            html = html + `<div class="view-info">Dải tần: ${cartItem.info.frequencyrange}</div>`
          }
          if(cartItem.info.pressurelevel){
            html = html + `<div class="view-info">Mức áp suất âm: ${cartItem.info.pressurelevel}</div>`
          }
          if(cartItem.info.weight){
            html = html + `<div class="view-info">Trọng lượng: ${cartItem.info.weight}</div>`
          }
          if(cartItem.info.communicate){
            html = html + `<div class="view-info">Giao tiếp: ${cartItem.info.communicate}</div>`
          }
          if(cartItem.info.videoinput){
            html = html + `<div class="view-info">Video-input: ${cartItem.info.videoinput}</div>`
          }
          if(cartItem.info.videoOutput){
            html = html + `<div class="view-info">Video-Output: ${cartItem.info.videoOutput}</div>`
          }
          if(cartItem.info.audioInput){
            html = html + `<div class="view-info">Audio-Input: ${cartItem.info.audioInput}</div>`
          }
          if(cartItem.info.jacks){
            html = html + `<div class="view-info">Jacks: ${cartItem.info.jacks}</div>`
          }
          if(cartItem.info.drivers){
            html = html + `<div class="view-info">Drivers: ${cartItem.info.drivers}</div>`
          }
          elementDetail.innerHTML = html;
        }

        e.preventDefault();
        modal.style.display = "block";
      });

      // When the user clicks on <span> (x), close the modal
      closeModal.onclick = function() {
        modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
  }



  filterButtons() {
    const buttons = [...document.querySelectorAll(".signUp")];   

    buttons.forEach(button => {

      button.addEventListener("click", e => {      
        if(button.classList.contains('right-panel-active')){

          button.classList.remove('right-panel-active');

        }else{

          button.classList.add('right-panel-active');

        }
      });

    });
  }



  setItemValues(cart) {
    let tempTotal = 0;
    let itemTotal = 0;

    cart.map(item => {
      tempTotal += item.price * item.amount;
      itemTotal += item.amount;
    });
    cartTotal.innerText = tempTotal.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    itemTotals.innerText = itemTotal;
  }

  addCartItem({ image, price, title, id }) {
    const div = document.createElement("div");
    div.classList.add("cart__item");

    div.innerHTML = `<img src="${image}">
          <div>
            <h3>${title}</h3>
            <h3 class="price">${price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</h3>
          </div>
          <div>
            <span class="increase" data-id=${id}>
              <svg>
                <use xlink:href="../../img/screen/sprite.svg#icon-angle-up"></use>
              </svg>
            </span>
            <p class="item__amount">1</p>
            <span class="decrease" data-id=${id}>
              <svg>
                <use xlink:href="../../img/screen/sprite.svg#icon-angle-down"></use>
              </svg>
            </span>
          </div>

            <span class="remove__item" data-id=${id}>
              <svg>
                <use xlink:href="../../img/screen/sprite.svg#icon-trash"></use>
              </svg>
            </span>

        </div>`;
    cartContent.appendChild(div);
  }

  show() {
    cartDOM.classList.add("show");
    overlay.classList.add("show");
  }

  hide() {
    cartDOM.classList.remove("show");
    overlay.classList.remove("show");
  }

  setAPP() {
    cart = Storage.getCart();
    this.setItemValues(cart);
    this.populate(cart);

    openCart.addEventListener("click", this.show);
    closeCart.addEventListener("click", this.hide);
  }

  populate(cart) {
    cart.forEach(item => this.addCartItem(item));
  }

  cartLogic() {
    // Clear Cart
    confirmOrderBtn.addEventListener("click", () => {
      this.confirmOrder();

    });

    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
      this.hide();
    });

    // Cart Functionality
    cartContent.addEventListener("click", e => {
      const target = e.target.closest("span");
      const targetElement = target.classList.contains("remove__item");
      if (!target) return;

      if (targetElement) {
        const id = parseInt(target.dataset.id);
        this.removeItem(id);
        cartContent.removeChild(target.parentElement);
      } else if (target.classList.contains("increase")) {
        const id = parseInt(target.dataset.id, 10);
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount++;
        Storage.saveCart(cart);
        this.setItemValues(cart);
        target.nextElementSibling.innerText = tempItem.amount;
      } else if (target.classList.contains("decrease")) {
        const id = parseInt(target.dataset.id, 10);
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount--;

        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setItemValues(cart);
          target.previousElementSibling.innerText = tempItem.amount;
        } else {
          this.removeItem(id);
          cartContent.removeChild(target.parentElement.parentElement);
        }
      }
    });
  }

  clearCart() {
    const cartItems = cart.map(item => item.id);
    cartItems.forEach(id => this.removeItem(id));

    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
  }

  removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    this.setItemValues(cart);
    Storage.saveCart(cart);

    let button = this.singleButton(id);
    button.disabled = false;
    button.innerText = "Thêm";
  }
  confirmOrder() {
    if (confirm("Bạn có chắc chắn mua đơn hàng này không ?")) {
      alert('Bạn đã mua đơn hàng này thành công !')
      this.clearCart();
      this.hide();
    } else {
    }
  }
  

  singleButton(id) {
    return buttonDOM.find(button => parseInt(button.dataset.id) === id);
  }
}

class Products {
  async getProducts() {
    try {
      const result = await fetch("../../json/spareParts.json");
      const data = await result.json();
      const products = data.items;
      return products;
    } catch (err) {
      console.log(err);
    }
  }
}

class Storage {
  static saveProduct(obj) {
    localStorage.setItem("products", JSON.stringify(obj));
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getProduct(id) {
    const products = JSON.parse(localStorage.getItem("products"));
    return products.find(product => product.id === parseFloat(id, 10));
  }

  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const productList = new Products();
  const ui = new UI();

  ui.setAPP();

  const products = await productList.getProducts();
  ui.displayProducts(products);
  Storage.saveProduct(products);
  ui.getButtons();
  ui.getViewButtons();
  ui.cartLogic();
  ui.filterButtons();
});
