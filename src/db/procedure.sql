CREATE PROCEDURE `usersAddOrEdit`(
	in _id int,
    in _nome varchar(45),
    in _telefone bigint
    
)
begin
	if _id = 0 then
		insert into tb_users (nome, telefone)
        values (_nome, _telefone);
		set _id = last_insert_id();
	else
		update tb_users set
			name = _name,
            telefone = _telefone
            where id = _id;
	end if;
end