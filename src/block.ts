//FIX: dát "prev" na konec interface a taky ve všech .push
//FIX: odstranit boolean a v "chain[0]" ho nahradit věcmi který to mají být ale s "0" value

export interface blockInterface {
    data: string | boolean;
    prev: Object | boolean;
    timestamp: number | boolean;
    order: number | boolean;
}

export interface prevInterface {
    data: string | boolean
    timestamp: string | boolean
    order: string | boolean
}

export default class Block implements blockInterface {
    constructor(
        public data: string | boolean,
        public prev: Object | boolean,
        public timestamp: number | boolean,
        public order: number | boolean
    ) { }
}
