import { useEffect, useState } from "react"

const Hooks = () => {

    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickName = e => {
        setNickName(e.target.value);
    };

    useEffect(() => {
        console.log('렌더링될 때마다 실행')
        console.log({
            name,
            nickName
        })
    })

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={onChangeName} />
            <input
                type="text"
                value={nickName}
                onChange={onChangeNickName} />

            <p>이름: {name}</p>
            <p>닉네임: {nickName}</p>

        </div>
    )
}

export default Hooks