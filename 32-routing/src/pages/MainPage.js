import { useSearchParams } from "react-router-dom";

// 경로가 '/'일 때 보여줄 component
function MainPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(typeof searchParams); //object
    console.log(searchParams.get("mode")); // null or Dark
    // / => null 출력
    // /?mode=Dark => Dark 출력
    return (
        <div className={["Main", searchParams.get("mode")].join(" ")}>
            <h1>Main Page</h1>
            <button
                onClick={() => {
                    // {mode : 'Dark'} 설정
                    setSearchParams({ mode: "Dark" });
                }}
            >
                Dark Mode
            </button>
        </div>
    );
}

export default MainPage;
