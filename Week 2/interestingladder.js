let kata = "vincentg"

let temp;
for (let i = 0; i < kata.length; i++) {
    temp = ""
    for (let k = kata.length-1 ; k > i; k--) {
        temp += " "
    }
    //Genap
    if(i%2===0){
        for (let j = 0; j <= i; j++) {
            temp += kata[kata.length-1-j]
        }
    }
    //Ganjil
    else{
        let tempLagi = ""
        for (let j = 0; j <= i; j++) {
            tempLagi += kata[kata.length-1-j]
        }
        for (let l = tempLagi.length-1; l >= 0; l--) {
            temp += tempLagi[l]
        }
    }
    console.log(temp)
}

