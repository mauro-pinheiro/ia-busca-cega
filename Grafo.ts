import { Node } from "./Node.ts";



/**
 * Representa um grafo
 */
export class Grafo {
    private _nodes: Node[] = [];

    public get length(): number {
        return this._nodes.length;
    }

    public get nodes(): ReadonlyArray<Node> {
        return this._nodes;
    }

    public addNode(node: Node | string): Grafo {
        if (node === undefined) {
            return this;
        }

        if (this.indexOf(node) !== -1) {
            return this;
        }

        if (typeof node === "string") {
            this._nodes.push(new Node(node))
        } else {
            this._nodes.push(node);
        }

        return this;
    }

    public indexOf(node: string | Node): number {
        if (node === undefined) {
            return -1;
        }
        if (typeof node === "string") {
            const n = this._nodes.filter(n => n.rotulo === node)[0];
            return this._nodes.indexOf(n);
        } else {
            return this._nodes.indexOf(node);
        }
    }

    public addAresta(node1: string|Node, node2: string|Node, custo: number = 0): Grafo {
        const index1 = this.indexOf(node1);
        const index2 = this.indexOf(node2);
        this._nodes[index1].addAdjacente(this._nodes[index2], custo);
        return this;
    }
}
