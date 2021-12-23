const login = document.querySelector(".login-btn");
const userName = document.querySelector(".username");
const password = document.querySelector(".password");
const textMessage = document.querySelector(".text-message");


const handleLogin = () => {
    let userList = JSON.parse(localStorage.getItem('userList'));
    console.log(userList)

    userList.forEach((user) => {
        if (user.username.toLocaleLowerCase() === userName.value.toLocaleLowerCase() &&
         user.password.toLocaleLowerCase() === password.value.toLocaleLowerCase()) {
             if (user.role === 'user') {
                window.location = "./User/HomeUser.html";
                localStorage.setItem('userName', JSON.stringify(user));
             } else if (user.role === 'admin') {
                window.location = "./Admin/HomeAdmin.html";
             } else {
                console.error("Invalid role: " + user.role);
                localStorage.setItem('userName', user.username);
             }
         } else {
             textMessage.innerText = "Tài khoản hoặc mật khẩu sai!!!";
         }
     })
} 
login.onclick = () => {
    handleLogin();
}

const regUser = document.querySelector(".reg-username");
const regPass = document.querySelector(".reg-password");
const registerBtn = document.querySelector(".register-btn")
const regMessage = document.querySelector(".reg-message");
const regName = document.querySelector(".reg-name");
const handleRegister = () => {
    if (!localStorage.getItem('userList')) {
        localStorage.setItem('userList', JSON.stringify(""));
    }

    let userList = JSON.parse(localStorage.getItem('userList'));

    if (userList) {
        for(let i = 0; i < userList.length; i++) {
            console.log(userList[i]);
            if (userList[i].username.toLocaleLowerCase() === regUser.value.toLocaleLowerCase()) {
                regMessage.innerText = "Tài khoản đã tồn tại!";
                break;
            } else {
                let newUser = {
                    username: regUser.value, 
                    password: regPass.value, 
                    name: regName.value, 
                    role: "user"
                }
                userList = [...userList, newUser];
                localStorage.setItem('userList', JSON.stringify(userList));
                regMessage.innerText = "Đăng ký thành công";
                break;
            }
        }
    } else {
        let newUser = {
            username: regUser.value, 
            password: regName.value, 
            name: regPass.value, 
            role: "user"
        }
        userList = [...userList, newUser];
        localStorage.setItem('userList', JSON.stringify(userList));
        regMessage.innerText = "Đăng ký thành công";
    }
}

 
registerBtn.onclick = () => {

    handleRegister();
}
