create database if not exists db_restapi;

use db_restapi;

create table tb_infos (
	id INT(11) NOT NULL auto_increment,
    nome varchar(45) default null,
    telefone int(11) default null,
    primary key(id)
);

describe tb_infos;