function saham(sah) {
  
  
  let selisih = []
  let sel, maxProfit
  let error = 0
  
    for(let i = 0; i < sah.length; i++) {
      
      if(sah[i] > sah[i+1]) {
        error += 1
      }
      
      for(let x = i+1; x < sah.length; x++) {
      
          if(sah[i] < sah[x]) {
            sel = sah[x] - sah[i]
            selisih.push(sel)
          }
      
      }
    
    }
  
    if(error == sah.length - 1) {
      console.log("Tidak dapat memebeli saham")
    }
    else {
      maxProfit = Math.max(...selisih)
      console.log(maxProfit)
    }
  
}

let hargaSaham = [100, 90, 80, 75, 65, 7, 0, 20]
saham(hargaSaham)
