const express = require("express");
const app = express();
const PORT = 8000;

const ws = require("ws");

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("client");
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// express 서버와 웹 소켓 서버를 연결 (같은 포트를 공유)
const wsServer = new ws.Server({ server: server, binary: false });

const sockets = []; // 클라이언트 소켓들을 저장할 배열

wsServer.on("connection", (socket) => {
    console.log("[클라이언트 연결 완료]");
    sockets.push(socket); // 배열에 접속한 클라이언트 객체 추가

    // 클라이언트의 메시지 수신
    socket.on("message", (message) => {
        // 클라이언트에서 받아온 데이터가 buffer형태일 수 있으니 문자열로 변환
        // const parsemsg = JSON.parse(message);
        // const textmsg = message.toString();
        console.log("클라이언트로부터 받은 메시지 >", textmsg);

        // 웹 소켓 서버에 접속한 모든 클라이언트에게 메세지 전송
        // = 브로드캐스팅 (여러 컴퓨터한테 데이터 전송)
        sockets.forEach((socket) => {
            socket.send(`${message}`);
        });

        // 각 클라이언트에 따로 메시지를 전송하고 싶으면
        // socket.send(`${message}`);
    });

    socket.on("error", (error) => {
        console.log("에러 발생 >", error);
    });

    socket.on("close", () => {
        console.log("[클라이언트 연결 종료]");
    });
});
