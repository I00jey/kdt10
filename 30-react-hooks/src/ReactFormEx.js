import { useForm } from "react-hook-form";

function ReactFormEx() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onValid = (data) => {
        console.log("성공");
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input
                    type="text"
                    placeholder="이름"
                    {...register("username", {
                        required: "이름은 필수 항목입니다.",
                    })}
                />
                <br />
                <span>{errors.username?.message}</span>
                <br />
                <input
                    type="number"
                    placeholder="나이"
                    {...register("age", {
                        validate: {
                            checkZero: (value) => {
                                return (
                                    Number(value) >= 0 ||
                                    "0 이상의 숫자만 입력 가능합니다"
                                );
                            },
                        },
                    })}
                />
                <br />
                <span>{errors.age?.message}</span>
                <br />
                <button type="submit">제출</button>
            </form>
        </>
    );
}

export default ReactFormEx;
