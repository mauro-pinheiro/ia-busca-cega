import { Node } from "./Node.ts";

export class Custo{
    private _node: Node
    private _custo: number;

    constructor(node: Node, custo: number){
        this._node = node;
        this._custo = custo;
    }

    public get node(){
        return this._node;
    }

    public get custo(){
        return this._custo;
    }
}