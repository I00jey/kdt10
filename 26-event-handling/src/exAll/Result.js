function Result({ data }) {
    const { fruit, background, color, content } = data;
    return (
        <>
            <img src={`${fruit}.jpeg`} alt={fruit} width={100} height={100} />
            {/* text */}
            <div
                style={{
                    marginTop: "10px",
                    backgroundColor: background,
                    color: color,
                }}
            >
                {content}
            </div>
        </>
    );
}

export default Result;
