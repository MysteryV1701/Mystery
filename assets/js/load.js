window.onload = () => {
    if (!localStorage.getItem('products')) {
       generateProduct();
    }
    if (!localStorage.getItem('userList')) {
       generateUser();
    }
 }