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