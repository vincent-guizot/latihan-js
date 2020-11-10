// let numbers = [1,2,3,4,5]
// // let string = "Hello World";

// //Function Declaration
// function printArray(kata){
//     console.log("Ini dalam function")
//     console.log(kata[0])
//     dalamPrintArray();
// }

// function dalamPrintArray(){
//     console.log("Dalam function")
// }
// //Manfaat function :
// //DRY -> Don't Repeat yourself
// //Reuse
// // ----------------------------------------------------

// //Function Expression
// // var printArray = function(kata){
// //     console.log("Ini dalam function")
// //     console.log(kata[0])
// // }

// //Invoke Function
// printArray("Selamat pagi");
// printArray("Uda makan belum");

// //Function Arrow -> ES6
// // var printArray = (string) => {

// // }

//Shape of I

let num = 15;

if (num < 4 || num > 15) {
    console.log("Invalid Number")
}
else {
    //Num genap
    if (num % 2 === 0) {
        let temp;
        for (let i = 0; i < num; i++) {
            if (i === 0 || i === num - 1) {
                temp = ""
                for (let j = 0; j < num; j++) {
                    temp += "#"
                }
                console.log(temp)
            }
            else {
                // console.log("Genap")
                let indexCenter = num / 2

                let tempGenap = "";
                for (let k = 0; k < num; k++) {
                    if (k === indexCenter || k===indexCenter-1) {
                        tempGenap += "|"
                    }
                    else {
                        tempGenap += " "
                    }
                }
                console.log(tempGenap)
            }
        }
    }
    //Num ganjil
    else {
        let temp;
        for (let i = 0; i < num; i++) {
            if (i === 0 || i === num - 1) {
                temp = ""
                for (let j = 0; j < num; j++) {
                    temp += "#"
                }
                console.log(temp)
            }
            else {
                //Untuk menemukan index tengah
                let indexCenter = (num - 1) / 2

                let tempGanjil = "";
                for (let k = 0; k < num; k++) {
                    if (k === indexCenter) {
                        tempGanjil += "|"
                    }
                    else {
                        tempGanjil += " "
                    }
                }
                console.log(tempGanjil)

            }
        }
    }

}