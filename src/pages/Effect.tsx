import {useEffect, useState} from "react";

const Effect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count => count + 1)
    }, [count]);
    return (
        <div>
            {count}
        </div>
    )
}
export default Effect
