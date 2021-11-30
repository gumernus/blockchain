import Block from "./block"

export default function transferBlock(block: Block, chain: Array<Block>, name: string) {
    let order: Block["order"] = block.order
    console.log(block)
    chain[order].data = name
    chain[order + 1].prev = { data: name, order: chain[order].order, timestamp: chain[order].timestamp }

}
