const initicalValue = {
    boolean: "참",
};

// reducer : 데이터를 수정해주는 함수
const isVisibleReducer = (state = initicalValue, action) => {
    switch (action.type) {
        case "isvisible/참":
            return { boolean: "거짓" };
        case "isvisible/거짓":
            return { boolean: "참" };
        default:
            return state;
    }
};

export default isVisibleReducer;
