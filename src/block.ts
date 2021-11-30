export interface blockInterface {
    data: string | boolean;
    prev: Object | boolean;
    timestamp: number | boolean;
    order: number | boolean;
}

export default class Block implements blockInterface{
    constructor(
        public data: string | boolean,
        public prev: Object | boolean,
        public timestamp: number | boolean,
        public order: number | boolean
    ){}
}
