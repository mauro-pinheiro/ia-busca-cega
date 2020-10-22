import { Node } from "./Node.ts";
import { Grafo } from "./Grafo.ts";

interface ISolucao{
    saiu: boolean
    solucao: string[]
}

export function buscaProfundidadeLimitada(
    grafo: Grafo,
    node_inicio: string | Node,
    node_fim: string | Node,
    solucao: string[] = [],
    limite: number = 1,
    profundidade: number = 0,
    saiu = false, primeira: boolean = true): ISolucao {

    if (profundidade >= limite) {
        return {saiu: false, solucao: solucao};
    }
    const inicio = grafo.nodes[grafo.indexOf(node_inicio)];
    const fim = grafo.nodes[grafo.indexOf(node_fim)];

    if (primeira) { //Primeira interacao;
        console.log("Profundidade: " + profundidade);
        solucao.push(inicio.rotulo);
        primeira = false;
    }

    profundidade++;

    if (inicio === undefined || fim === undefined) {
        console.log("Nodes invalidos!");
        return {saiu: false, solucao: solucao};
    }

    if (node_inicio === node_fim) {
        solucao.push(inicio.rotulo);
        return {saiu: true, solucao: solucao};
    } else if (!saiu) {
        for (let index = 0; index < inicio.adjacentes.length; index++) {
            const vertice = inicio.adjacentes[index];
            console.log("Profundidade: " + profundidade);
            if (vertice === fim && !saiu) {
                solucao.push(vertice.rotulo)
                return {saiu: true, solucao: solucao};
            }
            if (!vertice.visitado && !saiu) {
                solucao.push(vertice.rotulo)
                saiu = buscaProfundidadeLimitada(grafo, vertice, fim, solucao, profundidade, limite, saiu, primeira).saiu
            }
        }
    }
    return {saiu: false, solucao: solucao};
}