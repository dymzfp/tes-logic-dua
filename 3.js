function saham(sah) {
  
  let terbesar = Math.max(...sah)
  let selisih = []
  let sel, maxProfit
  
  if(sah[0] == terbesar) {
    console.log("Tidak bisa membeli saham")
  }
  else {
    for(let i = 0; i < sah.length; i++) {
    
      for(let x = i+1; x < sah.length; x++) {
      
          if(sah[i] < sah[x]) {
            sel = sah[x] - sah[i]
            selisih.push(sel)
          }
      
      }
    
    }
    
    maxProfit = Math.max(...selisih)
    console.log(maxProfit)
  }
  
  
}

let hargaSaham = [5, 6, 15, 3, 10, 22, 15]
saham(hargaSaham)

