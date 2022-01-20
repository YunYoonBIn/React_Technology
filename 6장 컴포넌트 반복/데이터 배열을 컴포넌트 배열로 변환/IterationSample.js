const IterationSample = () => {
    const fruits = ['사과', '파인애플', '멜론', '바나나', '수박'];
    const fruitList = fruits.map((fruit) => <li>{fruit}</li>)
    return (
        <div>
            <ul>
                {fruitList}
            </ul>
        </div>
    )
}

export default IterationSample;