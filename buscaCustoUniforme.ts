import {Node} from "./Node.ts";
import {Grafo} from "./Grafo.ts";

export function buscaCustoUniforme(grafo: Grafo, node_inicio: string|Node, node_fim: string|Node) : string[]{
    
    const inicio = grafo.nodes[grafo.indexOf(node_inicio)];
    const fim = grafo.nodes[grafo.indexOf(node_fim)];

    const solucao: string[] = [];

    if(inicio === undefined || fim === undefined){
        console.log("Nodes invalidos!");
        return solucao;
    }

    if(inicio === fim){
        // console.log(inicio.rotulo)
        solucao.push(inicio.rotulo);
        return solucao;
    }

    const fila: Node[] = []
    
    fila.push(inicio);
    inicio.visitado = true;
    // console.log(inicio.rotulo);
    solucao.push(inicio.rotulo);

    while(fila.length > 0){
        const node = fila.shift() as Node;
        for (let index = 0; index < node.custos.length; index++) {
            const vertice = node.custos[index].node;
            if(!vertice.visitado){
                if(vertice.rotulo === node_fim){
                    // console.log(vertice.rotulo);
                    solucao.push(vertice.rotulo);
                    return solucao;
                }
                fila.push(vertice);
                // console.log(vertice.rotulo);
                solucao.push(vertice.rotulo);
            } 
        }
    }
    // console.log("Caminho não encontrado!");
    return [];
}