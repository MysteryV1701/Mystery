const userBlock = document.querySelector('.username');
const userBlock1 = document.querySelector('.username1');
const userBlock2 = document.querySelector('.username2');
const logOut = document.querySelector('.log-out');

let currentUser = JSON.parse(localStorage.getItem('userName'));

userBlock.innerHTML = currentUser.name;
userBlock1.innerHTML = currentUser.name;
userBlock2.innerHTML = currentUser.name;
logOut.onclick = () => {
    localStorage.removeItem('userName');
    window.location.replace("./index.html");
}