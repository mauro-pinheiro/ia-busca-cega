/**
 * Repesenta um nó no grafo.
 */
export class Node{
    private _rotulo: string
    private _visitado: boolean
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

    public addAdjacente(node: Node) : Node{
        if(node !== undefined){
            this._adjacentes.push(node);
        }
        return this;
    }
}