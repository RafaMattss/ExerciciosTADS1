--Criar Entidade Departamento
CREATE TABLE departamentos(
	id_Departamento INT PRIMARY KEY,
	sigla_Departamento VARCHAR(3) NOT NULL,
	nome_Departamento VARCHAR(30) NOT NULL	

);

--Visualizar a entidade criada
SELECT * FROM departamentos;

-- Criar Entidades Cursos
CREATE TABLE cursos(
	id_curso INT PRIMARY KEY,
	id_departamento INT REFERENCES departamentos,
	sigla_curso VARCHAR(3) NOT NULL,
	nome_curso VARCHAR(30) NOT NULL

);
--Visualizar a entidade criada
SELECT * FROM cursos;

-- Criar Entidades disciplinas
CREATE TABLE discplinas (
    id_disc int PRIMARY KEY,
    id_curso INT REFERENCES cursos,
    sigla_disc VARCHAR(4) NOT NULL,
    nome_disc VARCHAR(60) NOT NULL,
    optativa BOOLEAN DEFAULT FALSE
);

--Visualizar a entidade criada
SELECT * FROM disciplinas;

-- Criar Entidades alunos
CREATE TABLE alunos (
	ra int PRIMARY KEY,
	cpf VARCHAR(60) NOT NULL UNIQUE, 
	nome_aluno VARCHAR(50) NOT NULL,
	data_nascimento DATE CHECK(AGE(CURRENT_DATE, data_nascimento)>='14 years'),
    status BOOLEAN  DEFAULT TRUE
);

--Visualizar a entidade criada
SELECT * FROM alunos;

--Criar entidade disciplinas_alunos
CREATE TABLE discplinas_alunos(
    id_disciplinas_alunos INT PRIMARY KEY,
    id_disc INT REFERENCES discplinas,
    ra INT REFERENCES alunos,
    data_matricula DATE
);

--Visualizar a entidade criada
SELECT * FROM discplinas_alunos;


