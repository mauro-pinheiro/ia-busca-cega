import {Node} from "./Node.ts";
import {Grafo} from "./Grafo.ts";

interface ISolucao{
    saiu: boolean
    solucao: string[]
}

export function buscaProfundidade(grafo: Grafo, node_inicio: string|Node, node_fim: string|Node, saiu = false, primeira: boolean = true, solucao: string[] = []) : ISolucao{
    const inicio = grafo.nodes[grafo.indexOf(node_inicio)];
    const fim = grafo.nodes[grafo.indexOf(node_fim)];

    if(primeira){ //Primeira interacao;
        // console.log(inicio.rotulo);
        solucao.push(inicio.rotulo)
        primeira = false;
    }

    if(inicio === undefined || fim === undefined){
        console.log("Nodes invalidos!");
        return {saiu: true, solucao: solucao};
    }

    if(node_inicio === node_fim){
        return {saiu: true, solucao: solucao};
    } else if(!saiu){
        for (let index = 0; index < inicio.adjacentes.length; index++) {
            const vertice = inicio.adjacentes[index];
            if(vertice === fim && !saiu){
                solucao.push(vertice.rotulo)
                return {saiu: true, solucao: solucao};
            }
            if(!vertice.visitado && !saiu){
                solucao.push(vertice.rotulo)
                saiu = buscaProfundidade(grafo,vertice,fim, saiu, primeira, solucao).saiu
            }
        }
    }
    return {saiu: false, solucao: solucao};
}