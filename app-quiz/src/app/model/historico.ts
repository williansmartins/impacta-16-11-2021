import { Pergunta } from "./pergunta";
import { Pessoa } from "./pessoa";

export class Historico {
    id;
    pessoa: Pessoa;
    pergunta: Pergunta;
    resposta: String
}
