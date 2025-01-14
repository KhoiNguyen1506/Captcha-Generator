const captcha = document.querySelector(".captacha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector("input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-txt");

//All alphabet letters and numbers from 0 to 9
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha() {
    for (let i = 0; i < 6; i++){
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomChar}`;
    }
}

getCaptcha();
reloadBtn.addEventListener("click", () =>{
    captcha.innerText = "";
    getCaptcha();
    statusTxt.innerText = "";
});

checkBtn.addEventListener("click", e =>{
    e.preventDefault();
    statusTxt.style.display = "block";
    let inputVal = inputField.value.split('').join(' ');       //Comment this out if you want the user to input correctly as displayed in the captch with spaces
    if (inputVal == captcha.innerText){
        statusTxt.style.color = "#4db2ec";
        statusTxt.innerText = "Good job! You don't appear to be a robot.";
        setTimeout(() => {
            statusTxt.style.display = "none";
            inputField.value = "";
            captcha.innerText = "";
            getCaptcha();
        }, 2500);
    }
    else{
        statusTxt.style.color = "#ff0000";
        statusTxt.innerText = "Captcha not matched. Please try again!";
    }
});
