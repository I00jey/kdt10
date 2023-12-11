create table customer(
custid char(10) primary key,
custname varchar(10) not null,
addr char(10) not null,
phone char(11), 
birth date
);

desc customer;

-- INSERT 추가
insert into customer (custid, custname, addr, phone, birth) 
values ('lucky','최예지','미국 뉴욕','01022222222','2000-10-20') ;
insert into customer values ('happy','시루떡','전라북도 전주','01234567891','2020-8-10') ;

-- 여러 튜플 동시에 추가
 insert into customer 
 values ('colorful','무지개떡','전라북도 전주','2234337891','2020-8-10'),
('bad','바람떡','전라북도 전주','13242342324','2020-8-10'),
('wow','약밥','전라북도 전주','12342432432','2020-8-10'),
('touched','술빵','전라북도 전주','12432423423','2020-8-10');

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('jisu', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');
INSERT INTO customer VALUES('jy99', '수', '일본 삿포로', '01012312323', '1996-09-01');

-- SELECT 조회
select * from customer;
select custid from customer;

-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
SELECT birth from customer where custname = "강해린";
-- 고객 이름이 강해린이 아닌 고객의 생일 검색
SELECT birth from customer where custname != "강해린";
-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
select * from customer where custname > '박민지';

-- 범위
-- 1995년 이상 2000년 이하 출생 고객 검색
select * from customer where birth between '1995-01-91' and '2000-12-31';
select * from customer where birth >= '1995-01-01' and birth <= '2000-12-31';

-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
select * from customer where addr in('대한민국 서울', '영국 런던');
select * from customer where addr = '대한민국 서울' or addr = '영국 런던';
-- 주소가 서울 혹은 런던이 아닌 고객 검색
select * from customer where addr not in('대한민국 서울', '영국 런던');

-- 패턴
-- 주소가 '미국 로스앤젤리스'인 고객 검색
select * from customer where addr like '미국 로스앤젤레스'; 
-- 주소가 '미국'이 포함되어 있는 고객 검색
-- % : 0개 이상의 문자열
select * from customer where addr like '미국%';

-- 고객 이름에 뒤에서 두 번째 글자가 '지'인 고객 검색
-- _ : 임의의 하나의 문자를 의미
select * from customer where custname like '_지%';

-- 고객 이름에 마지막 글자가 '떡'인 고객 검색
select * from customer where custname like '%떡';

-- 복합 조건 (AND OR NOT) 
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
select * from customer where addr like "대한민국%" and birth >= '2000-01-01';
-- 주소지가 미국이거나 영국인 고객 검색
select * from customer where addr like '미국%' or addr like '영국%';
-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
select * from customer where phone not like '%4';

select * from customer;
select * from customer order by custname;
select * from customer order by custname desc;

select * from customer where birth >= '2000-01-01' order by addr;
-- 2000년생 이후 출생자 중에서 주소를 기준으로 오름차순, 아이디를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr asc, custid desc;

-- limit
select * from customer limit 3;
select * from customer where birth >= '2000-01-01' limit 3;

-- orders 테이블
-- 외래키 갖고 있게 만들 것
-- 외래키 제약 조건
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블 : 기본키를 갖는 테이블 (customer)
-- 참조 테이블 : 외래키가 있는 테이블 (order)
-- 형식 : FOREIGN KEY (열 이름) REFERENCES 기준 테이블(열 이름)
-- on update cascade : 기준 테이블의 데이터가 변경되면, 참조 테이블의 데이터도 변경
-- on delete cascade : 기준 테이블의 데이터가 삭제되면, 참조 테이블의 데이터도 삭제

create table orders(
	orderid int primary key auto_increment,
    custid char(10) not null, -- foreign key가 될 열
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custid) references customer(custid) on update cascade on delete cascade
);
    
INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

truncate orders;

select * from orders;
select * from customer;

-- 주문 테이블에서 상품들 총 판매 개수 검색
select sum(amount) from orders;
-- 주문 테이블에서 상품들 총 판매 개수 검색 + 의미있는 열 이름으로 변경
select sum(amount) as 'total-amount' from orders; 

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
-- 각각의 이름을 total-amout, avg-amount, min-price, max-price
select sum(amount) as 'total-amout', avg(amount) as 'avg-amount', min(price) as 'min-price', max(price) as 'max-price' from orders;
-- 주문 테이블에서 총 주문 건수 (= orders 튜플 개수)
select count(*) from orders;
-- 주문 테이블에서 주문한 고객 수
select count(distinct custid) from orders;

select custid, count(*) from orders group by custid;
-- 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount) from orders group by custid;
-- 고객별로 주문한 총 주문액 구하기
select custid, sum(price) from orders group by custid;
-- 상품별로 판매 개수 구하기
select count(amount), prodname from orders group by prodname;

-- having
-- 총 주문액이 10000원 이상인 고객에 대해서, 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount), sum(price * amount) from orders group by custid having sum(price * amount) >= 10000;
-- where로 총 주문액 검사 !error code 1111. Where절은 개별 행에 대한 조건을 검사함!
-- select custid, sum(amount), sum(price * amount) from orders where sum(price * amount) >= 10000 group by custid;
-- 위랑 동일한 조건 + 단, custid가 'bunny'인 고객은 제외 (where / group by / having 모두 사용한 예시) !순서 주의!
select custid, sum(amount), sum(price * amount) from orders where custid != 'bunny' group by custid having sum(price * amount) >= 10000;
select custid, sum(amount), sum(price * amount) from orders group by custid having sum(price * amount) >= 10000 and custid != 'bunny';

-- UPDATE
-- 데이터 수정 : update 테이블명 set 필드1 = 값1 where 필드2 = 조건2;
-- custid가 happy인 고객의 주소를 대한민국 서울로 변경
update customer set addr = '대한민국 서울' where custid = 'happy';

-- DELETE
-- 데이터 삭제 : delete from 테이블명 where 필드1 = 값1;
-- custid가 happy인 고객의 정보를 테이블에서 삭제
delete from customer where custid = 'happy';

-- 고객 테이블에서 'kiwi' 고객을 삭제했을 때, 주문 테이블에서 'kiwi' 고객의 주문 정보가 함께 삭제되는 지 확인
delete from customer where custid = 'kiwi';
select * from customer where custid = 'kiwi';
select * from orders where custid = 'kiwi';
