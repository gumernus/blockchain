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

//TODO: UPDATE STRUKTURY BLOKU ==> { header:{ version, prev, timestamp, nonce, hash } transactions{ from, to }}

export interface BlockPrev {
    version: BlockHeader["version"];
    hash: BlockHeader["hash"];
    timestamp: BlockHeader["timestamp"];
}

export interface BlockHeader {
    version: number; 
    hash: string;
    prev: BlockPrev;
    timestamp: number;
    nonce: number;
    mediaurl: string //obrázek atd
}

export interface BlockTransactions {
    from: string //user 1
    to: string //user 2
}

export class NewBlock{ //přidat default
    constructor(
        
    ){ }
}





