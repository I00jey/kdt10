import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {
    // useContext 사용해서 context 값을 쓸 수 있음
    // useContext(UserContext);
    // console.log(useContext(UserContext));
    const { name, setName } = useContext(UserContext);
    return (
        <>
            <div>
                <h2>사용자 프로필</h2>
                <p>이름 : {name}</p>
                <button onClick={() => setName("흰수염고래")}>이름 변경</button>
            </div>
        </>
    );
}

export default UserProfile;
