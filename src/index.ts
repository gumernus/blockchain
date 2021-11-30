//TODO: pro blok/block udělat interface
//TODO: dát chain jako samostatnou class
//TODO: rozdělit do více souborů
//TODO: první blok chainu se vždy updatuje podle toho jaký je poslední blok (last "data" = first "prev")
//TODO: přidat types k věcem které typ ještě nemají
//TODO: uspořádat syntax a lépe rozdělit funkce
//TODO: hash funkce přímo do objektu plus salt 
//TODO: hashovat pořadí bloku a timestamp
//TODO: přidat do block objektu objekt tradů

import randomstring from "randomstring"

let chain = []

class block {
    constructor(
        public data: string | boolean,
        public prev: Object | boolean,
        public timestamp: number | boolean,
        public order: number | boolean
    ){}
}

if (chain.length === 0){
    let prev = {
        data: false, 
        timestamp: false, 
        order: false}
        
    let blok:any = new block("block-one", prev, Date.now(), 0)
    chain.push(blok)
    console.log(blok)
}
if (chain.length > 0){
    for (let i : number = 1; i<=5;i++){
        let name:string = randomstring.generate({
            length: 12,
            charset: 'alphabetic'
          });
        let prev = {
            data: chain[i-1].data, 
            timestamp: chain[i-1].timestamp, 
            order: chain[i-1].order}

        let blok:any = new block(name, prev, Date.now(), i)
        chain.push(blok)
       console.log(blok)
    }
}

// console.log("CHAIN: \n" + JSON.stringify(chain, null, ' '))
