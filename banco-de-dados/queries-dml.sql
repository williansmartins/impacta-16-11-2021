-- DML
-- CRUD
-- CREATE (criar registros)
INSERT INTO QUIZ_PESSOA VALUES (null, 'Willians Martins');
INSERT INTO QUIZ_PESSOA VALUES (null, 'Luis Felipe Martins');

-- READ (buscar registros)
SELECT * FROM QUIZ_PESSOA;

-- UPDATE (atualizar registros)
UPDATE QUIZ_PESSOA 
SET nome = 'Willians Martins'
WHERE id = 3;

-- DELETE (remover registros)
DELETE FROM QUIZ_PESSOA
WHERE id BETWEEN DATE() and DATE();
