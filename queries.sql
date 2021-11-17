## DDL
-- create
CREATE TABLE PESSOA (
  id INTEGER(10) PRIMARY KEY AUTO_INCREMENT,
  nome TEXT(100) NOT NULL
);

CREATE TABLE ASSUNTO (
  id INTEGER(10) PRIMARY KEY AUTO_INCREMENT,
  tema VARCHAR(100) NOT NULL,
  assunto VARCHAR(100) NOT NULL
);

CREATE TABLE PERGUNTA (
  id INTEGER(10) PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  resposta1 VARCHAR(255) NOT NULL,
  resposta2 VARCHAR(255) NOT NULL,
  resposta3 VARCHAR(255) NOT NULL,
  correta INTEGER(1) NOT NULL,
  assunto_id INTEGER(10) NOT NULL,
  
  FOREIGN KEY (assunto_id) REFERENCES ASSUNTO(id)
);

CREATE TABLE HISTORICO (
	pessoa_id   INTEGER(10) NOT NULL,
	pergunta_id INTEGER(10) NOT NULL,
	resposta INTEGER(1),
	
	-- FOREIGN KEY (<campo desta tabela>) REFERENCES <OUTRA TABELA>(<nome da coluna que é PK>),
	FOREIGN KEY (pessoa_id) REFERENCES PESSOA(id),
	FOREIGN KEY (pergunta_id) REFERENCES PERGUNTA(id)
);
