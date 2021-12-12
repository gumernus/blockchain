//TODO: dát chain jako samostatnou class
//TODO: rozdělit do více souborů
//TODO: první blok chainu se vždy updatuje podle toho jaký je poslední blok (last "data" = first "prev")
//TODO: uspořádat syntax a lépe rozdělit funkce
//TODO: hash funkce přímo do objektu plus salt 
//TODO: hashovat pořadí bloku a timestamp
//TODO: update druhý blok podle toho jestli byl první blok updatnut
//TODO: public, private key
//TODO: UPDATE STRUKTURY BLOKU ==> { header:{ version, prev, timestamp, nonce, merkle root } transactions{ from, to, amount }}
//TODO: first block => genesis block
//TODO: změnit transakce => pokud se nějkaý blok změní ten před ním to nebude registrovat
//TODO: block validation pokud se nějkaý block změní bude to hned zjištěno
//TODO: P2P network

import randomstring from "randomstring"
import Block, { prevInterface } from "./block"
import transferBlock from "./transfer"


let chain: Array<Block> = []

if (chain.length === 0) {
    let prev:prevInterface = {
        data: false,
        timestamp: false,
        order: false
    }

    let blok: Block = new Block("genesis-block", Date.now(), 0, [] ,prev)
    chain.push(blok)
    // console.log(blok)
}
if (chain.length > 0) {
    for (let i: number = 1; i <= 4; i++) {
        let name: string = randomstring.generate({
            length: 12,
            charset: 'alphabetic'
        });
        let prev:prevInterface = {
            data: chain[i - 1].data,
            timestamp: chain[i - 1].timestamp,
            order: chain[i - 1].order
        }

        let blok: Block = new Block(name, Date.now(), i, [], prev)
        chain.push(blok)
        // console.log(blok)
    }
}


transferBlock(chain[1], chain, "sexy")
console.log(chain)

