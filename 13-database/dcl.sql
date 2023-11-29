-- DCL
-- 사용자 권한 부여 명령어
-- GRANT permission_type ON db.name.table_name TO username@host IDENTIFIED BY 'my_password' [with grant option];

-- 호스트 : 로컬 호스트
-- grant all privileges on *.* to 'user'@'localhost' IDENTIFIED BY 'yj50569485' 

-- 권한 확인 
show grants;

-- 1. 계정 생성
create user 'user'@'localhost' identified by '4321';
-- 현재 존재하는 계정, 권한 확인
select * from mysql.user;

-- 저장
flush privileges;

-- 2. 권한 부여
GRANT ALL PRIVILEGES ON *.* TO user@'localhost';

-- 3. 권한 삭제
revoke privileges on *.* from 'user'@'localhost';

-- 4. 계정 삭제
drop user user2@'%';

-- 5. 계정 수정
alter user 'user'@'localhost' identified by '1234';