const initialNumber = {
    number: 1,
};

export const mul = () => ({ type: "mul" });
export const div = () => ({ type: "div" });

const reducerPrac = (state = initialNumber, action) => {
    switch (action.type) {
        case "mul":
            return { number: state.number * 2 };
        case "div":
            return { number: state.number / 2 };
        case "reset":
            return { number: 1 };
        default:
            return state;
        // return;
        // switch문 안에 return;이 들어가게 되면 문법 오류로 reducer가 생성되지 않음
    }
};

export default reducerPrac;
