create table user(
id int not null primary key auto_increment,
userid varchar(20) not null,
name varchar(10) not null,
pw varchar(20) not null
);

DROP table user;

desc user;

insert into user values (1, '홍길동','내가 왔다'), (2, '이찬혁','으라차차');

select * from user;

select * from mysql.user;

show grants;

create user 'user'@'%' identified by '1234';

grant all privileges on *.* to 'user'@'%' with grant option;

flush privileges;

drop user 'user'@'%';