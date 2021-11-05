function NumberComponent(props) {
    return (
        <>
            Number di Component: {props.number}
            <button onClick={() => props.changeNumber()}>Add Number</button>
        </>
    );
}

export default NumberComponent;
