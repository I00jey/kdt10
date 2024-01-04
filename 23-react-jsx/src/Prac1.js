import React from 'react';

function Prac1() {
    const spanStyle = { textDecoration: 'underline' };
    return (
        <div
            style={{
                borderColor: 'darkgray',
                borderStyle: 'dashed',
                borderWidth: '8px',
            }}
        >
            <h2>
                제 반려 동물의 이름은 <span style={spanStyle}>시루</span>입니다.
            </h2>
            <h2>
                <span style={spanStyle}>시루</span>는
                <span style={spanStyle}>고양이</span>입니다.
            </h2>
        </div>
    );
}

export default Prac1;
