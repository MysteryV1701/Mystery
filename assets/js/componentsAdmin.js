const productDOM = document.querySelector(".product-cards");
const cartDOM = document.querySelector(".cart");
const cartContent = document.querySelector(".cart__centent");
// const openCart = document.querySelector(".cart__icon");
// const closeCart = document.querySelector(".close__cart");
// const overlay = document.querySelector(".cart__overlay");
// const cartTotal = document.querySelector(".cart__total");
// const clearCartBtn = document.querySelector(".clear__cart");
// const confirmOrderBtn = document.querySelector(".confirm__order");
// const itemTotals = document.querySelector(".item__total");


let cart = [];

let buttonDOM = [];

let buttonViewDOM = []

class UI {



  displayProducts(products) {
    let results = "";
    products.forEach(({ title, price1, price, image, sale_off, id,quantily }) => {
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
                            <p>Số lượng: ${quantily} </p>
                        </div>
                        <div class="add-button" >
                            <a class="delete__product btn">Xoá</a>
                            <a class="btn edit">Sửa</a>
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

        // button.addEventListener("click", e => {
        //   e.preventDefault();
        //   e.target.innerHTML = "Đã thêm";
        //   e.target.disabled = true;
          
        //   // Get product from products
        //   const cartItem = { ...Storage.getProduct(id), amount: 1 };
  
        //   // Add product to cart
        //   cart = [...cart, cartItem];
  
        //   // save the cart in local storage
        //   Storage.saveCart(cart);
        //   // set cart values
        //   this.setItemValues(cart);
        //   // display the cart item
        //   this.addCartItem(cartItem);
        //   // show the cart
        // });
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
          if(cartItem.info.species){
            html = html + `<div class="view-info">Tên sản phẩm: ${cartItem.info.species}</div>`
          }
          if(cartItem.info.producer){
            html = html + `<div class="view-info">Nhà sản xuất: ${cartItem.info.producer}</div>`
          }
          if(cartItem.info.model){
            html = html + `<div class="view-info">Loại: ${cartItem.info.model}</div>`
          }
          element.innerHTML = html;
        }
        //detail: Cấu hình chi tiết    
        var elementDetail = document.getElementById('modal-content-detail');
        if(cartItem && cartItem.info){
          let html = '';
          if(cartItem.info.enginegraphic){
            html = html + `<div class="view-info">Card: ${cartItem.info.enginegraphic}</div>`
          }
          if(cartItem.info.bus){
            html = html + `<div class="view-info">RAM: ${cartItem.info.bus}</div>`
          }
          if(cartItem.info.memoryclock){
            html = html + `<div class="view-info">Tốc độ ghi nhớ: ${cartItem.info.memoryclock}</div>`
          }
          if(cartItem.info.memory){
            html = html + `<div class="view-info">Bộ nhớ: ${cartItem.info.memory}</div>`
          }
          if(cartItem.info.busmemory){
            html = html + `<div class="view-info">Bus bộ nhớ: ${cartItem.info.busmemory}</div>`
          }
          if(cartItem.info.cpu){
            html = html + `<div class="view-info">CPU: ${cartItem.info.cpu}</div>`
          }
          if(cartItem.info.chipset){
            html = html + `<div class="view-info">Chipset: ${cartItem.info.chipset}</div>`
          }
          if(cartItem.info.multiGPUsupport){
            html = html + `<div class="view-info">Multi-GPU-Support: ${cartItem.info.multiGPUsupport}</div>`
          }
          if(cartItem.info.backpanel){
            html = html + `<div class="view-info">Cổng kết nối: ${cartItem.info.backpanel}</div>`
          }
          if(cartItem.info.harddrive){
            html = html + `<div class="view-info">Ổ cứng hỗ trợ: ${cartItem.info.harddrive}</div>`
          }
          if(cartItem.info.RAMsupports){
            html = html + `<div class="view-info">Ram hỗ trợ: ${cartItem.info.RAMsupports}</div>`
          }
          if(cartItem.info.size){
            html = html + `<div class="view-info">Kích thước: ${cartItem.info.size}</div>`
          }
          if(cartItem.info.inputvoltage){
            html = html + `<div class="view-info">Điện áp đầu vào: ${cartItem.info.inputvoltage}</div>`
          }
          if(cartItem.info.wattage){
            html = html + `<div class="view-info">Công suất: ${cartItem.info.wattage}</div>`
          }
          if(cartItem.info.retentiontime){
            html = html + `<div class="view-info">Thời gian duy trì: ${cartItem.info.retentiontime}</div>`
          }
          if(cartItem.info.efficiency){
            html = html + `<div class="view-info">Hiệu suất: ${cartItem.info.efficiency}</div>`
          }
          if(cartItem.info.safetystandards){
            html = html + `<div class="view-info">Tiêu chuẩn an toàn: ${cartItem.info.safetystandards}</div>`
          }
          if(cartItem.info.readrate){
            html = html + `<div class="view-info">Tốc độ đọc: ${cartItem.info.readrate}</div>`
          }
          if(cartItem.info.recordingspeed){
            html = html + `<div class="view-info">Tốc độ ghi: ${cartItem.info.recordingspeed}</div>`
          }
          if(cartItem.info.integratedtechnology){
            html = html + `<div class="view-info">Công nghệ tích hợp: ${cartItem.info.integratedtechnology}</div>`
          }
          if(cartItem.info.capacity){
            html = html + `<div class="view-info">Dung lượng: ${cartItem.info.capacity}</div>`
          }
          if(cartItem.info.caching){
            html = html + `<div class="view-info">Bộ nhớ đệm: ${cartItem.info.caching}</div>`
          }
          if(cartItem.info.speedrotation){
            html = html + `<div class="view-info">Tốc độ vòng quay: ${cartItem.info.speedrotation}</div>`
          }
          if(cartItem.info.type){
            html = html + `<div class="view-info">Type: ${cartItem.info.type}</div>`
          }
          if(cartItem.info.PFC){
            html = html + `<div class="view-info">PFC: ${cartItem.info.PFC}</div>`
          }
          if(cartItem.info.inputvoltage){
            html = html + `<div class="view-info">Input Voltage: ${cartItem.info.inputvoltage}</div>`
          }
          
          if(cartItem.info.inputcurent){
            html = html + `<div class="view-info">Input Curent: ${cartItem.info.inputcurent}</div>`
          }
          if(cartItem.info.inputfrequency){
            html = html + `<div class="view-info">Input Frequency: ${cartItem.info.inputfrequency}</div>`
          }
          if(cartItem.info.outputcapacity){
            html = html + `<div class="view-info">Output-Capacity: ${cartItem.info.outputcapacity}</div>`
          }
          if(cartItem.info.maxpower){
            html = html + `<div class="view-info">Max Power: ${cartItem.info.maxpower}</div>`
          }
          if(cartItem.info.use){
            html = html + `<div class="view-info">Sử dụng: ${cartItem.info.use}</div>`
          }
          if(cartItem.info.usb){
            html = html + `<div class="view-info">USB: ${cartItem.info.usb}</div>`
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

  getEditButtons() {
    var modal = document.getElementById("myModalEdit");
    var closeModal = document.getElementsByClassName("modal-close-edit")[0];
    const buttons = [...document.querySelectorAll(".edit")];
    buttonViewDOM = buttons;
    buttons.forEach(button => {
      button.addEventListener("click", e => {
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

  deleteButtons() {  
    
  // deleteProduct() {

  // }

    const buttons = [...document.querySelectorAll(".delete__product")];   

    buttons.forEach(button => {

      button.addEventListener("click", e => {      
        if (confirm("Bạn có chắc chắn xoá sản phẩm này không ?")) {
          alert('Bạn đã xoá sản phẩm thành công !')
        } else {
        }
      });

    });
  }

  saveButtons() {  
    
    // deleteProduct() {
  
    // }
  
      const buttons = [...document.querySelectorAll(".save__product")];   
  
      buttons.forEach(button => {
  
        button.addEventListener("click", e => {      
          if (confirm("Bạn có chắc chắn sửa thông tin sản phẩm này không ?")) {
            alert('Bạn đã lưu thông tin sản phẩm thành công !')
          } else {
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
    // cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    // itemTotals.innerText = itemTotal;
  }

  // addCartItem({ image, price, title, id }) {
  //   const div = document.createElement("div");
  //   div.classList.add("cart__item");

  //   div.innerHTML = `<img src="${image}">
  //         <div>
  //           <h3>${title}</h3>
  //           <h3 class="price">${price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</h3>
  //         </div>
  //         <div>
  //           <span class="increase" data-id=${id}>
  //             <svg>
  //               <use xlink:href="../../img/screen/sprite.svg#icon-angle-up"></use>
  //             </svg>
  //           </span>
  //           <p class="item__amount">1</p>
  //           <span class="decrease" data-id=${id}>
  //             <svg>
  //               <use xlink:href="../../img/screen/sprite.svg#icon-angle-down"></use>
  //             </svg>
  //           </span>
  //         </div>

  //           <span class="remove__item" data-id=${id}>
  //             <svg>
  //               <use xlink:href="../../img/screen/sprite.svg#icon-trash"></use>
  //             </svg>
  //           </span>

  //       </div>`;
  //   cartContent.appendChild(div);
  // }

  // show() {
  //   cartDOM.classList.add("show");
  //   // overlay.classList.add("show");
  // }

  // hide() {
  //   cartDOM.classList.remove("show");
  //   // overlay.classList.remove("show");
  // }

  // setAPP() {
  //   cart = Storage.getCart();
  //   this.setItemValues(cart);
  //   this.populate(cart);

  //   // openCart.addEventListener("click", this.show);
  //   // closeCart.addEventListener("click", this.hide);
  // }

  // populate(cart) {
  //   cart.forEach(item => this.addCartItem(item));
  // }

  cartLogic() {
    // Clear Cart
    // confirmOrderBtn.addEventListener("click", () => {
    //   this.confirmOrder();

    // });



    // clearCartBtn.addEventListener("click", () => {
    //   this.clearCart();
    //   this.hide();
    // });

    // Cart Functionality
    // cartContent.addEventListener("click", e => {
    //   const target = e.target.closest("span");
    //   const targetElement = target.classList.contains("remove__item");
    //   if (!target) return;

    //   if (targetElement) {
    //     const id = parseInt(target.dataset.id);
    //     this.removeItem(id);
    //     cartContent.removeChild(target.parentElement);
    //   } else if (target.classList.contains("increase")) {
    //     const id = parseInt(target.dataset.id, 10);
    //     let tempItem = cart.find(item => item.id === id);
    //     tempItem.amount++;
    //     Storage.saveCart(cart);
    //     this.setItemValues(cart);
    //     target.nextElementSibling.innerText = tempItem.amount;
    //   } else if (target.classList.contains("decrease")) {
    //     const id = parseInt(target.dataset.id, 10);
    //     let tempItem = cart.find(item => item.id === id);
    //     tempItem.amount--;

    //     if (tempItem.amount > 0) {
    //       Storage.saveCart(cart);
    //       this.setItemValues(cart);
    //       target.previousElementSibling.innerText = tempItem.amount;
    //     } else {
    //       this.removeItem(id);
    //       cartContent.removeChild(target.parentElement.parentElement);
    //     }
    //   }
    // });
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
      const result = await fetch("../../json/components.json");
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

  // ui.setAPP();

  const products = await productList.getProducts();
  ui.displayProducts(products);
  Storage.saveProduct(products);
  ui.getButtons();
  ui.getViewButtons();
  ui.getEditButtons();
  ui.cartLogic();
  ui.filterButtons();
  ui.deleteButtons();
  ui.saveButtons();
});
