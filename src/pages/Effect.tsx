import {useEffect, useState} from "react";

const Effect = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState('')
    const addCount = () => setCount(count + 1)
    useEffect(() => {
        console.log(count)
    }, [count]);
    useEffect(() => {
        console.log(todo)
    }, [todo]);
    return (
        <>
            <button onClick={() => addCount()}>+1</button>
            <div>
                {count}
            </div>
        </>
    )
}
export default Effect
