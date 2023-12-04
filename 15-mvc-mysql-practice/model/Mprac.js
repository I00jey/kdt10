const mysql = require("mysql2");
const conn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "1234",
    database: "kdt"
});

exports.newsignup = (data, callback) => {
    const sql = "INSERT INTO user (userid, name, pw) VALUES (?,?,?)";
    const values = [data.userid, data.name, data.pw];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        // console.log("Mprac >", rows);
        // ResultSetHeader {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 1,
        //     info: '',
        //     serverStatus: 2,
        //     warningStatus: 0,
        //     changedRows: 0
        //   }
        callback(rows);
    });
};
exports.newsignin = (userid, callback) => {
    const sql = "SELECT * FROM user WHERE userid = ?";
    conn.query(sql, [userid], (err, rows) => {
        if (err) throw err;

        // console.log("Mprac >", rows);
        // [ { id: 2, userid: 'banana', name: 'user2', pw: '2222' } ]
        callback(rows[0]);
    });
};
exports.editprofile = (data, callback) => {
    const sql = "UPDATE user SET pw=?, name=? WHERE userid = ?";
    const values = [data.pw, data.name, data.userid];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        // console.log("Mprac >", rows);
        // ResultSetHeader {
        //   fieldCount: 0,
        //   affectedRows: 1,
        //   insertId: 0,
        //   info: 'Rows matched: 1  Changed: 1  Warnings: 0',
        //   serverStatus: 34,
        //   warningStatus: 0,
        //   changedRows: 1
        // }
        callback(rows.changedRows);
    });
};
exports.deleteprofile = (data, callback) => {
    const sql = "DELETE FROM user WHERE userid = ?";
    conn.query(sql, [data], (err, rows) => {
        if (err) throw err;

        console.log("Mprac >", rows);
        // ResultSetHeader {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 0,
        //     info: '',
        //     serverStatus: 34,
        //     warningStatus: 0,
        //     changedRows: 0
        //   }
        callback(rows.affectedRows);
    });
};
