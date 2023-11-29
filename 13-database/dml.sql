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

-- SELECT 조회
select * from customer;
select custid from customer;

-- WHERE 조건
-- 비교 : < > <> = <= >=
-- 범위 : BETWEEN
-- 집합 : IN, NOT IN 
-- 패턴 : LIKE
-- NULL : IS NULL, IS NOT NULL
-- 복합 조건 : AND, OR, NOT

--  비교
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

-- <order by>
-- orber by [기준값] : default 값은 primary key 기준 오름차순 정렬
select * from customer;
select * from customer order by custname;
select * from customer order by custname desc;
-- where 절과 order by 함께 사용 (단, 이때 order by가 where보다 뒤에 있어야함)
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr;
-- 2000년생 이후 출생자 중에서 주소를 기준으로 오름차순, 아이디를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr asc, custid desc;

-- <limit>
-- 행의 개수를 제한
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
    
-- 테이블을 삭제할 경우에 삭제 순서!
-- customer table, orders table => customer.custid를 기준으로 "관계"를 맺음
-- customer table 존재하는 회원만 orders table에 데이터를 추가할 수 있음
-- 만약에 orders table이 있는데, customer 테이블을 삭제(drop)하면?
-- orders table은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에 알 수 없음
-- pk-fr 연결된 테이블은 외래키가 설정된 테이블 (참조테이블) 먼저 삭제
--(1) orders table 삭제 -> (2) customer table 삭제

-- <집계 함수>
-- 계산하여 어떤 값을 리턴하는 '함수'
-- group by 절과 같이 쓰이는 케이스가 많음
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

-- <group by>
-- ~별로
-- 고객별로 주문한 주문 건수 검색
select custid, count(*) from orders group by custid;
-- 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount) from orders group by custid;
-- 고객별로 주문한 총 주문액 구하기
select custid, sum(price) from orders group by custid;
-- 상품별로 판매 개수 구하기
select count(amount), prodname from orders group by prodname;

-- <having>
-- group by 절 이후에 추가 조건
-- 총 주문액이 10000원 이상인 고객에 대해서, 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount), sum(price * amount) from orders group by custid having sum(price * amount) >= 10000;
-- where로 총 주문액 검사 !error code 1111. Where절은 개별 행에 대한 조건을 검사함 (아래는 price, amount 2개 사용)
-- select custid, sum(amount), sum(price * amount) from orders where sum(price * amount) >= 10000 group by custid;

-- 위랑 동일한 조건 + 단, custid가 'bunny'인 고객은 제외 (where / group by / having 모두 사용한 예시) !순서 주의!
select custid, sum(amount), sum(price * amount) from orders where custid != 'bunny' group by custid having sum(price * amount) >= 10000;
select custid, sum(amount), sum(price * amount) from orders group by custid having sum(price * amount) >= 10000 and custid != 'bunny';

-- having 주의 사항
-- select 절에서 group by에서 사용한 속성과 집계함수만 사용 가능

/*
where VS having

having
- 그룹에 대해서 필터링 (그래서 group by 함께 쓰임)
- group by 보다 뒤에 위치
- 집계함수랑 같이 사용 가능

where
- 각각의 행을 필터림
- group by 보다 앞에 위치
- 집계함수는 사용 X

*/

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

