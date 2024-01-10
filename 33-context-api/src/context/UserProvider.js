import { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {
    // props 객체 형태의 children을 인자로 받아서 하위 요소로 삽입
    // defaultUser로 설정한 값 (name, setName)
    // 이름을 변경할 수 있게 useState 사용
    const [name, setName] = useState("홍길동");
    return (
        <>
            {/* context의 provider에 객체 형태의 값을 넣음 */}
            <UserContext.Provider
                value={{ name, setName }} // 객체 형태로 보냄
            >
                {children}
            </UserContext.Provider>
        </>
    );
}

export default UserProvider;
