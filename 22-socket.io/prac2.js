const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
// express 앱으로 http 서버를 생성
const server = http.createServer(app);
// socket.io를 http 서버에 연결
const io = socketIO(server);
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("prac2");
});

io.on("connection", (socket) => {
    console.log("서버 연결 완료 >", socket.id);

    // [실습2 & 4] 작성자 이름 & 채팅 보내기
    socket.on("pushchat", (data) => {
        io.emit("popchat", data);
    });

    // [실습3] 채팅창 입장 안내 문구
    // 같은 채팅방이니까 한쪽에 다른 유저가 접속하더라도
    // 다른 쪽 (브라우저)에도 나와야 함

    // emit() from server
    // socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터를 전송
    // io.emit(event_name, data) : 서버에 접속된 모든 클라이언트에 전송
    // io.to(소켓 아이디).emit(event_name, data) : 소켓 아이디에 해당하는 특정 클라이언트(브라우저탭)에게만 전송

    // 전체 클라이언트에게 입장 안내
    io.emit("notice", socket.id);

    // [실습5] DM기능 추가하기
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
