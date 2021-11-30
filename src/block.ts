
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
        public transfers: Object,
        public prev: prevInterface
    ) { }
}
