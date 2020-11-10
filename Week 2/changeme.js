
function changeMe(arr) {
  // you can only write your code here!
  var arrObj=[]
    
  var keys=["firstName","lastName","Gender","age"]
  for(var i=0;i<arr.length;i++){
    
    var result={}
    
    for(var j=0;j<keys.length;j++){
      if(j==keys.length-1){
        
        if(arr[i][j]== undefined || arr[i][j]>2020){
          result[`${keys[j]}`]='Invalid Birth Year'
          
        }
        else {
          result[`${keys[j]}`]= 2020 - arr[i][j]
        }
        
      }  
        else{
          result[`${keys[j]}`]=arr[i][j]
        }     
        
    }
    // arrObj.push(result)
    arrObj[`${i+1} ${arr[i][0]}  ${arr[i][1]} `]= result
  }

  console.log(arrObj)
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""

