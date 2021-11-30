export interface transferInterface{
    data: string;
    timestamp:number;
}

import Block from "./block"

export default function transferBlock(block: Block, chain: Array<Block>, name: string) {
    let order: Block["order"] = block.order

    //update bloku
    chain[order].transfers.push({data: chain[order].data, timestamp: chain[order].timestamp}) //přidá nový transfer
    chain[order].data = name //nové jméno
    chain[order].timestamp = Date.now() //nový čas

    //update dalšího bloku
    chain[order + 1].prev = { data: name, order: chain[order].order, timestamp: chain[order].timestamp }

}
