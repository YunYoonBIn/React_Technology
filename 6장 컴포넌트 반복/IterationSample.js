const IterationSample = () => {
    const 과일목록 = ['사과', '파인애플', '멜론', '바나나']
    const 과일리스트 = 과일목록.map(과일들 => <li>{과일들}</li>)
    return (
        <div>
            <ul>
                {과일리스트}
            </ul>
        </div>
    )
}

export default IterationSample;