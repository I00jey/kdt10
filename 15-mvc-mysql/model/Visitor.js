// exports.getVisitors = () => {
//     return [
//         { id: 1, name: '홍길동', comment: '내가 왔다.' },
//         { id: 2, name: '이찬혁', comment: '으라차차' }
//     ]
// }

// ---- mysql 연결 -----
const mysql = require("mysql2");

// DB 연결
const conn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "1234",
    database: "kdt"
});

exports.getVisitors = (callback) => {
    // query(sql, [value], 콜백함수)
    conn.query(`SELECT * FROM visitor`, (err, rows) => {
        // DB 데이터 가져온 후 실행
        if (err) throw err;

        console.log("Visitor.js >", rows);
        /**
         * [
            { id: 1, name: '홍길동', comment: '내가 왔다.' },   
            { id: 2, name: '이찬혁', comment: '으라차차' }      ]
         */
        callback(rows); // 컨트롤러로 결과값을 넘겨줌
    });
};

exports.postVisitor = (data, callback) => {
    // data: req.body
    // cb: 콜백함수
    console.log("postVisitor >", data);

    /**
     * Prepared Statements
     * SQL 쿼리에서 사용자 입력을 안전하게 처리하고 SQL 인젝션 공격을
     * 방지하기 위한 방법
     * 입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신,
     * 플레이스홀더 사용하여 쿼리 작성
     * mysql 에서는 ? (물음표) 사용
     */
    const sql = "INSERT INTO visitor (name, comment) VALUES ( ? , ? )";
    const values = [data.name, data.comment];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log("Visitor.js >", rows);
        // ResultSetHeader {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 3,
        //     info: '',
        //     serverStatus: 2,
        //     warningStatus: 0,
        //     changedRows: 0
        // }
        callback(rows.insertId); //콜백함수 호출, 매개변수로 3이라는 값
    });
};

exports.getVisitor = (id, callback) => {
    const sql = "SELECT * FROM visitor WHERE id = ?";
    conn.query(sql, [id], (err, rows) => {
        if (err) throw err;

        console.log("Visitor.js >", rows); // [ { id: 4, name: 'apple', comment: '사과' } ]
        callback(rows[0]); // rows가 배열이므로 인덱스 사용
    });
};

exports.patchVisitor = (data, callback) => {
    const sql = "UPDATE visitor SET name = ?, comment = ? WHERE id = ?";
    const values = [data.name, data.comment, data.id];
    conn.query(sql, values, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("patchVisitor Visitor.js >", rows);
        // ResultSetHeader {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 0,
        //     info: 'Rows matched: 1  Changed: 1  Warnings: 0',
        //     serverStatus: 2,
        //     warningStatus: 0,
        //     changedRows: 1
        //   }
        callback(rows);
    });
};

exports.deleteVisitor = (id, callback) => {
    console.log(id);

    const sql = "DELETE FROM visitor WHERE id = ?";
    conn.query(sql, [id], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("deleteVisitor Visitor.js >", rows);
        // ResultSetHeader {
        //     fieldCount: 0,
        //     affectedRows: 0,
        //     insertId: 0,
        //     info: '',
        //     serverStatus: 2,
        //     warningStatus: 0,
        //     changedRows: 0
        //   }
        callback(rows);
    });
};
