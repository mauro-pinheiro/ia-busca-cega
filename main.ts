import {Node} from "./Node.ts";
import {Grafo} from "./Grafo.ts";
import {buscaLargura} from "./buscaLargura.ts"
import {buscaProfundidade} from "./buscaProfundidade.ts"
import {buscaCustoUniforme} from "./buscaCustoUniforme.ts"
import {buscaProfundidadeLimitada} from "./buscaProfundidadeLimitada.ts"
import {buscaProfundidadeAprofundamentoInterativo} from "./buscaProfundidadeAprofundamentoInterativo.ts"

const grafo = new Grafo();

grafo
    .addNode("A")
    .addNode("B")
    .addNode("C")
    .addNode("D")
    .addAresta("A","B", 3)
    .addAresta("B","C", 2)
    .addAresta("A","D", 1);

// Representação visual do grafo acima;
//                  A
//                 / \
//                B   D
//               /
//              C

const bl = buscaLargura(grafo, "A", "D");
console.log("\nBusca em Largura: " + bl);

const bcu = buscaCustoUniforme(grafo, "A", "D")
console.log("\nBusca de Custo Uniforme: " + bcu);

const bp = buscaProfundidade(grafo, "A", "D").solucao;
console.log("\nBusca em Profundidade: " + bp);

const bpl = buscaProfundidadeLimitada(grafo, "A", "D").solucao;
console.log("\nBusca em Profundidade Limitada: " + bpl);

const bplai = buscaProfundidadeAprofundamentoInterativo(grafo, "A", "D")
console.log("\nBusca em Profundidade Limitada Aprofundamento Iterativo: " + bplai);