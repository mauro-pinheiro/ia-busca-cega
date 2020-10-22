import {Node} from "./Node.ts";
import {Grafo} from "./Grafo.ts";

export function buscaProfundidadeLimitada(grafo: Grafo, node_inicio: string|Node, node_fim: string|Node, profundidade: number = 0, saiu = false, primeira: boolean = true) : boolean{
    const LIMITE = 1;
    if(profundidade >= LIMITE){
        return false;
    }
    profundidade++;
    const inicio = grafo.nodes[grafo.indexOf(node_inicio)];
    const fim = grafo.nodes[grafo.indexOf(node_fim)];
    
    if(primeira){ //Primeira interacao;
        console.log("Profundidade: " + profundidade);
        console.log(inicio.rotulo);
        primeira = false;
    }
    
    
    if(inicio === undefined || fim === undefined){
        console.log("Nodes invalidos!");
        return false;
    }

    if(node_inicio === node_fim){
        console.log(inicio);
        return true;
    } else if(!saiu){
        for (let index = 0; index < inicio.adjacentes.length; index++) {
            const vertice = inicio.adjacentes[index];
            console.log("Profundidade: " + profundidade);
            if(vertice === fim && !saiu){
                console.log(vertice.rotulo)
                return true;
            }
            if(!vertice.visitado && !saiu){
                console.log(vertice.rotulo)
                saiu = buscaProfundidadeLimitada(grafo,vertice,fim, profundidade, saiu, primeira)
            }
        }
    }
    return false
}