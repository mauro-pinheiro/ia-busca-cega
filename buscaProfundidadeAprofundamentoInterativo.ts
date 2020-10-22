import { Node } from "./Node.ts";
import { Grafo } from "./Grafo.ts";
import { buscaProfundidadeLimitada } from "./buscaProfundidadeLimitada.ts";

export function buscaProfundidadeAprofundamentoInterativo(
    grafo: Grafo,
    node_inicio: string | Node,
    node_fim: string | Node,
    maximo: number = 10): string[] {

    for (let limite = 0; limite < maximo; limite++) {
        const blp = buscaProfundidadeLimitada(grafo, node_inicio, node_fim, [], limite);
        if(blp.saiu){
            return blp.solucao;
        }
    }
    return [];
}