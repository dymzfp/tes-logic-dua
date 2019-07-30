function anagram(arr) {
  
  let hasil = []
  let cocok = 0
  
  for(let i = 0; i < arr.length; i++) {  
     for(let x = 0; x < arr.length; x++) {
       if(i == x) {
         continue
       }
       
       if(arr[i].length == arr[x].length) {
         for(let y = 0; y < arr[i].length; y++) {
           for(let c = 0; c < arr[x].length; c++) {
             
             if(arr[i][y] == arr[x][c]) {
               cocok += 1
             }
             
           }
         }
         
         if(cocok == arr[i].length) {
           hasil.push(arr[i])
         }
       }
       
       cocok = 0
       
     }
  }
  
  hasil = [ ...new Set(hasil) ]
  console.log(hasil.join(", "))
  
}

var arr = ["bat", "code", "cat", "act", "cab", "crazy", "tac"]
anagram(arr)

