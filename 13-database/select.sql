create table user (
id varchar(10) not null primary key,
pw varchar(20) not null,
name varchar(5) not null,
gender enum('F','M', '') default '',
birthday DATE not null,
age int(3) not null default 0
);

insert into user values ('hong1234', '804bkg', '홍길동', 'M', '1990-01-31', 33),
('sexysung', 'rwerwd', '성춘향', 'F', '1992-03-31', 31),
('power70', 'sdfssdf', '변사또', 'M', '1970-05-02', 53),
('hanjo', 'xfsdfs', '한조', 'M', '1984-10-18', 39),
('widomaker', 'sdfsdf', '위도우', 'F', '1976-06-27', 47),
('dvadva', 'rththf', '송하나', 'F', '2001-06-03', 22),
('jungkrat', 'cvxcxv', '정크랫', 'M', '1999-11-11', 24);


select * from user order by birthday asc;
select * from user where gender = 'M' order by name desc;
select id, name from user where birthday like "199%";
select * from user where birthday like "%6___" order by birthday asc;
-- select * from user where birthday like "%-06-%" order by birthday asc;
select * from user where gender = 'M' and birthday like "197%";
select * from user order by age desc limit 3;
select * from user where age between 25 and 50;
update user set pw = '12345678' where id = 'hong1234';
delete from user where id = "jungkrat";
select * from user;

select customer.custname, customer.phone, orders.orderid, orders.price
from customer inner join orders on customer.custid = orders.custid;
select customer.custname, customer.phone, orders.orderid, orders.price
from customer left join orders on customer.custid = orders.custid;
select customer.custname,customercustomer customer.phone, orders.orderid, orders.price
from customer right outer join orders on customer.custid = orders.custid;