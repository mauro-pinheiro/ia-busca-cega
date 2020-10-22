import {Node} from "./Node.ts";
import {Grafo} from "./Grafo.ts";

export function buscaLargura(grafo: Grafo, node_inicio: string|Node, node_fim: string|Node){
    
    const inicio = grafo.nodes[grafo.indexOf(node_inicio)];
    const fim = grafo.nodes[grafo.indexOf(node_fim)];

    if(inicio === undefined || fim === undefined){
        console.log("Nodes invalidos!");
        return;
    }

    if(inicio === fim){
        console.log(inicio.rotulo)
        return;
    }

    const fila: Node[] = []
    
    fila.push(inicio);
    inicio.visitado = true;
    console.log(inicio.rotulo);

    while(fila.length > 0){
        const node = fila.shift() as Node;
        for (let index = 0; index < node.adjacentes.length; index++) {
            const vertice = node.adjacentes[index];
            if(!vertice.visitado){
                if(vertice.rotulo === node_fim){
                    console.log(vertice.rotulo);
                    return;
                }
                fila.push(vertice);
                console.log(vertice.rotulo);
            } 
        }
    }
    console.log("Caminho não encontrado!");
}