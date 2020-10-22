import {Custo} from "./Custo.ts"
/**
 * Repesenta um nó no grafo.
 */
export class Node{
    private _rotulo: string
    private _visitado: boolean
    private _custos: Custo[] = []
    private _adjacentes: Node[] = []

    constructor(rotulo: string){
        this._rotulo = rotulo
        this._visitado = false
    }

    public get visitado() : boolean{
        return this._visitado
    }

    public set visitado(visitado: boolean){
        this._visitado = visitado;
    }

    public get rotulo() : string{
        return this._rotulo
    }

    public get adjacentes() : ReadonlyArray<Node>{
        return this._adjacentes;
    }

    public get custos() : ReadonlyArray<Custo>{
        return this._custos.sort((a: Custo,b: Custo) => a.custo > b.custo ? 1 : a.custo < b.custo ? -1 : 0);
    }
    

    public addAdjacente(node: Node, custo: number = 0) : Node{
        if(node !== undefined){
            this._custos.push(new Custo(node, custo));
            this._adjacentes.push(node);
        }
        return this;
    }
}