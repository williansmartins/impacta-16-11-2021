# impacta-quiz

## Entidades:
- pessoa
- assunto
- pergunta
- historico

## Descritivo das Entidades
pessoa
  - id
  - nome (joao mascarenhas fdsfsdafas)

assuntos
  - id
  - tema
  - titulo
  
pergunta
  - id (1,2,3)
  - assunto_id (CHAVE ESTRAGEIRA 1, 2, 3)
  - titulo (quem tem mais título no futebol?)
  - resposta1 (são paulo)
  - resposta2 (esporte)
  - resposta3 (palmeiras)
  - correta (2)


historico
  - pessoa_id
  - assunto_id
  - pergunta_id
  - resposta_id
  - respondeu (1)
