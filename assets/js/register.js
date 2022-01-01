

const registerBtn = document.querySelector(".register-btn")
const regMessage = document.querySelector(".reg-message");

const regUser = document.querySelector(".reg-username");
const regPass = document.querySelector(".reg-password");
const regPass2 = document.querySelector(".reg-password2");
const regEmail = document.querySelector(".reg-email")
const regName = document.querySelector(".reg-name");
const regTel=document.querySelector(".reg-tel");


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
                    telephone:regTel.value,
                    email:regEmail.value,
                    role: "user"
                }
                userList = [...userList, newUser];
                localStorage.setItem('userList', JSON.stringify(userList));
                regMessage.innerText = "Đăng ký thành công";
                // regUser.value="",
                // regPass.value="",
                // regPass2.value="",
                // regEmail.value="",
                // regName.value="",
                // regTel.value=""
            }
        }
    } else {
        let newUser = {
            username: regUser.value, 
            password: regPass.value, 
            name: regName.value, 
            telephone:regTel.value,
            email:regEmail.value,
            role: "user"
        }
        userList = [...userList, newUser];
        localStorage.setItem('userList', JSON.stringify(userList));
        regMessage.innerText = "Đăng ký thành công";
        // regUser.value="",
        // regPass.value="",
        // regPass2.value="",
        // regEmail.value="",
        // regName.value="",
        // regTel.value=""
    }
}

registerBtn.onclick = () => {
    handleRegister();
}
