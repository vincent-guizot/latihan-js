let people = ["Andre", "Kevin"]

function antrian(line, person) {
    line.push(person);

    return line
}

// console.log(antrian(people,"Gerry"))

function panggilAntrian(line) {
    line.shift()

    return line
}

// console.log(panggilAntrian(people))

function tumpukan(line, title) {
    line.unshift(title)

    return line
}

// console.log((tumpukan(people,"Stella")))

function ganjilGenap(plat) {
    if (plat === "") {
        return "Plat tidak ditemukan"
    } else if (plat === undefined) {
        return "Invalid Data"
    } else {
        let flagGanjil = 0;
        let flagGenap = 0;
        let tempNumber = []
        let temp = "";
        for(let i=0;i<plat.length;i++){
            if(plat[i] !== ";"){
                temp += plat[i]    
            }else if(plat[i] === ";"){
                tempNumber.push(Number(temp));
                temp = "";
            }
            if(i === plat.length-1){
                tempNumber.push(Number(temp));
                temp = "";
            }
        }
        
        for(let i=0;i<tempNumber.length;i++){
            if(tempNumber[i] % 2 === 0){
                flagGenap++
            }else {
                flagGanjil++
            }
        }
        
        if(flagGanjil === 0){
            return `Plat genap ${flagGenap}, dan plat ganjil tidak ditemukan`
        }
        if(flagGenap === 0){
            return `Plat genap tidak ditemukan, dan plat ganjil ${flagGanjil}`
        }
        return `Plat genap ${flagGenap}, dan plat ganjil ${flagGanjil}`
    }
}

console.log(ganjilGenap("2341;3429;864;1309;1276"))
console.log(ganjilGenap("2347;3429;1305"))
console.log(ganjilGenap("864;1308;1276;1432"))
console.log(ganjilGenap(""))
console.log(ganjilGenap())
