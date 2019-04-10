create database if not exists db_restapi;

use db_restapi;

create table tb_users (
	id INT NOT NULL auto_increment,
    nome varchar(45) default null,
    telefone bigint default null,
    primary key(id)
);

describe tb_users;

insert into tb_users (nome, telefone) values
	('natanel', 61900000000),
    ('wesley', 61900000000),
    ('pedro', 61900000000);

select * from tb_users;