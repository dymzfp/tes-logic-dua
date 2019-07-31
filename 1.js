function arrgh(kata) {
  
  let dic = ["hot", "dot", "dog", "lot", "log"] 
  let abjad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var kata = kata.split(" ")
  let strAngka = []
  let kataAngka = []
  let dicAngka = []
  
  for(let i = 0; i < dic.length; i++) {
    for(let x = 0; x < dic[i].length; x++) {
      for(let c = 0; c < abjad.length; c++) {    
          if(abjad[c] == dic[i][x]) {
            strAngka.push(c)
          }
       }
    }
    dicAngka.push(strAngka)
    strAngka = []
  }
  
  for(let i = 0; i < kata.length; i++) {
    for(let x = 0; x < kata[i].length; x++) {
      for(let c = 0; c < abjad.length; c++) {    
          if(abjad[c] == kata[i][x]) {
            strAngka.push(c)
          }
       }
    }
    
    kataAngka.push(strAngka)
    strAngka = []
  }
  
  console.log(kataAngka)
  //console.log(dicAngka)
  
  let huruf1 = kataAngka[0]
  let selisih = [], sel = []
  
  //dicAngka.push(kataAngka[1])
  
  console.log(dicAngka)
  
  for(let y = 0; y < dicAngka.length; y++) {
    if(dicAngka[y].length = huruf1.length) {
      for(let u = 0; u < dicAngka[y].length; u++) {
        if(huruf1[u] > dicAngka[y][u]) {
          sel.push(huruf1[u]-dicAngka[y][u])
        }
        else {
          sel.push(dicAngka[y][u]-huruf1[u])
        }
      }
      
      selisih.push([dicAngka[y], sel])
      sel = []
    }
    
  }
  
  
  
  console.log(selisih[0])
  
}

arrgh("hit bot")