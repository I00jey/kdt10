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

// 사용자 아이디 모음 객체
const userObject = {};

io.on("connection", (socket) => {
    console.log("서버 연결 완료 >", socket.id);

    // [실습3] 채팅창 입장 안내 문구
    // 같은 채팅방이니까 한쪽에 다른 유저가 접속하더라도
    // 다른 쪽 (브라우저)에도 나와야 함
    // 전체 클라이언트에게 입장 안내
    //

    // emit() from server
    // socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터를 전송
    // io.emit(event_name, data) : 서버에 접속된 모든 클라이언트에 전송
    // io.to(소켓 아이디).emit(event_name, data) : 소켓 아이디에 해당하는 특정 클라이언트(브라우저탭)에게만 전송

    // [실습4] 작성자 이름 & 채팅 보내기
    socket.on("send", (data) => {
        console.log("send로 받은 데이터 >", data);

        // [실습5] DM 구분
        // io.to(socket.id).emit() -> 소켓 아이디에 해당하는 클라이언트에게만 전송
        if (data.dm === "all") {
            // 전체 발송
            io.emit("newMessage", { id: data.id, msg: data.msg });
        } else {
            // DM 발송
            const dmSocketId = data.dm;
            const sendData = {
                id: data.id,
                msg: data.msg,
                dm: `(DM) `
            };
            // DM을 받는 사람한테 메시지 갔음
            io.to(dmSocketId).emit("newMessage", sendData);
            // DM을 보낸 사람한테 자기 자신의 메시지가 출력되어야 함
            socket.emit("newMessage", sendData);
        }
    });

    // [실습5] DM step1
    socket.on("setUserList", (data) => {
        console.log(`유저 입장 :`, data.id);
        // 입장 전체 공지
        // 입력 버튼을 누르지 않아도 사실 서버에 연결될 때 connect가 된 상태여서 차례로 입장 버튼을 누르면 입장 안내가 한번에 2개가 나올 수 있다
        io.emit("notice", `${socket.id} 님이 입장하셨습니다.`);

        // 전체 사용자 아이디 모음 객체 전달
        // 새로운 유저 추가
        // {socket.id : socket.id}
        userObject[data.id] = data.id;
        socket.emit("entrySuccess", socket.id); //현재 입장한 사람에게 입장 완료
        io.emit("updateUsers", userObject); //전체 사용자에게 사용자 업데이트
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
