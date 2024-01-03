const Props_ex1 = (props) => {
    return <h2>내가 제일 좋아하는 음식은 {props.food}입니다</h2>;
};
Props_ex1.defaultProps = {
    food: "김치찌개",
};
export default Props_ex1;
