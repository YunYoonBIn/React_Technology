import { useState } from "react"

const Hooks = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <h1>현제 카운더 값은 {value} 입니다.</h1>

            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
}

export default Hooks