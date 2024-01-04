import PropTypes from 'prop-types';
Prac1.propTypes = {
    food: PropTypes.string,
};

function Prac1(props) {
    return (
        <div>
            <span>내가 좋아하는 음식은 {props.food}입니다.</span>
            <div>{props.children}</div>
        </div>
    );
}
Prac1.defaultProps = {
    food: '비빔밥',
};

export default Prac1;
