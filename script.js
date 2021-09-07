const elHeader = document.querySelector('.header');

let yourname = prompt('Ismingizni kiriting:')
let score = prompt(yourname + ' Ballingizni kiriting', 0) -0

if(score < 80){
    elHeader.textContent = yourname + ' siz  talabalikga tavsiya etilmadingiz'
}else if(score >= 80 && score <= 100){
    let confirmStudent = confirm(' Siz super kontrakt asosida o\'qishga tavsiya qilindingiz kontrakt miqdori 3000$ \n Rozimisiz ?')
    if(confirmStudent){
        let userMoney = prompt('Qancha pulingiz bor')
        if(userMoney >= 3000){
            elHeader.textContent = yourname + ' siz talabasiz :)'
        }else{
            elHeader.textContent = yourname + ' siz  talabalikga tavsiya etilmadingiz'
        }
    }
    
}else if(score >= 101 && score <= 150){
    let confirmStudent = confirm(' Siz  kontrakt asosida o\'qishga tavsiya qilindingiz kontrakt miqdori 2000$ \n Rozimisiz ?')
    if(confirmStudent){
        let userMoney = prompt('Qancha pulingiz bor')
        if(userMoney >= 2000){
            elHeader.textContent = yourname + ' siz talabasiz :)'
        }else{
            elHeader.textContent = yourname + ' siz  talabalikga tavsiya etilmadingiz'
        }
    }
}else if(score >= 151 && score <= 200){
    let confirmStudent = confirm(' Siz  grand asosida o\'qishga tavsiya qilindingiz')
    elHeader.textContent = yourname + ' siz talabasiz :)'
}else{
    elHeader.textContent = yourname + " siz noto'g'ri ball kiritdingiz !!!"
}