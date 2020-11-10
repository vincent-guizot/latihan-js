function shoutOut() {
    // console.log("Halo function!")
    // let isCooked = false;
    
    // //shorthand
    // if (isCooked) {
    //     return 1;
    // } else {
    //     return 0;
    // }

    return "Halo Function!"
}

console.log(shoutOut())

function calculateMultiply(num1,num2){
    return num1 * num2;
}
let hasilPerkalian = calculateMultiply(5,7);
console.log(hasilPerkalian)

function processSentence(name,age,address,hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}.`
}

let fullSentence = processSentence("Gerry",29,"Jl. Sunter","Belajar")
console.log(fullSentence)