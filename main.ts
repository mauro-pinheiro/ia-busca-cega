import {Node} from "./Node.ts";
import {Grafo} from "./Grafo.ts";
import {buscaLargura} from "./buscaLargura.ts"
import {buscaProfundidade} from "./buscaProfundidade.ts"

const grafo = new Grafo();

grafo
    .addNode("A")
    .addNode("B")
    .addNode("C")
    .addNode("D")
    .addAresta("A", "B")
    .addAresta("B","C")
    .addAresta("A","D");

// Representação visual do grafo acima;
//                  A
//                 / \
//                B   D
//               /
//              C

console.log("\nBusca em Largura: ");
buscaLargura(grafo, "A", "D");

console.log("\nBusca em Profundidade: ");
buscaProfundidade(grafo, "A", "D");