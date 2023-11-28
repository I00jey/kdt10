CREATE TABLE member (
	id varchar(20) NOT NULL PRIMARY KEY,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(20),
    promotion varchar(2) default 'x'
);

alter table member modify id varchar(10);
alter table member drop age;
alter table member add interest varchar(100);