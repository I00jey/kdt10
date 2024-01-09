import styled from 'styled-components';

// CSS in JS : css를 js 안에 작성
// styled-components, emotion, styled-jsx
// 각 컴포넌트마다 격리된 스타일 적용 가능

// PascalCase 사용해야함
const StyledContainer = styled.div`
    display: flex;
`;
const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor || 'blue'};

    &:hover {
        transform: translateY(-20px);
    }
`;

function StyledComponent() {
    return (
        <StyledContainer>
            <StyledBox bgColor="red"></StyledBox>
        </StyledContainer>
    );
}

export default StyledComponent;
