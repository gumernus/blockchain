//TODO: dát chain jako samostatnou class
//TODO: rozdělit do více souborů
//TODO: první blok chainu se vždy updatuje podle toho jaký je poslední blok (last "data" = first "prev")
//TODO: uspořádat syntax a lépe rozdělit funkce
//TODO: hash funkce přímo do objektu plus salt 
//TODO: hashovat pořadí bloku a timestamp
//TODO: přidat do block objektu objekt tradů

import randomstring from "randomstring"
import Block, { prevInterface } from "./block"

let chain: Array<Block> = []

if (chain.length === 0) {
    let prev:prevInterface = {
        data: false,
        timestamp: false,
        order: false
    }

    let blok: Block = new Block("block-one", Date.now(), 0, prev)
    chain.push(blok)
    console.log(blok)
}
if (chain.length > 0) {
    for (let i: number = 1; i <= 3; i++) {
        let name: string = randomstring.generate({
            length: 12,
            charset: 'alphabetic'
        });
        let prev:prevInterface = {
            data: chain[i - 1].data,
            timestamp: chain[i - 1].timestamp,
            order: chain[i - 1].order
        }

        let blok: Block = new Block(name, Date.now(), i, prev)
        chain.push(blok)
        console.log(blok)
    }
}

// console.log("CHAIN: \n" + JSON.stringify(chain, null, ' '))
