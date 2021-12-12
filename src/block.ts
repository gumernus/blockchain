export interface prevInterface {
    data: Block["data"] | boolean;
    timestamp: Block["timestamp"] | boolean;
    order: Block["order"] | boolean;
}

export default class Block {
    constructor(
        public data: string,
        public timestamp: number,
        public order: number,
        public transfers: Array<Object>,
        public prev: prevInterface
    ) { }
}




// NEW STUFF

//TODO: UPDATE STRUKTURY BLOKU ==> { header:{ version, prev, timestamp, nonce, merkle root } transactions{ from, to, amount }}

export interface BlockPrev {
    data: Block["data"] | boolean;
    timestamp: Block["timestamp"] | boolean;
    order: Block["order"] | boolean;
}

export interface BlockHeader {
    version: number; 
    prev: BlockPrev;

}

export interface BlockTransactions {

}

export class newBlock{ //přidat default
    constructor(
        
    ){ }
}
