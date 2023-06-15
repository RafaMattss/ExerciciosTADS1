ALTER TABLE departamentos ALTER COLUMN nome_departamento TYPE varchar(50);

INSERT INTO cursos VALUES (1, 1, 'ADS','Tecnólogo em Análise e Desenvolvimento de Sistemas'),
(2, 1, 'MEC','Tecnólogo en Necatrônica'),
(3, 2, 'DEV','Técnico em Desenvolvimento de Sistemas'),
(4, 2, 'MEC','Técnico em Mecatrônica'),
(5, 3, 'EME','Eletricista de Manutenção Eletroeletrônico'),
(6, 3, 'MUS','Mecânico de Usinagem'),
(7, 3, 'ADM','Administração'),
(8, 4, 'CLP','Controladores Lógicos Programáveis'),
(9, 4, 'EXC','Excel'),
(10, 4, 'PBI','Power BI'),
(11, 4, 'ROB','Robótica Industrial'),
(12, 4, 'EIN','Eletricista Instalador'),
(13, 4, 'HDR','Hidraulica'),
(14, 4, 'PNE','Pneumática'),
(15, 4, 'FER','Ferramenteiro');

SELECT * FROM cursos;

SELECT sigla_curso,nome_curso FROM cursos;

SELECT COUNT('any') FROM cursos;


SELECT departamentos.sigla_departamento, cursos.nome_curso FROM cursos INNER JOIN departamentos
ON departamentos.id_departamento = cursos.id_departamento;

SELECT id_departamento, COUNT(id_curso) FROM Cursos GROUP BY id_departamento;

SELECT sigla_departamento, count(nome_curso) FROM cursos NATURAL INNER JOIN departamentos GROUP BY 
sigla_departamento;









