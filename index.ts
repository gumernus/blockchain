//TODO: pro blok/block udělat interface
//TODO: přidat timestamp do bloku
//TODO: dát chain jako samostatnou class
//TODO: rozdělit do více souborů
//TODO: dát na github (veřejně)
//TODO: první blok chainu se vždy updatuje podle toho jaký je poslední blok (last "data" = first "prev")
//TODO: přidat types k věcem které typ ještě nemají
//TODO: uspořádat syntax a lépe rozdělit funkce
//TODO: hash funkce přímo do objektu plus salt 
//TODO: hashované pořadí bloku
//TODO: přidat do block objektu objekt tradů

import randomstring from "randomstring"

let chain = []

class block {
    constructor(
        public data: string,
        public prev: boolean | Object
    ){
        this.data = data
        this.prev = prev
    }
}

if (chain.length === 0){
    let blok:any = new block("lmao 1. blok", false)
    chain.push(blok)
    //console.log(blok)
}
if (chain.length > 0){
    for (let i : number = 0; i<=100;i++){
        let name:string = randomstring.generate({
            length: 12,
            charset: 'alphabetic'
          });
        let blok:any = new block(i + " " + name, chain[chain.length-1].data)
        chain.push(blok)
       //console.log(blok)
    }
}

console.log("CHAIN: \n" + JSON.stringify(chain, null, ' '))
