let input = document.querySelector("input");
let button = document.querySelector("button");
let copyImg = document.querySelector("i");

let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%^&*";
let allChar = lowerCaseChar + upperCaseChar + symbols;
let generatedPassword = "";

button.addEventListener("click" , () => {

    let lowerCasePass = lowerCaseChar.charAt(Math.floor(Math.random() * lowerCaseChar.length));
    let upperCasePass = upperCaseChar.charAt(Math.floor(Math.random() * upperCaseChar.length));
    let symbolsPass = symbols.charAt(Math.floor(Math.random() * symbols.length));
    

    let allPass = "";
    for(let i = 0 ; i <= 4 ; i++){
        allPass = allPass + allChar.charAt(Math.floor(Math.random() * allChar.length));
    }

    generatedPassword = lowerCasePass + upperCasePass + symbolsPass + allPass;
    input.value = generatedPassword;
})

copyImg.addEventListener("click" , () => {
    if(input.value.length > 0 ) {
        copyText();
        copyImg.classList.replace("fa-copy", "fa-check-double");
        copyImg.style.color = "#5BBCFF";
        copyImg.title = "copied";
        setTimeout(() => {
            copyImg.classList.replace("fa-check-double", "fa-copy");
            copyImg.style.color = "white";
            copyImg.title = "copy";

        }, 4000);
    }
    else{
        alert("Please Generate password to copy text");
    }


})

function copyText() {
    navigator.clipboard.writeText(input.value);
}



