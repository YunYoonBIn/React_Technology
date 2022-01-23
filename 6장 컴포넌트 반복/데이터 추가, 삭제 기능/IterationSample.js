import { useState } from "react";

const IterationSample = () => {
    const [foods, setFoods] = useState([
        { id: 1, name: '삽겹살' },
        { id: 2, name: '피자' },
        { id: 3, name: '햄버거' },
        { id: 4, name: '치킨' },
        { id: 5, name: '초밥', },
        { id: 6, name: '김치찌개' },
    ]);
    const ID갯수 = foods.length + 1;
    const onRemove = id => {
        const nextFood = foods.filter(food => food.id !== id);
        setFoods(nextFood)
    }
    const foodList = foods.map((food) =>
        <li key={food.id}>{food.name} <button onClick={() => onRemove(food.id)}>삭제</button></li>
    );
    const [nextId, setNextId] = useState(ID갯수);
    const [textInput, setTextInput] = useState('');
    const onChange = (e) => setTextInput(e.target.value)
    const onClick = () => {
        const nextFood = foods.concat({
            id: nextId,
            name: textInput,
        })
        setTextInput('');
        setNextId(nextId + 1)
        setFoods(nextFood);
    }
    return (
        <div>
            <input
                type="text"
                onChange={onChange}
                value={textInput}
            />
            <button onClick={onClick}>추가</button>
            <ul>
                {foodList}
            </ul>
        </div>
    )
}

export default IterationSample;